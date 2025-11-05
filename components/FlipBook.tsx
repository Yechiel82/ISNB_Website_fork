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
  // Box detection tuning parameters
  const [boxThreshold, setBoxThreshold] = React.useState(80);
  const [boxMarginX, setBoxMarginX] = React.useState(0.04);
  const [boxMarginY, setBoxMarginY] = React.useState(0.04);
  const [boxMinWidthRatio, setBoxMinWidthRatio] = React.useState(0.08);
  const [boxMinHeightRatio, setBoxMinHeightRatio] = React.useState(0.06);

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
        newMedia[i] = { ...targetRect!, kind: mediaInfo.kind, src: mediaInfo.src };
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
  }, []);

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
  }, [boxThreshold, boxMarginX, boxMarginY, boxMinWidthRatio, boxMinHeightRatio]);

  // Utility: detect a dark bordered rectangle ("black box") on the displayed <img>
  const detectBoxOnDisplayedImage = (imgEl: HTMLImageElement, threshold: number = 80, marginXRatio: number = 0.04, marginYRatio: number = 0.04, minWidthRatio: number = 0.08, minHeightRatio: number = 0.06) => {
    try {
      const w = imgEl.clientWidth;
      const h = imgEl.clientHeight;
      if (w === 0 || h === 0) return null;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(imgEl, 0, 0, w, h);
      const { data } = ctx.getImageData(0, 0, w, h);
      // Build binary map for dark pixels (luminance threshold)
      const dark = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // Luminance
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          dark[y * w + x] = lum < threshold ? 1 : 0;
        }
      }
      // Horizontal and vertical projections (focus on center band to avoid page borders)
      const marginX = Math.floor(w * marginXRatio);
      const marginY = Math.floor(h * marginYRatio);
      const rowSum: number[] = new Array(h).fill(0);
      const colSum: number[] = new Array(w).fill(0);
      for (let y = marginY; y < h - marginY; y++) {
        let s = 0;
        for (let x = marginX; x < w - marginX; x++) s += dark[y * w + x];
        rowSum[y] = s;
      }
      for (let x = marginX; x < w - marginX; x++) {
        let s = 0;
        for (let y = marginY; y < h - marginY; y++) s += dark[y * w + x];
        colSum[x] = s;
      }
      // Find strongest rows in top and bottom halves (robust separation)
      const halfY = Math.floor(h / 2);
      let top = marginY, bottom = h - marginY - 1;
      let topVal = -1, bottomVal = -1;
      for (let y = marginY; y < halfY; y++) {
        if (rowSum[y] > topVal) { topVal = rowSum[y]; top = y; }
      }
      for (let y = halfY; y < h - marginY; y++) {
        if (rowSum[y] > bottomVal) { bottomVal = rowSum[y]; bottom = y; }
      }
      // Find strongest cols in left and right halves
      const halfX = Math.floor(w / 2);
      let left = marginX, right = w - marginX - 1;
      let leftVal = -1, rightVal = -1;
      for (let x = marginX; x < halfX; x++) {
        if (colSum[x] > leftVal) { leftVal = colSum[x]; left = x; }
      }
      for (let x = halfX; x < w - marginX; x++) {
        if (colSum[x] > rightVal) { rightVal = colSum[x]; right = x; }
      }

      // Basic sanity checks
      if (!isFinite(top) || !isFinite(bottom) || !isFinite(left) || !isFinite(right)) return null;
      if (bottom - top < h * minHeightRatio || right - left < w * minWidthRatio) return null;

      const box = { x: left, y: top, width: right - left, height: bottom - top };
      return box;
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
        next[pageIndex] = { ...targetRect!, kind: mediaInfo.kind, src: mediaInfo.src };
      } else {
        next[pageIndex] = null;
      }
      return next;
    });
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
              <input type="checkbox" checked={embedInline} onChange={(e) => setEmbedInline(e.target.checked)} />
              Embed media inline
            </label>
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
                  {/* Non-YouTube clickable link overlays */}
                  {linkAreas[i] && linkAreas[i].map((area, idx) => (
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
                  {embedInline && mediaEmbeds[i] && (
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
