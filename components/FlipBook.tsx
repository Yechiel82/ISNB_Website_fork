"use client";
import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
// @ts-ignore: pdfjs-dist does not provide TypeScript declarations in this project
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// @ts-ignore: pdfjs-dist does not provide TypeScript declarations in this project
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const FlipBook = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pages, setPages] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [bookSize, setBookSize] = React.useState<{ width: number; height: number }>({ width: 900, height: 1272 });
  // Overlay detection/link state
  // Rectangles of the detected "black box" per page (display coordinates, relative to page container)
  const [boxRects, setBoxRects] = React.useState<Array<{ left: number; top: number; width: number; height: number } | null>>([]);
  // Link overlay areas per page (display coordinates, relative to page container)
  const [linkAreas, setLinkAreas] = React.useState<Array<Array<{ left: number; top: number; width: number; height: number; url: string }>>>([]);
  // Media player overlay per page if an embeddable media URL is found inside the black box
  const [mediaEmbeds, setMediaEmbeds] = React.useState<Array<{ left: number; top: number; width: number; height: number; kind: 'iframe' | 'video'; src: string } | null>>([]);
  // For debugging, allow showing the overlay rectangles
  const [overlayDebug, setOverlayDebug] = React.useState(false);
  // Debug: show only the detected black box (no media or links)
  const [justBoundingBox, setJustBoundingBox] = React.useState(false);
  const imgRefs = React.useRef<Array<HTMLImageElement | null>>([]);
  const pageDivRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  // Store raw PDF annotation rectangles in canvas coordinates for each page
  const pdfLinkRectsRef = React.useRef<Array<Array<{ x: number; y: number; width: number; height: number; url: string }>>>([]);
  // Fallback page-level URL parsed from text per page (if no annotation exists inside the box)
  const pageTextUrlRef = React.useRef<Array<string | null>>([]);
  // Store raw extracted page text for debugging
  const pageTextRawRef = React.useRef<Array<string>>([]);
  // Store text runs with approximate bounding boxes in canvas coordinates (for inside-box URL fallback)
  const pdfTextRunsRef = React.useRef<Array<Array<{ x: number; y: number; width: number; height: number; str: string }>>>([]);

  // Helper: find a YouTube video id within raw page text even if the URL wraps across lines/spaces
  const findYouTubeIdInText = (text: string): string | null => {
    try {
      const collapsed = (text || '').replace(/\s+/g, '');
      // youtube.com/watch?v=
      const m1 = collapsed.match(/youtube\.com\/watch\?[^#&?]*[&#?]v=([A-Za-z0-9_-]{11})/i);
      if (m1 && m1[1]) return m1[1];
      // youtu.be/ID
      const m2 = collapsed.match(/youtu\.be\/([A-Za-z0-9_-]{11})/i);
      if (m2 && m2[1]) return m2[1];
      // youtube.com/shorts/ID
      const m3 = collapsed.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/i);
      if (m3 && m3[1]) return m3[1];
      return null;
    } catch {
      return null;
    }
  };

  // Generic media detection: return iframe/video embed info for common providers or direct files
  type MediaInfo = { kind: 'iframe' | 'video'; src: string } | null;
  const detectMedia = (url: string): MediaInfo => {
    try {
      const cleaned = (url || '').trim();
      if (!cleaned) return null;
      // Remove common trailing punctuation that may come from text extraction
      const stripped = cleaned.replace(/[)\]\}.,;!?'”"’]+$/g, '');
      // Direct video files
      if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(stripped)) {
        return { kind: 'video', src: stripped };
      }
      // YouTube
      const yt = extractYouTubeId(stripped);
      if (yt) return { kind: 'iframe', src: toYouTubeEmbedUrl(yt) };
      // Vimeo: vimeo.com/{id} or /video/{id}
      const vimeoMatch = stripped.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
      if (vimeoMatch && vimeoMatch[1]) {
        return { kind: 'iframe', src: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
      }
      // Dailymotion: dailymotion.com/video/{id}
      const dm = stripped.match(/dailymotion\.com\/video\/([a-z0-9]+)/i);
      if (dm && dm[1]) {
        return { kind: 'iframe', src: `https://www.dailymotion.com/embed/video/${dm[1]}` };
      }
      // Google Drive: /file/d/{id}/view or open?id=ID or uc?export=download&id=ID
      if (/drive\.google\.com\//i.test(stripped)) {
        let id: string | null = null;
        const m1 = stripped.match(/\/file\/d\/([^/]+)\//i);
        if (m1 && m1[1]) id = m1[1];
        const m2 = stripped.match(/[?&#]id=([^&#]+)/i);
        if (!id && m2 && m2[1]) id = m2[1];
        if (id) return { kind: 'iframe', src: `https://drive.google.com/file/d/${id}/preview` };
      }
      // Last resort: treat any http(s) URL as embeddable iframe
      if (/^https?:\/\//i.test(stripped)) {
        return { kind: 'iframe', src: stripped };
      }
      return null;
    } catch {
      return null;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const files = Array.from(e.target.files || []);
    const imagePages: string[] = [];
    let loaded = 0;
    let pdfSizeSet = false;
    for (const file of files) {
      if (file.type === 'application/pdf') {
        // PDF processing
        const reader = new FileReader();
        reader.onload = async (ev) => {
          if (ev.target?.result) {
            const typedarray = new Uint8Array(ev.target.result as ArrayBuffer);
            const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
            const tmpLinkRects: Array<Array<{ x: number; y: number; width: number; height: number; url: string }>> = [];
            const tmpPageTextUrls: Array<string | null> = [];
            const tmpPageTextRaw: Array<string> = [];
            const tmpTextRuns: Array<Array<{ x: number; y: number; width: number; height: number; str: string }>> = [];
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              let viewport = page.getViewport({ scale: 2 });
              // If landscape, rotate to portrait
              let rotate = 0;
              if (viewport.width > viewport.height) {
                rotate = 90;
                viewport = page.getViewport({ scale: 2, rotation: rotate });
              }
              // Set FlipBook size based on first PDF page
              if (!pdfSizeSet) {
                const aspect = viewport.height / viewport.width;
                let width = 900;
                let height = Math.round(width * aspect);
                // Clamp height to reasonable range
                if (height < 900) height = 900;
                if (height > 1800) height = 1800;
                setBookSize({ width, height });
                pdfSizeSet = true;
              }
              const canvas = document.createElement('canvas');
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              const context = canvas.getContext('2d');
              await page.render({ canvasContext: context!, viewport }).promise;
              imagePages.push(canvas.toDataURL());

              // Extract link annotations and map to viewport/canvas coordinates
              try {
                const annotations = await page.getAnnotations();
                // @ts-ignore: pdfjs Util typing not available here
                const Util = (pdfjsLib as any).Util;
                const transform = viewport.transform;
                const pageLinks: Array<{ x: number; y: number; width: number; height: number; url: string }> = [];
                annotations?.forEach((ann: any) => {
                  const subtype = ann?.subtype || ann?.annotationType;
                  const isLink = subtype === 'Link' || subtype === 1; // 1 is LINK in AnnotationType
                  if (!isLink) return;
                  const url: string | undefined = ann?.url || ann?.unsafeUrl || ann?.a?.uri;
                  if (!url) return;
                  const rect: number[] | undefined = ann?.rect;
                  if (!rect || rect.length !== 4) return;
                  const norm = Util.normalizeRect(rect);
                  const p1 = Util.applyTransform([norm[0], norm[1]], transform);
                  const p2 = Util.applyTransform([norm[2], norm[3]], transform);
                  const left = Math.min(p1[0], p2[0]);
                  const top = Math.min(p1[1], p2[1]);
                  const width = Math.abs(p2[0] - p1[0]);
                  const height = Math.abs(p2[1] - p1[1]);
                  if (width > 1 && height > 1) {
                    pageLinks.push({ x: left, y: top, width, height, url });
                  }
                });
                tmpLinkRects[i - 1] = pageLinks;
              } catch {
                tmpLinkRects[i - 1] = [];
              }

              // Fallback: parse page text to find URL (robust for wrapped YouTube links) and collect text runs with boxes
              try {
                const text = await page.getTextContent();
                const full = (text.items || []).map((it: any) => it?.str || '').join(' ');
                // Prefer extracting a YouTube id (handles line-wrapped URLs)
                const ytId = findYouTubeIdInText(full);
                if (ytId) {
                  tmpPageTextUrls[i - 1] = `https://www.youtube.com/watch?v=${ytId}`;
                } else {
                  // Generic first URL as fallback (may truncate if the URL visually wraps)
                  const m = full.match(/https?:\/\/[^\s)]+/i);
                  tmpPageTextUrls[i - 1] = m ? m[0] : null;
                }
                tmpPageTextRaw[i - 1] = full;

                // Collect approximate bounding boxes for each text item
                // @ts-ignore
                const Util = (pdfjsLib as any).Util;
                const runs: Array<{ x: number; y: number; width: number; height: number; str: string }> = [];
                for (const it of (text.items || [])) {
                  try {
                    const t = Util.transform(viewport.transform, it.transform);
                    const x = t[4];
                    const y = t[5];
                    const fontH = Math.hypot(t[2], t[3]);
                    const w = (it.width || 0) * (viewport.scale || 1);
                    const h = fontH || (it.height || 0) * (viewport.scale || 1) || 1;
                    runs.push({ x, y: y - h, width: Math.max(1, w), height: Math.max(1, h), str: it.str || '' });
                  } catch {}
                }
                tmpTextRuns[i - 1] = runs;
              } catch {
                tmpPageTextUrls[i - 1] = null;
                tmpPageTextRaw[i - 1] = '';
                tmpTextRuns[i - 1] = [];
              }
            }
            setPages([...imagePages]);
            setCurrentPage(0);
            pdfLinkRectsRef.current = tmpLinkRects;
            pageTextUrlRef.current = tmpPageTextUrls;
            pageTextRawRef.current = tmpPageTextRaw;
            pdfTextRunsRef.current = tmpTextRuns;
            setLoading(false);
          }
        };
        reader.readAsArrayBuffer(file);
      } else if (file.type.startsWith('image/')) {
        // Image processing
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (ev.target?.result) {
            imagePages.push(ev.target.result as string);
            loaded++;
            if (loaded === files.filter(f => f.type.startsWith('image/')).length) {
              setPages([...imagePages]);
              setCurrentPage(0);
              setLoading(false);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const goToPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(pages.length - 1, p + 1));

  const bookContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  // Key to force FlipBook remount only when exiting fullscreen
  const [flipBookKey, setFlipBookKey] = React.useState(0);
  // Control whether media is embedded inline over the black box
  const [embedInline, setEmbedInline] = React.useState(true);
  // High-accuracy detection using OpenCV.js (lazy-loaded)
  const [useOpenCV, setUseOpenCV] = React.useState(false);
  const [cvReady, setCvReady] = React.useState(false);
  const opencvLoadingRef = React.useRef(false);
  // Box detection tuning parameters
  const [boxThreshold, setBoxThreshold] = React.useState(80);
  const [boxMarginX, setBoxMarginX] = React.useState(0.04);
  const [boxMarginY, setBoxMarginY] = React.useState(0.04);
  const [boxMinWidthRatio, setBoxMinWidthRatio] = React.useState(0.08);
  const [boxMinHeightRatio, setBoxMinHeightRatio] = React.useState(0.06);
  // Inset media overlay slightly inside the detected box (per-side percentage of box size)
  const [boxShrinkRatio, setBoxShrinkRatio] = React.useState(0.03);
  // Additional control to scale down media inside the fitted box (helps avoid covering text)
  const [mediaScale, setMediaScale] = React.useState(1);
  // If true, constrain YouTube embeds to 16:9; otherwise fill the detected box exactly
  const [force16x9, setForce16x9] = React.useState(false);
  // Additional fixed pixel inset to stay inside a stroked outline border
  const [borderShrinkPx, setBorderShrinkPx] = React.useState(2);

  // Lazy-load OpenCV.js when high-accuracy mode is enabled
  const loadOpenCV = React.useCallback((): Promise<void> => {
    if (cvReady) return Promise.resolve();
    if (typeof window === 'undefined') return Promise.resolve();
    const w = window as any;
    if (w.cv && typeof w.cv.imread === 'function') {
      setCvReady(true);
      return Promise.resolve();
    }
    if (opencvLoadingRef.current) {
      // Poll until cv is ready
      return new Promise((resolve) => {
        const check = () => {
          if (w.cv && typeof w.cv.imread === 'function') {
            setCvReady(true);
            resolve();
          } else {
            setTimeout(check, 60);
          }
        };
        check();
      });
    }
    opencvLoadingRef.current = true;
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://docs.opencv.org/4.x/opencv.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        const cv = (window as any).cv;
        if (cv && typeof cv.onRuntimeInitialized !== 'undefined') {
          cv.onRuntimeInitialized = () => {
            setCvReady(true);
            resolve();
          };
        } else {
          setCvReady(!!cv);
          resolve();
        }
      };
      script.onerror = () => {
        opencvLoadingRef.current = false;
        reject(new Error('Failed to load OpenCV.js'));
      };
      document.head.appendChild(script);
    });
  }, [cvReady]);

  React.useEffect(() => {
    if (useOpenCV && !cvReady) {
      loadOpenCV().catch(() => {});
    }
  }, [useOpenCV, cvReady, loadOpenCV]);

  const handleFullscreen = () => {
    const elem = bookContainerRef.current;
    if (!elem) return;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    const onFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      if (!isFs) {
        // Only when exiting fullscreen, force FlipBook remount and trigger resize
        setFlipBookKey((k) => k + 1);
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 50);
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Helper to map PDF canvas-space link rects to display-space, restrict to black box, and store per page
  const recomputeAllOverlays = React.useCallback(() => {
    const newAreas: Array<Array<{ left: number; top: number; width: number; height: number; url: string }>> = [];
    const newBoxes: Array<{ left: number; top: number; width: number; height: number } | null> = [];
  const newMedia: Array<{ left: number; top: number; width: number; height: number; kind: 'iframe' | 'video'; src: string } | null> = [];
    imgRefs.current.forEach((img, i) => {
      const parent = pageDivRefs.current[i] || (img?.parentElement as HTMLDivElement | null);
      if (!img || !parent) { newAreas[i] = []; newBoxes[i] = null; return; }
      const box = detectBoxOnDisplayedImage(img, boxThreshold, boxMarginX, boxMarginY, boxMinWidthRatio, boxMinHeightRatio);
      let displayBox: { left: number; top: number; width: number; height: number } | null = null;
      if (box) {
        const imgRect = img.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        const offsetLeft = imgRect.left - parentRect.left;
        const offsetTop = imgRect.top - parentRect.top;
        displayBox = { left: offsetLeft + box.x, top: offsetTop + box.y, width: box.width, height: box.height };
      }
      newBoxes[i] = displayBox;

      const linkRects = pdfLinkRectsRef.current[i] || [];
      if (!img.naturalWidth || !img.naturalHeight) { newAreas[i] = []; return; }
      const imgRect = img.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const offsetLeft = imgRect.left - parentRect.left;
      const offsetTop = imgRect.top - parentRect.top;
      const scaleX = imgRect.width / img.naturalWidth;
      const scaleY = imgRect.height / img.naturalHeight;

      const mapped = linkRects.map(r => ({
        left: offsetLeft + r.x * scaleX,
        top: offsetTop + r.y * scaleY,
        width: r.width * scaleX,
        height: r.height * scaleY,
        url: r.url,
      }));

      // Helper: intersection over area threshold
      const intersects = (a: { left: number; top: number; width: number; height: number }, b: { left: number; top: number; width: number; height: number }) => {
        const ax2 = a.left + a.width, ay2 = a.top + a.height;
        const bx2 = b.left + b.width, by2 = b.top + b.height;
        const ix = Math.max(0, Math.min(ax2, bx2) - Math.max(a.left, b.left));
        const iy = Math.max(0, Math.min(ay2, by2) - Math.max(a.top, b.top));
        const inter = ix * iy;
        const minArea = Math.min(a.width * a.height, b.width * b.height);
        return inter / (minArea || 1) > 0.2; // 20% overlap threshold
      };

      let filtered = mapped;
      if (displayBox) filtered = mapped.filter(m => intersects(m, displayBox!));

      // Fallback: if no annotation overlapped the box, but a URL exists in page text, make the whole box clickable
      if ((!filtered || filtered.length === 0) && displayBox) {
        const fallbackUrl = pageTextUrlRef.current[i];
        if (fallbackUrl) {
          filtered = [{ ...displayBox, url: fallbackUrl }];
        }
      }
      // Determine embeddable media (prefer the first inside-box link)
      const mediaCandidate = (filtered || [])[0];
      const mediaInfo = mediaCandidate ? detectMedia(mediaCandidate.url) : null;
      if (mediaInfo) {
        // Choose target rect: box > candidate rect > default centered 16:9
        let targetRect: { left: number; top: number; width: number; height: number } | null = null;
        if (displayBox) {
          targetRect = displayBox;
        } else if (mediaCandidate) {
          targetRect = { left: mediaCandidate.left, top: mediaCandidate.top, width: mediaCandidate.width, height: mediaCandidate.height };
        } else {
          // default: centered 16:9 within the image rect
          const imgRect2 = img.getBoundingClientRect();
          const w = Math.max(120, imgRect2.width * 0.6);
          const h = w / (16 / 9);
          const left = (imgRect2.left - parent.getBoundingClientRect().left) + (imgRect2.width - w) / 2;
          const top = (imgRect2.top - parent.getBoundingClientRect().top) + imgRect2.height * 0.6 - h / 2;
          targetRect = { left, top, width: w, height: h };
        }
        // Inset the media overlay so it never exceeds the visual box
  // Apply ratio shrink, then fixed-pixel border shrink, then optional 16:9 fitting, then scale
  let placed = shrinkRect(targetRect!, boxShrinkRatio);
  placed = shrinkRectPx(placed, borderShrinkPx);
  if (force16x9 && shouldFit16x9(mediaInfo)) placed = fitRectToAspect(placed, 16 / 9);
  const scaled = scaleRect(placed, mediaScale);
  newMedia[i] = { ...scaled, kind: mediaInfo.kind, src: mediaInfo.src };
        // Exclude the embedded candidate from clickable overlays if present
        if (mediaCandidate) newAreas[i] = (filtered || []).slice(1); else newAreas[i] = (filtered || []);
      } else {
        newMedia[i] = null;
        newAreas[i] = (filtered || []);
      }
    });
    setBoxRects(newBoxes);
    setLinkAreas(newAreas);
    setMediaEmbeds(newMedia);
  }, [boxThreshold, boxMarginX, boxMarginY, boxMinWidthRatio, boxMinHeightRatio, useOpenCV, cvReady, boxShrinkRatio, mediaScale, force16x9, borderShrinkPx]);

  // Re-detect overlay boxes and map link rectangles on resize (image size changes with container)
  React.useEffect(() => {
    const onResize = () => {
      if (!imgRefs.current.length) return;
      recomputeAllOverlays();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgRefs.current.length, recomputeAllOverlays]);

  // Recompute overlays when detection parameters change
  React.useEffect(() => {
    if (imgRefs.current.length) recomputeAllOverlays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxThreshold, boxMarginX, boxMarginY, boxMinWidthRatio, boxMinHeightRatio, useOpenCV, cvReady, boxShrinkRatio, mediaScale, force16x9, borderShrinkPx]);

  // Utility: detect a dark bordered rectangle ("black box") on the displayed <img>
  // Chooses OpenCV-based detection when enabled and ready; otherwise falls back to lightweight projection method.
  const detectBoxOnDisplayedImage = (
    imgEl: HTMLImageElement,
    threshold: number = 80,
    marginXRatio: number = 0.04,
    marginYRatio: number = 0.04,
    minWidthRatio: number = 0.08,
    minHeightRatio: number = 0.06
  ) => {
    // Prefer OpenCV path when available
    if (useOpenCV && cvReady) {
      const rect = detectBoxWithOpenCV(imgEl, minWidthRatio, minHeightRatio);
      if (rect) return rect;
    }
    return detectBoxSimple(imgEl, threshold, marginXRatio, marginYRatio, minWidthRatio, minHeightRatio);
  };

  // Lightweight JS method (existing approach): luminance threshold + projections
  const detectBoxSimple = (
    imgEl: HTMLImageElement,
    threshold: number,
    marginXRatio: number,
    marginYRatio: number,
    minWidthRatio: number,
    minHeightRatio: number
  ) => {
    try {
      const w = imgEl.clientWidth;
      const h = imgEl.clientHeight;
      if (w === 0 || h === 0) return null;
      // Draw the currently displayed image into a same-size canvas
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(imgEl, 0, 0, w, h);
      const { data } = ctx.getImageData(0, 0, w, h);

      // Binary dark mask and summed-area table (integral image) for fast area sums
      const dark = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          dark[y * w + x] = lum < threshold ? 1 : 0;
        }
      }

      const satW = w + 1;
      const satH = h + 1;
      const sat = new Uint32Array(satW * satH);
      // sat[y+1,x+1] = sum of dark in [0..y][0..x]
      for (let y = 1; y <= h; y++) {
        let rowSum = 0;
        const yy = y - 1;
        const base = y * satW;
        const prev = (y - 1) * satW;
        for (let x = 1; x <= w; x++) {
          rowSum += dark[yy * w + (x - 1)];
          sat[base + x] = sat[prev + x] + rowSum;
        }
      }
      const sumRect = (x1: number, y1: number, x2: number, y2: number) => {
        // x2,y2 are exclusive
        const X1 = Math.max(0, Math.min(w, x1));
        const Y1 = Math.max(0, Math.min(h, y1));
        const X2 = Math.max(0, Math.min(w, x2));
        const Y2 = Math.max(0, Math.min(h, y2));
        return (
          sat[Y2 * satW + X2] -
          sat[Y1 * satW + X2] -
          sat[Y2 * satW + X1] +
          sat[Y1 * satW + X1]
        );
      };

      const marginX = Math.floor(w * marginXRatio);
      const marginY = Math.floor(h * marginYRatio);

      const usableW = Math.max(1, w - 2 * marginX);
      const usableH = Math.max(1, h - 2 * marginY);

      // Row/column dark fractions across the central band (exclude margins)
      const rowFrac: number[] = new Array(h).fill(0);
      for (let y = marginY; y < h - marginY; y++) {
        const s = sumRect(marginX, y, w - marginX, y + 1);
        rowFrac[y] = s / usableW; // fraction of dark pixels in this row within margins
      }
      const colFrac: number[] = new Array(w).fill(0);
      for (let x = marginX; x < w - marginX; x++) {
        const s = sumRect(x, marginY, x + 1, h - marginY);
        colFrac[x] = s / usableH; // fraction of dark pixels in this column within margins
      }

      // Heuristics: borders appear as the first strong dark rows/cols from margins
      const baseRowThresh = 0.25; // require at least 25% dark along row to qualify as border
      const colThresh = 0.25; // similar for columns

      // 1) Determine left/right using full vertical bands (excluding margins)
      let left = -1;
      for (let x = marginX; x < Math.floor(w / 2); x++) {
        if (colFrac[x] >= colThresh) { left = x; break; }
      }
      let right = -1;
      for (let x = w - marginX - 1; x >= Math.floor(w / 2); x--) {
        if (colFrac[x] >= colThresh) { right = x; break; }
      }
      if (left < 0 || right < 0) {
        const halfX = Math.floor(w / 2);
        let leftVal = -1, rightVal = -1;
        for (let x = marginX; x < halfX; x++) if (colFrac[x] > leftVal) { leftVal = colFrac[x]; left = x; }
        for (let x = halfX; x < w - marginX; x++) if (colFrac[x] > rightVal) { rightVal = colFrac[x]; right = x; }
      }
      if (left < 0 || right < 0 || right - left < 4) return null;
      const xPad = Math.max(2, Math.floor((right - left) * 0.02));
      const x1n = Math.max(marginX, left + xPad);
      const x2n = Math.min(w - marginX, right - xPad);

      // 2) Determine top/bottom only within [x1n, x2n] so outside text doesn't interfere
      const rowFracN: number[] = new Array(h).fill(0);
      const usableWn = Math.max(1, x2n - x1n);
      for (let y = marginY; y < h - marginY; y++) {
        const s = sumRect(x1n, y, x2n, y + 1);
        rowFracN[y] = s / usableWn;
      }
      const rowThresh = Math.max(0.15, baseRowThresh * 0.7);
      let top = -1;
      for (let y = marginY; y < Math.floor(h / 2); y++) {
        if (rowFracN[y] >= rowThresh) { top = y; break; }
      }
      let bottom = -1;
      for (let y = h - marginY - 1; y >= Math.floor(h / 2); y--) {
        if (rowFracN[y] >= rowThresh) { bottom = y; break; }
      }

      // Fallback to maxima method just for top/bottom if needed
      if (top < 0 || bottom < 0) {
        const halfY = Math.floor(h / 2);
        let topVal = -1, bottomVal = -1;
        for (let y = marginY; y < halfY; y++) if (rowFracN[y] > topVal) { topVal = rowFracN[y]; top = y; }
        for (let y = halfY; y < h - marginY; y++) if (rowFracN[y] > bottomVal) { bottomVal = rowFracN[y]; bottom = y; }
      }

      if (!isFinite(top) || !isFinite(bottom) || !isFinite(left) || !isFinite(right)) return null;
      if (top < 0 || left < 0 || bottom <= top || right <= left) return null;
      if (bottom - top < h * minHeightRatio || right - left < w * minWidthRatio) return null;

      // Validate that the interior is mostly light; if not, adjust edges inward until it is
      let x1 = left, y1 = top, x2 = right, y2 = bottom; // inclusive indices
      const toExclusive = (v: number) => v + 1; // for sumRect exclusive endpoint
      const maxAdjustX = Math.floor((x2 - x1) * 0.25);
      const maxAdjustY = Math.floor((y2 - y1) * 0.25);
      const interiorDarkMax = 0.12; // interior should be <12% dark
      const borderInset = 2; // avoid counting the border stroke itself

      // Helper to compute dark fraction inside shrunken interior
      const interiorFrac = () => {
        const ix1 = Math.min(x2 - 1, x1 + borderInset);
        const iy1 = Math.min(y2 - 1, y1 + borderInset);
        const ix2 = Math.max(ix1 + 1, x2 - borderInset);
        const iy2 = Math.max(iy1 + 1, y2 - borderInset);
        const area = Math.max(1, (ix2 - ix1) * (iy2 - iy1));
        const s = sumRect(ix1, iy1, toExclusive(ix2), toExclusive(iy2));
        return s / area;
      };

      // Adjust bottom up if a strip near the bottom is too dark (likely touching text)
      let adjustCount = 0;
      const bandH = Math.max(2, Math.floor((y2 - y1) * 0.06));
      while (adjustCount < maxAdjustY && (y2 - y1) > h * minHeightRatio) {
        const stripY1 = Math.max(y1 + borderInset, y2 - bandH);
        const stripY2 = y2;
        const s = sumRect(x1 + borderInset, stripY1, toExclusive(x2 - borderInset), toExclusive(stripY2));
        const area = Math.max(1, (x2 - x1 - 2 * borderInset) * (stripY2 - stripY1));
        const frac = s / area;
        if (frac > interiorDarkMax) {
          y2 -= 1; // move bottom up
          adjustCount++;
        } else break;
      }

      // Adjust top down if a strip near the top is too dark
      adjustCount = 0;
      while (adjustCount < maxAdjustY && (y2 - y1) > h * minHeightRatio) {
        const stripY1 = y1;
        const stripY2 = Math.min(y2 - borderInset, y1 + bandH);
        const s = sumRect(x1 + borderInset, stripY1, toExclusive(x2 - borderInset), toExclusive(stripY2));
        const area = Math.max(1, (x2 - x1 - 2 * borderInset) * (stripY2 - stripY1));
        const frac = s / area;
        if (frac > interiorDarkMax) {
          y1 += 1; // move top down
          adjustCount++;
        } else break;
      }

      // Adjust right/left similarly if needed
      adjustCount = 0;
      const bandW = Math.max(2, Math.floor((x2 - x1) * 0.06));
      while (adjustCount < maxAdjustX && (x2 - x1) > w * minWidthRatio) {
        const stripX1 = Math.max(x1 + borderInset, x2 - bandW);
        const stripX2 = x2;
        const s = sumRect(stripX1, y1 + borderInset, toExclusive(stripX2), toExclusive(y2 - borderInset));
        const area = Math.max(1, (stripX2 - stripX1) * (y2 - y1 - 2 * borderInset));
        const frac = s / area;
        if (frac > interiorDarkMax) {
          x2 -= 1; // move right inward
          adjustCount++;
        } else break;
      }

      adjustCount = 0;
      while (adjustCount < maxAdjustX && (x2 - x1) > w * minWidthRatio) {
        const stripX1 = x1;
        const stripX2 = Math.min(x2 - borderInset, x1 + bandW);
        const s = sumRect(stripX1, y1 + borderInset, toExclusive(stripX2), toExclusive(y2 - borderInset));
        const area = Math.max(1, (stripX2 - stripX1) * (y2 - y1 - 2 * borderInset));
        const frac = s / area;
        if (frac > interiorDarkMax) {
          x1 += 1; // move left inward
          adjustCount++;
        } else break;
      }

      if (y2 - y1 < h * minHeightRatio || x2 - x1 < w * minWidthRatio) return null;

      return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
    } catch {
      return null;
    }
  };

  // OpenCV-based method: grayscale -> blur -> adaptive threshold (inv) -> morphology close -> Canny -> contours -> largest bounding rect
  const detectBoxWithOpenCV = (
    imgEl: HTMLImageElement,
    minWidthRatio: number,
    minHeightRatio: number
  ) => {
    try {
      const w = imgEl.clientWidth;
      const h = imgEl.clientHeight;
      if (!w || !h) return null;
      const tmp = document.createElement('canvas');
      tmp.width = w; tmp.height = h;
      const ctx = tmp.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(imgEl, 0, 0, w, h);
      const cv = (window as any).cv;
      if (!cv || typeof cv.imread !== 'function') return null;

      const src = cv.imread(tmp);
      const gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      const blurred = new cv.Mat();
      const ksize = new cv.Size(5, 5);
      cv.GaussianBlur(gray, blurred, ksize, 0, 0);

      const bin = new cv.Mat();
      // Invert threshold so dark strokes become white
      cv.adaptiveThreshold(
        blurred,
        bin,
        255,
        cv.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv.THRESH_BINARY_INV,
        11,
        2
      );

      // Close small gaps in the rectangle border
      const kernel = cv.Mat.ones(3, 3, cv.CV_8U);
      const closed = new cv.Mat();
      cv.morphologyEx(bin, closed, cv.MORPH_CLOSE, kernel);

      // Find contours on the closed binary image
      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();
      cv.findContours(closed, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

      let best: { x: number; y: number; width: number; height: number } | null = null;
      let bestArea = 0;
      const minW = w * (minWidthRatio || 0.08);
      const minH = h * (minHeightRatio || 0.06);

      for (let i = 0; i < contours.size(); i++) {
        const cnt = contours.get(i);
        const peri = cv.arcLength(cnt, true);
        const approx = new cv.Mat();
        cv.approxPolyDP(cnt, approx, 0.02 * peri, true);
        // Prefer convex 4-point polygons (rectangles)
        let rectCandidate: { x: number; y: number; width: number; height: number } | null = null;
        if (approx.rows === 4) {
          // @ts-ignore: OpenCV.js typings not present
          const isConvex = cv.isContourConvex ? cv.isContourConvex(approx) : true;
          if (isConvex) {
            const r = cv.boundingRect(approx);
            rectCandidate = { x: r.x, y: r.y, width: r.width, height: r.height };
          }
        }
        if (!rectCandidate) {
          const r = cv.boundingRect(cnt);
          rectCandidate = { x: r.x, y: r.y, width: r.width, height: r.height };
        }

        if (rectCandidate.width >= minW && rectCandidate.height >= minH) {
          // Validate interior is mostly light on the binary mask (few white pixels inside shrunken ROI)
          const inset = Math.max(2, Math.floor(Math.min(rectCandidate.width, rectCandidate.height) * 0.03));
          const rx = rectCandidate.x + inset;
          const ry = rectCandidate.y + inset;
          const rw = Math.max(1, rectCandidate.width - 2 * inset);
          const rh = Math.max(1, rectCandidate.height - 2 * inset);
          const roi = closed.roi(new cv.Rect(rx, ry, rw, rh));
          const nz = cv.countNonZero(roi);
          roi.delete();
          const frac = nz / (rw * rh);
          // For a hollow black box, interior in inverted mask should be near 0
          if (frac < 0.12) {
            const area = rectCandidate.width * rectCandidate.height;
            if (area > bestArea) {
              best = rectCandidate;
              bestArea = area;
            }
          }
        }

        cnt.delete();
        approx.delete();
      }

      // Cleanup mats
      src.delete();
      gray.delete();
      blurred.delete();
      bin.delete();
      closed.delete();
      contours.delete();
      hierarchy.delete();
      kernel.delete();

      return best;
    } catch {
      return null;
    }
  };

  // Compute and store overlays for a single page when its <img> loads
  const computeOverlaysForPage = (pageIndex: number, imgEl: HTMLImageElement) => {
    const parent = pageDivRefs.current[pageIndex] || (imgEl.parentElement as HTMLDivElement | null);
    if (!parent) return;
    const imgRect = imgEl.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const offsetLeft = imgRect.left - parentRect.left;
    const offsetTop = imgRect.top - parentRect.top;

    const box = detectBoxOnDisplayedImage(imgEl, boxThreshold, boxMarginX, boxMarginY, boxMinWidthRatio, boxMinHeightRatio);
    const displayBox = box ? { left: offsetLeft + box.x, top: offsetTop + box.y, width: box.width, height: box.height } : null;
    setBoxRects((prev) => {
      const next = [...prev];
      next[pageIndex] = displayBox;
      return next;
    });

    const linkRects = pdfLinkRectsRef.current[pageIndex] || [];
    const scaleX = imgRect.width / (imgEl.naturalWidth || 1);
    const scaleY = imgRect.height / (imgEl.naturalHeight || 1);
    const mapped = linkRects.map(r => ({
      left: offsetLeft + r.x * scaleX,
      top: offsetTop + r.y * scaleY,
      width: r.width * scaleX,
      height: r.height * scaleY,
      url: r.url,
    }));

    const intersects = (a: { left: number; top: number; width: number; height: number }, b: { left: number; top: number; width: number; height: number }) => {
      const ax2 = a.left + a.width, ay2 = a.top + a.height;
      const bx2 = b.left + b.width, by2 = b.top + b.height;
      const ix = Math.max(0, Math.min(ax2, bx2) - Math.max(a.left, b.left));
      const iy = Math.max(0, Math.min(ay2, by2) - Math.max(a.top, b.top));
      const inter = ix * iy;
      const minArea = Math.min(a.width * a.height, b.width * b.height);
      return inter / (minArea || 1) > 0.2;
    };

    let filtered = mapped;
    if (displayBox) filtered = mapped.filter(m => intersects(m, displayBox));
    if ((!filtered || filtered.length === 0) && displayBox) {
      // Try to recover a URL from text runs that lie inside the box
      const runs = pdfTextRunsRef.current[pageIndex] || [];
      const boxCanvas = {
        x: (displayBox.left - offsetLeft) / (scaleX || 1),
        y: (displayBox.top - offsetTop) / (scaleY || 1),
        w: displayBox.width / (scaleX || 1),
        h: displayBox.height / (scaleY || 1),
      };
      const insideRuns = runs.filter(r => {
        const cx = r.x + r.width / 2;
        const cy = r.y + r.height / 2;
        return cx >= boxCanvas.x && cx <= boxCanvas.x + boxCanvas.w && cy >= boxCanvas.y && cy <= boxCanvas.y + boxCanvas.h;
      });
      const insideText = insideRuns.map(r => r.str || '').join(' ');
      let urlFromBox: string | null = null;
      const ytIdFromBox = findYouTubeIdInText(insideText);
      if (ytIdFromBox) {
        urlFromBox = `https://www.youtube.com/watch?v=${ytIdFromBox}`;
      } else {
        const m = insideText.match(/https?:\/\/[^\s)]+/i);
        urlFromBox = m ? m[0] : null;
      }
      const fallbackUrl = urlFromBox || pageTextUrlRef.current[pageIndex];
      if (fallbackUrl) filtered = [{ ...displayBox, url: fallbackUrl }];
    }
    // Media embedding decision (prefer first candidate)
    const mediaCandidate = (filtered || [])[0];
    const mediaInfo = mediaCandidate ? detectMedia(mediaCandidate.url) : null;
    setLinkAreas((prev) => {
      const next = [...prev];
      if (mediaInfo) {
        next[pageIndex] = (filtered || []).slice(1);
      } else {
        next[pageIndex] = (filtered || []);
      }
      return next;
    });
    setMediaEmbeds((prev) => {
      const next = [...prev];
      if (mediaInfo) {
        // Choose target rect: box > candidate rect > default centered 16:9
        let targetRect: { left: number; top: number; width: number; height: number } | null = null;
        if (displayBox) {
          targetRect = displayBox;
        } else if (mediaCandidate) {
          targetRect = { left: mediaCandidate.left, top: mediaCandidate.top, width: mediaCandidate.width, height: mediaCandidate.height };
        } else {
          const imgRect2 = imgEl.getBoundingClientRect();
          const w = Math.max(120, imgRect2.width * 0.6);
          const h = w / (16 / 9);
          const parentRect2 = (pageDivRefs.current[pageIndex] || (imgEl.parentElement as HTMLDivElement)).getBoundingClientRect();
          const left = (imgRect2.left - parentRect2.left) + (imgRect2.width - w) / 2;
          const top = (imgRect2.top - parentRect2.top) + imgRect2.height * 0.6 - h / 2;
          targetRect = { left, top, width: w, height: h };
        }
  let placed = shrinkRect(targetRect!, boxShrinkRatio);
  placed = shrinkRectPx(placed, borderShrinkPx);
  if (force16x9 && shouldFit16x9(mediaInfo)) placed = fitRectToAspect(placed, 16 / 9);
  const scaled = scaleRect(placed, mediaScale);
  next[pageIndex] = { ...scaled, kind: mediaInfo.kind, src: mediaInfo.src };
      } else {
        next[pageIndex] = null;
      }
      return next;
    });
  };

  // Geometry helper: shrink a rect by a per-side ratio of its own size
  const shrinkRect = (
    rect: { left: number; top: number; width: number; height: number },
    ratio: number
  ): { left: number; top: number; width: number; height: number } => {
    const r = Math.max(0, Math.min(0.2, isFinite(ratio) ? ratio : 0));
    const insetX = rect.width * r;
    const insetY = rect.height * r;
    const w = Math.max(1, rect.width - 2 * insetX);
    const h = Math.max(1, rect.height - 2 * insetY);
    return {
      left: rect.left + insetX,
      top: rect.top + insetY,
      width: w,
      height: h,
    };
  };

  // Geometry helper: shrink a rect by a fixed pixel amount per side
  const shrinkRectPx = (
    rect: { left: number; top: number; width: number; height: number },
    px: number
  ): { left: number; top: number; width: number; height: number } => {
    const p = Math.max(0, isFinite(px) ? px : 0);
    return {
      left: rect.left + p,
      top: rect.top + p,
      width: Math.max(1, rect.width - 2 * p),
      height: Math.max(1, rect.height - 2 * p),
    };
  };

  // Fit a rectangle with a given aspect ratio inside a container, anchored to top-left (avoid covering below text)
  const fitRectToAspect = (
    container: { left: number; top: number; width: number; height: number },
    aspect: number // width / height
  ): { left: number; top: number; width: number; height: number } => {
    if (!isFinite(aspect) || aspect <= 0) return container;
    const containerAspect = container.width / (container.height || 1);
    if (containerAspect >= aspect) {
      // Container is wider than desired; limit by height
      const height = container.height;
      const width = height * aspect;
      return { left: container.left, top: container.top, width, height };
    } else {
      // Container is taller/narrower; limit by width
      const width = container.width;
      const height = width / aspect;
      return { left: container.left, top: container.top, width, height };
    }
  };

  const shouldFit16x9 = (media: { kind: 'iframe' | 'video'; src: string } | null): boolean => {
    if (!media) return false;
    // Apply to YouTube embeds specifically to prevent overly tall iframes hiding text
    try {
      const u = new URL(media.src);
      return /youtube\.com$/i.test(u.hostname) || /youtube\.com/i.test(media.src);
    } catch {
      return /youtube\.com/i.test(media.src);
    }
  };

  // Scale a rectangle around its top-left corner by a factor (0.5..1.0)
  const scaleRect = (
    rect: { left: number; top: number; width: number; height: number },
    factor: number
  ): { left: number; top: number; width: number; height: number } => {
    const f = Math.max(0.3, Math.min(1.0, isFinite(factor) ? factor : 1));
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width * f,
      height: rect.height * f,
    };
  };

  // Utilities: YouTube URL handling (used by detectMedia and text parsing)
  const extractYouTubeId = (url: string): string | null => {
    try {
      const cleaned = (url || '').replace(/\s+/g, '');
      const u = new URL(cleaned);
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.split('/').filter(Boolean)[0];
        return id || null;
      }
      if (u.hostname.includes('youtube.com')) {
        if (u.pathname.startsWith('/watch')) {
          const v = u.searchParams.get('v');
          return v || null;
        }
        if (u.pathname.startsWith('/shorts/')) {
          const id = u.pathname.split('/')[2];
          return id || null;
        }
        if (u.pathname.startsWith('/embed/')) {
          const id = u.pathname.split('/')[2];
          return id || null;
        }
      }
      return null;
    } catch {
      return null;
    }
  };
  const toYouTubeEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

  // Compute a debug media preview for a page, even if overlay placement failed
  const getDebugMediaForPage = (pageIndex: number): MediaInfo => {
    // 1) Already computed box-anchored media
    const boxed = mediaEmbeds[pageIndex];
    if (boxed) return { kind: boxed.kind, src: boxed.src };
    // 2) Try any embeddable link annotation on the page
    for (const a of (pdfLinkRectsRef.current[pageIndex] || [])) {
      const info = detectMedia(a.url);
      if (info) return info;
    }
    // 3) Fallback to page text URL
    const textUrl = pageTextUrlRef.current[pageIndex];
    if (textUrl) {
      const info = detectMedia(textUrl);
      if (info) return info;
    }
    return null;
  };

  return (
    <div className="bg-white flex items-center justify-center px-1">
      <div className="w-full bg-white shadow-md rounded-lg p-2 flex flex-col items-center my-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 tracking-tight">Flip Book</h1>
        <label htmlFor="flipbook-upload" className="mb-4 flex flex-col items-center cursor-pointer">
          <span className="text-base font-medium text-gray-700 mb-1 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12" /></svg>
            Upload images or PDF
          </span>
          <input
            id="flipbook-upload"
            type="file"
            multiple
            accept="image/*,application/pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="text-xs text-gray-400">Supported: Images & PDF (multiple files)</span>
        </label>
        {pages.length > 0 && !loading && (
          <button
            onClick={handleFullscreen}
            className="mb-2 px-3 py-1.5 bg-gray-800 text-white rounded shadow hover:bg-gray-900 transition font-semibold text-sm"
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? (
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Exit Fullscreen
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-16h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3" /></svg>
                Full Screen
              </span>
            )}
          </button>
        )}
        {/* Temporary debug: show a small media player derived from extracted URL below the Full Screen button */}
        {pages.length > 0 && !loading && overlayDebug && (
          <div className="mb-2 w-full max-w-[720px] flex flex-col items-start gap-1">
            {(() => {
              const dbg = getDebugMediaForPage(currentPage);
              if (!dbg) return <span className="text-xs text-gray-500">Debug: No embeddable media detected on this page</span>;
              if (dbg.kind === 'video') {
                return (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Debug Media (video):</span>
                    <video
                      src={dbg.src}
                      width={320}
                      height={180}
                      controls
                      className="rounded border border-gray-200 shadow-sm bg-black"
                    />
                  </div>
                );
              }
              return (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Debug Media (iframe):</span>
                  <iframe
                    src={dbg.src}
                    width={320}
                    height={180}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded border border-gray-200 shadow-sm"
                    title={`Debug media preview for page ${currentPage + 1}`}
                  />
                </div>
              );
            })()}
          </div>
        )}
        {pages.length > 0 && !loading && (
          <div className="mb-2 flex items-center gap-3 w-full max-w-[720px]">
            <label className="flex items-center gap-1 text-xs text-gray-600">
              <input type="checkbox" checked={overlayDebug} onChange={(e) => setOverlayDebug(e.target.checked)} />
              Show overlays
            </label>
            <label className="flex items-center gap-1 text-xs text-gray-600">
              <input type="checkbox" checked={justBoundingBox} onChange={(e) => setJustBoundingBox(e.target.checked)} />
              Just bounding box (no media)
            </label>
            <label className="flex items-center gap-1 text-xs text-gray-600">
              <input type="checkbox" checked={embedInline} onChange={(e) => setEmbedInline(e.target.checked)} />
              Embed media inline
            </label>
            <label className="flex items-center gap-1 text-xs text-gray-600">
              <input
                type="checkbox"
                checked={useOpenCV}
                onChange={(e) => setUseOpenCV(e.target.checked)}
              />
              High accuracy (OpenCV)
            </label>
            {useOpenCV && (
              <span className="text-xs text-gray-500">OpenCV: {cvReady ? 'ready' : 'loading…'}</span>
            )}
            <span className="text-xs text-gray-500">Links are auto-extracted from the PDF inside the black box</span>
          </div>
        )}
        {pages.length > 0 && !loading && overlayDebug && (
          <div className="mb-2 w-full max-w-[720px] bg-gray-50 p-3 rounded border">
            <div className="text-xs font-semibold text-gray-700 mb-2">Box Detection Tuning</div>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Luminance Threshold: {boxThreshold}</span>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={boxThreshold}
                  onChange={(e) => setBoxThreshold(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Margin X: {(boxMarginX * 100).toFixed(1)}%</span>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.01"
                  value={boxMarginX}
                  onChange={(e) => setBoxMarginX(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Margin Y: {(boxMarginY * 100).toFixed(1)}%</span>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.01"
                  value={boxMarginY}
                  onChange={(e) => setBoxMarginY(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Min Width: {(boxMinWidthRatio * 100).toFixed(1)}%</span>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={boxMinWidthRatio}
                  onChange={(e) => setBoxMinWidthRatio(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Min Height: {(boxMinHeightRatio * 100).toFixed(1)}%</span>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={boxMinHeightRatio}
                  onChange={(e) => setBoxMinHeightRatio(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Shrink inside box: {(boxShrinkRatio * 100).toFixed(1)}% per side</span>
                <input
                  type="range"
                  min="0"
                  max="0.2"
                  step="0.005"
                  value={boxShrinkRatio}
                  onChange={(e) => setBoxShrinkRatio(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Media size inside box: {(mediaScale * 100).toFixed(0)}%</span>
                <input
                  type="range"
                  min="0.3"
                  max="1"
                  step="0.01"
                  value={mediaScale}
                  onChange={(e) => setMediaScale(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={force16x9}
                  onChange={(e) => setForce16x9(e.target.checked)}
                />
                <span className="text-xs text-gray-600">Force 16:9 for YouTube</span>
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-600">Border shrink (px): {borderShrinkPx}px</span>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={borderShrinkPx}
                  onChange={(e) => setBorderShrinkPx(Number(e.target.value))}
                  className="mt-1"
                />
              </label>
            </div>
          </div>
        )}
        {loading && <div className="text-center text-gray-700 mb-2 animate-pulse">Loading pages...</div>}
        {pages.length > 0 && !loading && (
          <div
            ref={bookContainerRef}
            className={`flex flex-col items-center w-full ${isFullscreen ? 'fixed inset-0 bg-black z-50 justify-center p-0 m-0' : ''}`}
            style={isFullscreen ? { width: '100vw', height: '100vh' } : {}}
          >
            <HTMLFlipBook
              key={flipBookKey}
              width={isFullscreen ? window.innerWidth : bookSize.width}
              height={isFullscreen ? window.innerHeight : bookSize.height}
              size="stretch"
              minWidth={isFullscreen ? window.innerWidth : 200}
              minHeight={isFullscreen ? window.innerHeight : 220}
              maxWidth={isFullscreen ? window.innerWidth : 900}
              maxHeight={isFullscreen ? window.innerHeight : 1800}
              drawShadow={true}
              flippingTime={700}
              useMouseEvents={true}
              showPageCorners={true}
              className={`shadow-lg border rounded-lg ${isFullscreen ? '' : ''}`}
              style={isFullscreen ? { margin: 0, background: '#222', width: '100vw', height: '100vh' } : { background: '#fff' }}
              startPage={0}
              mobileScrollSupport={true}
              swipeDistance={50}
              maxShadowOpacity={0.5}
              showCover={false}
              onFlip={(e) => setCurrentPage(e.data)}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              disableFlipByClick={false}
            >
              {pages.map((src, i) => (
                <div
                  key={i}
                  ref={(el) => (pageDivRefs.current[i] = el)}
                  className="w-full h-full bg-white p-0 m-0 relative"
                >
                  <img
                    ref={(el) => (imgRefs.current[i] = el)}
                    src={src}
                    alt={`Page ${i + 1}`}
                    className="w-full h-full object-contain rounded shadow m-0"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      computeOverlaysForPage(i, img);
                    }}
                  />
                  {/* Visualize detected black box rectangle */}
                  {(overlayDebug || justBoundingBox) && boxRects[i] && (
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        left: boxRects[i]!.left,
                        top: boxRects[i]!.top,
                        width: boxRects[i]!.width,
                        height: boxRects[i]!.height,
                        border: '2px dashed rgba(255,165,0,0.9)',
                        background: overlayDebug ? 'rgba(255,165,0,0.08)' : 'transparent',
                        borderRadius: 2,
                        zIndex: 25,
                      }}
                      aria-label={`Detected black box for page ${i + 1}`}
                    />
                  )}
                  {/* Non-YouTube clickable link overlays */}
                  {!justBoundingBox && linkAreas[i] && linkAreas[i].map((area, idx) => (
                    <a
                      key={idx}
                      href={area.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute"
                      style={{
                        left: area.left,
                        top: area.top,
                        width: area.width,
                        height: area.height,
                        background: overlayDebug ? 'rgba(0,128,255,0.12)' : 'rgba(0,0,0,0.0)',
                        outline: overlayDebug ? '2px solid rgba(0,128,255,0.7)' : 'none',
                        display: 'block',
                        zIndex: 20,
                        cursor: 'pointer',
                      }}
                      aria-label={`Open link for page ${i + 1}`}
                    />
                  ))}
                  {/* Media player overlay if present */}
                  {embedInline && !justBoundingBox && mediaEmbeds[i] && (
                    mediaEmbeds[i]!.kind === 'video' ? (
                      <video
                        src={mediaEmbeds[i]!.src}
                        className="absolute rounded bg-black"
                        style={{
                          left: mediaEmbeds[i]!.left,
                          top: mediaEmbeds[i]!.top,
                          width: mediaEmbeds[i]!.width,
                          height: mediaEmbeds[i]!.height,
                          zIndex: 30,
                          border: overlayDebug ? '2px solid rgba(255,0,0,0.6)' : 'none',
                        }}
                        controls
                        title={`Video for page ${i + 1}`}
                      />
                    ) : (
                      <iframe
                        src={mediaEmbeds[i]!.src}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute rounded"
                        style={{
                          left: mediaEmbeds[i]!.left,
                          top: mediaEmbeds[i]!.top,
                          width: mediaEmbeds[i]!.width,
                          height: mediaEmbeds[i]!.height,
                          zIndex: 30,
                          background: '#000',
                          border: overlayDebug ? '2px solid rgba(255,0,0,0.6)' : 'none',
                        }}
                        title={`Embedded media for page ${i + 1}`}
                      />
                    )
                  )}
                  {/* Debug text panel */}
                  {overlayDebug && (
                    <div
                      className="absolute"
                      style={{
                        left: 8,
                        top: 8,
                        maxWidth: '70%',
                        maxHeight: '45%',
                        overflow: 'auto',
                        background: 'rgba(255,255,255,0.92)',
                        color: '#111',
                        fontSize: 10,
                        lineHeight: 1.2,
                        padding: 6,
                        borderRadius: 6,
                        zIndex: 40,
                        pointerEvents: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      <div><strong>Debug Page {i + 1}</strong></div>
                      <div>Box: {boxRects[i] ? `${Math.round(boxRects[i]!.left)}, ${Math.round(boxRects[i]!.top)} · ${Math.round(boxRects[i]!.width)}x${Math.round(boxRects[i]!.height)}` : 'none'}</div>
                      <div>Annots: {(pdfLinkRectsRef.current[i] || []).length}</div>
                      {(pdfLinkRectsRef.current[i] || []).slice(0,3).map((r, j) => (
                        <div key={j} style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>• {r.url}</div>
                      ))}
                      {((pdfLinkRectsRef.current[i] || []).length > 3) && (
                        <div>… and { (pdfLinkRectsRef.current[i]!.length - 3) } more</div>
                      )}
                      <div>Text URL: {pageTextUrlRef.current[i] || '—'}</div>
                      <div>Detector: {useOpenCV ? (cvReady ? 'OpenCV (ready)' : 'OpenCV (loading…)') : 'Simple'}</div>
                      <div>Media: {mediaEmbeds[i] ? `${mediaEmbeds[i]!.kind} → ${mediaEmbeds[i]!.src}` : '—'} {mediaEmbeds[i] && (embedInline ? '(inline)' : '(hidden)')}</div>
                      <div style={{marginTop:4, opacity:0.85}}>Text:</div>
                      <div style={{whiteSpace:'pre-wrap'}}>
                        {(pageTextRawRef.current[i] || '').slice(0,300)}{(pageTextRawRef.current[i] || '').length > 300 ? '…' : ''}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </HTMLFlipBook>
            <span className="mt-1 text-xs text-gray-500">Spread {Math.floor(currentPage / 2) + 1} / {Math.ceil(pages.length / 2)}</span>
          </div>
        )}
        {pages.length === 0 && !loading && (
          <div className="text-center text-gray-500 mt-4">
            <span className="block text-base">Upload images or a PDF to start flipping through your book!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipBook;
