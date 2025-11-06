"use client";
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
// @ts-ignore: pdfjs-dist types not available here
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// @ts-ignore
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

// Set worker from CDN (same approach as FlipBook)
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

type Box = { x: number; y: number; width: number; height: number };
type PageView = { src: string; width: number; height: number; boxes: Box[] };

const CvTesting: React.FC = () => {
  const [pages, setPages] = React.useState<PageView[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [threshold, setThreshold] = React.useState(180);
  const [minSize, setMinSize] = React.useState(50);
  const [cvReady, setCvReady] = React.useState(false);
  const [cvFailed, setCvFailed] = React.useState(false);
  const opencvLoadingRef = React.useRef(false);
  const [embedYouTube, setEmbedYouTube] = React.useState(true);
  const [manualYTUrl, setManualYTUrl] = React.useState('');
  const [ytSrcPerPage, setYtSrcPerPage] = React.useState<string[]>([]);
  // Flipbook state
  const [viewMode, setViewMode] = React.useState<'grid' | 'flipbook'>('grid');
  const [currentPage, setCurrentPage] = React.useState(0); // index of left page in the spread
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const bookRef = React.useRef<any>(null);
  const [bookSize, setBookSize] = React.useState<{ width: number; height: number }>({ width: 900, height: 1200 });
  // During page flipping, disable iframe pointer events to avoid drag/hover capture
  const [inputLock, setInputLock] = React.useState(false);
  const flipLockTimeoutRef = React.useRef<number | null>(null);
  const FLIP_DURATION_MS = 700; // keep in sync with HTMLFlipBook flippingTime
  const beginFlipLock = React.useCallback((duration: number = FLIP_DURATION_MS + 150) => {
    setInputLock(true);
    if (flipLockTimeoutRef.current) window.clearTimeout(flipLockTimeoutRef.current);
    flipLockTimeoutRef.current = window.setTimeout(() => {
      setInputLock(false);
      flipLockTimeoutRef.current = null;
    }, duration) as unknown as number;
  }, []);
  React.useEffect(() => () => { if (flipLockTimeoutRef.current) window.clearTimeout(flipLockTimeoutRef.current); }, []);

  const loadOpenCV = React.useCallback((): Promise<void> => {
    if (cvReady) return Promise.resolve();
    if (typeof window === 'undefined') return Promise.resolve();
    const w = window as any;
    if (w.cv && typeof w.cv.imread === 'function') {
      setCvReady(true);
      return Promise.resolve();
    }
    if (opencvLoadingRef.current) {
      return new Promise((resolve) => {
        const check = () => {
          if (w.cv && typeof w.cv.imread === 'function') { setCvReady(true); resolve(); } else setTimeout(check, 60);
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
          cv.onRuntimeInitialized = () => { setCvReady(true); resolve(); };
        } else { setCvReady(!!cv); resolve(); }
      };
      script.onerror = () => { opencvLoadingRef.current = false; setCvFailed(true); reject(new Error('Failed to load OpenCV.js')); };
      document.head.appendChild(script);
    });
  }, [cvReady]);

  React.useEffect(() => { loadOpenCV().catch(() => {}); }, [loadOpenCV]);

  // Measure container width for flipbook scaling
  React.useEffect(() => {
    const handleResize = () => {
      // In flipbook mode, use viewport width to allow full-bleed layout
      if (viewMode === 'flipbook') {
        setContainerWidth(window.innerWidth || document.documentElement.clientWidth || 0);
      } else if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth || 0);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewMode]);

  // Utilities: YouTube URL helpers
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
  const findYouTubeIdInText = (text: string): string | null => {
    try {
      const collapsed = (text || '').replace(/\s+/g, '');
      const m1 = collapsed.match(/youtube\.com\/watch\?[^#&?]*[&#?]v=([A-Za-z0-9_-]{11})/i);
      if (m1 && m1[1]) return m1[1];
      const m2 = collapsed.match(/youtu\.be\/([A-Za-z0-9_-]{11})/i);
      if (m2 && m2[1]) return m2[1];
      const m3 = collapsed.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/i);
      if (m3 && m3[1]) return m3[1];
      return null;
    } catch {
      return null;
    }
  };
  const toYouTubeEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

  const detectBoxesWithCV = (canvas: HTMLCanvasElement, thr: number, minSz: number): Box[] => {
    try {
      const cv = (window as any).cv;
      if (!cv || typeof cv.imread !== 'function') return [];
      const src = cv.imread(canvas);
      const gray = new cv.Mat();
      // Convert to grayscale (handles RGBA input)
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      const bin = new cv.Mat();
      cv.threshold(gray, bin, thr, 255, cv.THRESH_BINARY_INV);
      const edges = new cv.Mat();
      cv.Canny(bin, edges, 50, 150);
      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();
      cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
      const boxes: Box[] = [];
      for (let i = 0; i < contours.size(); i++) {
        const cnt = contours.get(i);
        const r = cv.boundingRect(cnt);
        if (r.width >= minSz && r.height >= minSz) {
          boxes.push({ x: r.x, y: r.y, width: r.width, height: r.height });
        }
        cnt.delete();
      }
      src.delete(); gray.delete(); bin.delete(); edges.delete(); contours.delete(); hierarchy.delete();
      return boxes;
    } catch {
      return [];
    }
  };

  // Fallback: Pure JS detector using binary threshold + connected components on a downscaled image
  const detectBoxesSimple = (canvas: HTMLCanvasElement, thr: number, minSz: number): Box[] => {
    try {
      const w0 = canvas.width, h0 = canvas.height;
      if (!w0 || !h0) return [];
      // Downscale to keep it fast (max ~1200px on the longest side)
      const maxDim = 1200;
      const scale = Math.min(1, maxDim / Math.max(w0, h0));
      const w = Math.max(1, Math.floor(w0 * scale));
      const h = Math.max(1, Math.floor(h0 * scale));
      const tmp = document.createElement('canvas');
      tmp.width = w; tmp.height = h;
      const tctx = tmp.getContext('2d');
      if (!tctx) return [];
      tctx.drawImage(canvas, 0, 0, w, h);
      const { data } = tctx.getImageData(0, 0, w, h);
      const bin = new Uint8Array(w * h);
      // THRESH_BINARY_INV analogue: 1 if gray <= thr, else 0
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          const gray = 0.299 * r + 0.587 * g + 0.114 * b;
          bin[y * w + x] = gray <= thr ? 1 : 0;
        }
      }
      const visited = new Uint8Array(w * h);
      const boxes: Box[] = [];
      const qx = new Int32Array(w * h);
      const qy = new Int32Array(w * h);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const p = y * w + x;
          if (bin[p] === 0 || visited[p]) continue;
          // BFS component
          let head = 0, tail = 0;
          qx[tail] = x; qy[tail] = y; tail++;
          visited[p] = 1;
          let minx = x, miny = y, maxx = x, maxy = y;
          while (head < tail) {
            const cx = qx[head];
            const cy = qy[head];
            head++;
            // 4-neighbors
            const tryPush = (nx: number, ny: number) => {
              if (nx < 0 || ny < 0 || nx >= w || ny >= h) return;
              const np = ny * w + nx;
              if (visited[np] || bin[np] === 0) return;
              visited[np] = 1;
              qx[tail] = nx; qy[tail] = ny; tail++;
              if (nx < minx) minx = nx; if (ny < miny) miny = ny;
              if (nx > maxx) maxx = nx; if (ny > maxy) maxy = ny;
            };
            tryPush(cx+1, cy);
            tryPush(cx-1, cy);
            tryPush(cx, cy+1);
            tryPush(cx, cy-1);
          }
          const bw = (maxx - minx + 1) / scale;
          const bh = (maxy - miny + 1) / scale;
          if (bw >= minSz && bh >= minSz) {
            boxes.push({ x: Math.round(minx / scale), y: Math.round(miny / scale), width: Math.round((maxx - minx + 1) / scale), height: Math.round((maxy - miny + 1) / scale) });
          }
        }
      }
      return boxes;
    } catch {
      return [];
    }
  };

  // Post-process: remove boxes fully contained within larger boxes, optionally keep only the largest
  const postProcessBoxes = (boxes: Box[], largestOnly: boolean): Box[] => {
    if (!boxes || boxes.length === 0) return [];
    // Sort by area descending
    const sorted = [...boxes].sort((a,b) => (b.width*b.height) - (a.width*a.height));
    const kept: Box[] = [];
    const contains = (outer: Box, inner: Box, pad = 2) => {
      return inner.x >= outer.x + pad && inner.y >= outer.y + pad &&
             inner.x + inner.width <= outer.x + outer.width - pad &&
             inner.y + inner.height <= outer.y + outer.height - pad;
    };
    for (let i = 0; i < sorted.length; i++) {
      const candidate = sorted[i];
      let drop = false;
      for (const k of kept) {
        if (contains(k, candidate, 3)) { drop = true; break; }
      }
      if (!drop) kept.push(candidate);
      if (largestOnly && kept.length >= 1) break;
    }
    return kept;
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type !== 'application/pdf') { alert('Please upload a PDF'); return; }
    setLoading(true);
    setPages([]);
    setErrorMsg(null);
    try {
      const buf = await f.arrayBuffer();
      // Kick off OpenCV load but don't block PDF processing
      loadOpenCV().catch((err) => console.warn('[OpenCV] load failed (non-fatal):', err));
      // Load PDF
      const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      const out: PageView[] = [];
      const ytList: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        // Use scale 2 for decent detail
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width; canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx!, viewport }).promise;
  // Detect boxes using OpenCV if available; else fallback to JS
  const detected = cvReady ? detectBoxesWithCV(canvas, threshold, minSize) : detectBoxesSimple(canvas, threshold, minSize);
  const boxes = postProcessBoxes(detected, true); // keep only the largest by default to avoid nested overlays
        const src = canvas.toDataURL();
        out.push({ src, width: canvas.width, height: canvas.height, boxes });

        // Try to detect a YouTube link from annotations first, then page text
        let ytSrc: string | null = null;
        try {
          const annotations = await page.getAnnotations();
          for (const ann of (annotations || [])) {
            const url: string | undefined = (ann as any)?.url || (ann as any)?.unsafeUrl || (ann as any)?.a?.uri;
            if (!url) continue;
            const id = extractYouTubeId(url);
            if (id) { ytSrc = toYouTubeEmbedUrl(id); break; }
          }
        } catch {}
        if (!ytSrc) {
          try {
            const text = await page.getTextContent();
            const full = (text.items || []).map((it: any) => it?.str || '').join(' ');
            const id = findYouTubeIdInText(full);
            if (id) ytSrc = toYouTubeEmbedUrl(id);
          } catch {}
        }
        ytList.push(ytSrc || '');
      }
      setPages(out);
      setYtSrcPerPage(ytList);
      setCurrentPage(0);
      // Compute book page size based on first page aspect ratio
      if (out.length > 0) {
        const aspect = out[0].height / (out[0].width || 1);
        let width = 900;
        let height = Math.round(width * aspect);
        if (height < 900) height = 900;
        if (height > 1800) height = 1800;
        setBookSize({ width, height });
      }
    } catch (err) {
      console.error('[CV Testing] Failed to process PDF:', err);
      setErrorMsg('Failed to process PDF. Check browser console for details.');
    } finally {
      setLoading(false);
    }
  };

  // If OpenCV finishes loading after pages are shown, re-run detection automatically
  React.useEffect(() => {
    if (!cvReady || pages.length === 0) return;
    (async () => { await rerunDetection(); })();
  }, [cvReady]);

  const rerunDetection = async () => {
    if (!cvReady || pages.length === 0) return;
    // Re-run detection by drawing each image back to a canvas
    const out: PageView[] = [];
    for (const p of pages) {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = p.src;
      });
      const canvas = document.createElement('canvas');
      canvas.width = p.width; canvas.height = p.height;
      const ctx = canvas.getContext('2d');
      ctx!.drawImage(img, 0, 0, p.width, p.height);
  const detected = detectBoxesWithCV(canvas, threshold, minSize);
  const boxes = postProcessBoxes(detected, true);
  out.push({ ...p, boxes });
    }
    setPages(out);
  };

  // Flipbook helpers
  const lastEvenLeft = Math.max(0, (pages.length - 1) - ((pages.length - 1) % 2));
  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 2));
  const goNext = () => setCurrentPage((p) => Math.min(lastEvenLeft, p + 2));
  const goTo = (idx: number) => setCurrentPage(() => {
    const evenIdx = Math.max(0, Math.min(idx, pages.length - 1));
    return evenIdx - (evenIdx % 2);
  });

  React.useEffect(() => {
    if (viewMode !== 'flipbook') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); beginFlipLock(); bookRef.current?.pageFlip()?.flipPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); beginFlipLock(); bookRef.current?.pageFlip()?.flipNext(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [viewMode, pages.length, beginFlipLock]);

  // Compute scale for the current spread so both pages fit container width
  const computeSpreadScale = (leftIdx: number): number => {
    if (!pages.length || !containerWidth) return 1;
    const gap = 16; // px gap between pages
    const left = pages[leftIdx];
    const right = pages[leftIdx + 1];
    const totalWidth = left.width + (right ? right.width : 0) + (right ? gap : 0);
    const scale = Math.min(1, (containerWidth - 2 /* padding guard */) / Math.max(1, totalWidth));
    return scale;
  };

  // Convert absolute pixels to percentage for responsive overlays inside the page container
  const toPercentStyle = (b: Box, p: PageView) => ({
    left: `${(b.x / p.width) * 100}%`,
    top: `${(b.y / p.height) * 100}%`,
    width: `${(b.width / p.width) * 100}%`,
    height: `${(b.height / p.height) * 100}%`,
  } as React.CSSProperties);

  return (
    <div className="bg-white flex items-center justify-center px-2">
      <div className={viewMode === 'flipbook'
        ? "w-screen max-w-none bg-white p-2 md:p-4 md:my-2"
        : "w-full max-w-5xl bg-white shadow rounded-lg p-4 my-6"}>
        <h1 className="text-2xl font-bold mb-3 text-gray-900">CV TESTING</h1>
        <p className="text-sm text-gray-600 mb-2">Upload a PDF and detect rectangular boxes (OpenCV.js, threshold + Canny + contours, external). Overlays shown as red boxes.</p>

        <div className="flex items-center gap-3 flex-wrap mb-3">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">PDF:</span>
            <input type="file" accept="application/pdf" onChange={handleFile} />
          </label>
          <span className="text-xs text-gray-500">OpenCV: {cvReady ? 'ready' : (cvFailed ? 'failed (using JS fallback)' : 'loading…')}</span>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="viewMode" value="grid" checked={viewMode==='grid'} onChange={()=>setViewMode('grid')} />
              <span className="text-gray-700">Grid</span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="viewMode" value="flipbook" checked={viewMode==='flipbook'} onChange={()=>setViewMode('flipbook')} />
              <span className="text-gray-700">Flipbook</span>
            </label>
          </div>
          <label className="flex items-center gap-2 text-sm ml-auto">
            <input type="checkbox" checked={embedYouTube} onChange={(e)=>setEmbedYouTube(e.target.checked)} />
            <span className="text-gray-700">Embed YouTube overlay</span>
          </label>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-600">YouTube URL (optional override):</span>
          <input
            type="text"
            value={manualYTUrl}
            onChange={(e)=>setManualYTUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="flex-1 min-w-0 border rounded px-2 py-1 text-xs"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <label className="flex flex-col">
            <span className="text-xs text-gray-600">Threshold: {threshold}</span>
            <input type="range" min={0} max={255} value={threshold} onChange={(e)=>setThreshold(Number(e.target.value))} onMouseUp={rerunDetection} onTouchEnd={rerunDetection} />
          </label>
          <label className="flex flex-col">
            <span className="text-xs text-gray-600">Min size (px): {minSize}</span>
            <input type="range" min={10} max={200} value={minSize} onChange={(e)=>setMinSize(Number(e.target.value))} onMouseUp={rerunDetection} onTouchEnd={rerunDetection} />
          </label>
        </div>

  {loading && <div className="text-gray-700">Processing PDF…</div>}
  {errorMsg && <div className="text-red-600 text-sm mb-2">{errorMsg}</div>}

        {pages.length > 0 && viewMode === 'grid' && (
          <div className="mt-3 space-y-6">
            {pages.map((p, idx) => (
              <div key={idx} className="relative inline-block" style={{ width: p.width, height: p.height }}>
                {/* Page image */}
                <img src={p.src} alt={`Page ${idx+1}`} width={p.width} height={p.height} className="block" />
                {/* Boxes overlay */}
                {p.boxes.map((b, j) => (
                  <div key={j} className="absolute border-2" style={{ left: b.x, top: b.y, width: b.width, height: b.height, borderColor: '#ff0000' }} />
                ))}
                {/* YouTube overlays (match each box size/position) */}
                {embedYouTube && p.boxes.length > 0 && (() => {
                  const manualId = extractYouTubeId(manualYTUrl || '') || findYouTubeIdInText(manualYTUrl || '');
                  const src = manualId ? toYouTubeEmbedUrl(manualId) : (ytSrcPerPage[idx] || '');
                  if (!src) return null;
                  return (
                    <>
                      {p.boxes.map((b, j) => (
                        <iframe
                          key={`yt-${j}`}
                          src={src}
                          className="absolute rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ left: b.x, top: b.y, width: b.width, height: b.height, zIndex: 30, background: '#000' }}
                          title={`YouTube overlay ${idx+1}-${j+1}`}
                        />
                      ))}
                    </>
                  );
                })()}
                <div className="absolute left-2 top-2 text-xs px-2 py-1 bg-white/80 rounded shadow">Page {idx+1} · {p.boxes.length} boxes</div>
              </div>
            ))}
          </div>
        )}

        {pages.length > 0 && viewMode === 'flipbook' && (
          <div ref={containerRef} className="mt-3 w-screen -mx-2 md:-mx-4">
            {/* Controls */}
            <div className="flex items-center justify-between mb-2 px-2 md:px-4">
              <button onClick={() => { beginFlipLock(); bookRef.current?.pageFlip()?.flipPrev(); }} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm disabled:opacity-50" disabled={currentPage <= 0}>&larr; Prev</button>
              <div className="text-sm text-gray-700">Page {currentPage + 1} of {pages.length}</div>
              <button onClick={() => { beginFlipLock(); bookRef.current?.pageFlip()?.flipNext(); }} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm disabled:opacity-50" disabled={currentPage >= pages.length - 1}>Next &rarr;</button>
            </div>
            <div className="w-full flex items-center justify-center"
                 onMouseDown={() => beginFlipLock()}
                 onTouchStart={() => beginFlipLock()}
                 onDragStart={() => beginFlipLock()}
            >
              <HTMLFlipBook
                ref={bookRef}
                width={bookSize.width}
                height={bookSize.height}
                size="stretch"
                minWidth={200}
                minHeight={220}
                maxWidth={1200}
                maxHeight={1800}
                drawShadow={true}
                flippingTime={700}
                useMouseEvents={true}
                showPageCorners={true}
                className="shadow-md border rounded-md"
                style={{ background: '#fff', width: '100%' }}
                startPage={0}
                mobileScrollSupport={true}
                swipeDistance={50}
                maxShadowOpacity={0.5}
                showCover={false}
                onFlip={(e: any) => setCurrentPage(e.data)}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                disableFlipByClick={false}
              >
                {pages.map((p, i) => (
                  <div key={i} className="w-full h-full bg-white p-0 m-0 relative">
                    {/* Page image fills the page */}
                    <img src={p.src} alt={`Page ${i + 1}`} className="w-full h-full object-contain select-none" draggable={false} />
                    {/* Boxes overlay (percentage-based to scale with page) */}
                    {p.boxes.map((b, j) => (
                      <div key={j} className="absolute border-2" style={{
                        ...toPercentStyle(b, p),
                        borderColor: '#ff0000'
                      }} />
                    ))}
                    {/* YouTube overlay, matched to each box */}
                    {embedYouTube && p.boxes.length > 0 && (() => {
                      const manualId = extractYouTubeId(manualYTUrl || '') || findYouTubeIdInText(manualYTUrl || '');
                      const src = manualId ? toYouTubeEmbedUrl(manualId) : (ytSrcPerPage[i] || '');
                      if (!src) return null;
                      return (
                        <>
                          {p.boxes.map((b, j) => (
                            <iframe
                              key={`yt-fb-${i}-${j}`}
                              src={src}
                              className="absolute rounded"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              style={{ ...toPercentStyle(b, p), zIndex: 30, background: '#000', pointerEvents: inputLock ? 'none' : 'auto' }}
                              title={`YouTube overlay ${i+1}-${j+1}`}
                            />
                          ))}
                        </>
                      );
                    })()}
                    <div className="absolute left-2 top-2 text-xs px-2 py-1 bg-white/80 rounded shadow">Page {i+1} · {p.boxes.length} boxes</div>
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CvTesting;
