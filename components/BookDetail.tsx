import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

interface BookDetailProps {
  product: {
    id: string;
    image: string;
    title: string;
    description?: string;
    price: string;
    badge?: string;
  }
}

const BookDetail: React.FC<BookDetailProps> = ({ product }) => {
  return (
    <>
      <Seo title={product.title} description={product.description || product.title} />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain max-h-[600px]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>

            {product.badge && (
               <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {product.badge}
              </span>
            )}

            <div className="text-gray-600 space-y-4 text-lg leading-relaxed whitespace-pre-line">
              {product.description || <p>{product.title}</p>}
            </div>

            <div className="border-t border-gray-200 pt-6">
                <p className="text-2xl font-semibold text-gray-900 mb-4">
                {product.price === "Soon" || product.price.includes("Soon") ? product.price : `Rp${product.price}`}
                </p>

                <div className="flex gap-4">
                    <button
                    onClick={() => window.location.href='/'}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
                    >
                    Buy Now
                    </button>
                    {/* Placeholder for future features like "Preview" */}
                    <button
                        onClick={() => window.location.href='/flip-book'}
                        className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                    >
                        View Flipbook
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDetail;
