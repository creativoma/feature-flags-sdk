'use client';

import { ChevronDown, Grid, List } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { ProductCard } from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Alphabetical' },
    { value: 'newest', label: 'Newest First' },
  ];

  return (
    <div className="flex-1 lg:ml-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 pb-6 border-b border-gray-200 gap-4">
        <div className="flex items-center gap-4 lg:gap-6">
          <h2 className="text-base lg:text-lg font-medium tracking-wide text-gray-900">
            All Products
          </h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full font-medium">
            {products.length} items
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-3 lg:px-4 py-2 lg:py-2.5 pr-8 lg:pr-10 text-sm
                       focus:border-black focus:outline-none transition-all duration-200
                       cursor-pointer hover:border-gray-400 hover:shadow-sm"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 lg:p-2.5 transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 lg:p-2.5 transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
        transition-all duration-500 ease-in-out
        ${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8'
            : 'space-y-6 lg:space-y-8'
        }
      `}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`
              opacity-0 animate-fade-in transition-all duration-700 hover:scale-[1.02]
              ${viewMode === 'list' ? 'border-b border-gray-100 pb-8 last:border-b-0' : ''}
            `}
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
            }}
          >
            {viewMode === 'grid' ? (
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                colors={product.colors}
              />
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 items-start bg-white hover:bg-gray-50 transition-colors duration-300 p-4 -m-4 rounded-lg">
                <div className="w-full sm:w-32 md:w-40 h-32 md:h-40 flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg lg:text-xl mb-2 lg:mb-3 tracking-wide text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-base lg:text-lg font-medium text-gray-700 mb-3 lg:mb-4">
                    {product.price}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-gray-500 font-medium">
                      Colors:
                    </span>
                    <div className="flex gap-2">
                      {product.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-5 h-5 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform duration-200 cursor-pointer"
                          style={{ backgroundColor: color }}
                          title={`Color ${colorIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide
                                   hover:bg-gray-800 transition-all duration-300 hover:scale-105
                                   focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-100">
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="bg-black text-white px-12 py-4 font-medium tracking-wide text-sm
                   hover:bg-gray-800 transition-all duration-300 hover:scale-105
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                   relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          <span
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          >
            LOAD MORE PRODUCTS
          </span>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

const style = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = style;
  document.head.appendChild(styleSheet);
}
