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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const files = Array.from(e.target.files || []);
    const imagePages: string[] = [];
    let loaded = 0;
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
              const viewport = page.getViewport({ scale: 2 });
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

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Flip Book</h1>
      <input
        type="file"
        multiple
        accept="image/*,application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="mb-6 block mx-auto"
      />
      {loading && <div className="text-center text-blue-600 mb-4">Loading pages...</div>}
      {pages.length > 0 && !loading && (
        <div className="flex flex-col items-center">
          <HTMLFlipBook
            width={400}
            height={600}
            size="stretch"
            minWidth={250}
            minHeight={400}
            maxWidth={500}
            maxHeight={800}
            drawShadow={true}
            flippingTime={700}
            useMouseEvents={true}
            showPageCorners={true}
            className="shadow-lg border rounded"
            style={{ margin: '0 auto' }}
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
              <div key={i} className="w-full h-full bg-white flex items-center justify-center">
                <img
                  src={src}
                  alt={`Page ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </HTMLFlipBook>
          <span className="mt-2 text-xs text-gray-500">Spread {Math.floor(currentPage / 2) + 1} / {Math.ceil(pages.length / 2)}</span>
        </div>
      )}
      {pages.length === 0 && !loading && (
        <div className="text-center text-gray-500">Upload images or a PDF to start flipping through your book!</div>
      )}
    </div>
  );
};

export default FlipBook;
