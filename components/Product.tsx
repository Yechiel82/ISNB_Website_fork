import React, { useState } from 'react';
import { BOOKS } from '@/constants/books';

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique badges for filter buttons
  const uniqueBadges = ['All', ...Array.from(new Set(BOOKS.map(b => b.badge)))];

  const filteredBooks = BOOKS.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || book.badge === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <div className="absolute right-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {uniqueBadges.map((badge) => (
            <button
              key={badge}
              onClick={() => setActiveFilter(badge)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === badge
                  ? 'bg-green-50 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {badge}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((product) => (
            <a
              key={product.id}
              href={`/${product.id}`}
              className="group block"
            >
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center rounded-full bg-green-50/10 px-2.5 py-1 text-xs font-medium text-green-700">
                      {product.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-4 flex-grow">
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {product.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-medium text-gray-900">
                      {product.price === "Soon" || product.price.includes("Soon") ? product.price : `Rp${product.price.toLocaleString()}`}
                    </span>
                    <button className="rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500">
            No books found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
