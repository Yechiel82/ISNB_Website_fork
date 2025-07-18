"use client";
"use client";
import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const FlipBook = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pages, setPages] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [bookSize, setBookSize] = React.useState<{ width: number; height: number }>({ width: 900, height: 1272 });

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
            }
            setPages([...imagePages]);
            setCurrentPage(0);
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
                <div key={i} className="w-full h-full bg-white p-0 m-0">
                  <img
                    src={src}
                    alt={`Page ${i + 1}`}
                    className="w-full h-full object-contain rounded shadow m-0"
                  />
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
