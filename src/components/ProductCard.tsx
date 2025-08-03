'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  colors?: string[];
}

export const ProductCard = ({
  name,
  price,
  colors,
  image,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-white hover:shadow-lg transition-all duration-300">
      {/* Wishlist Button */}
      <button
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 opacity-0 group-hover:opacity-100 
                       transition-all duration-300 p-1.5 sm:p-2 bg-white rounded-full shadow-sm
                       hover:bg-gray-50 hover:scale-110"
      >
        <Heart
          className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-red-500 transition-colors duration-200"
          strokeWidth={1.5}
        />
      </button>

      <div className="w-full h-48 sm:h-56 lg:h-64 relative overflow-hidden bg-gray-100 mb-3 lg:mb-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div
          className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 text-white p-2 sm:p-3
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      transform translate-y-full group-hover:translate-y-0"
        >
          <button
            className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-wide
                           hover:bg-white hover:text-black transition-all duration-200 py-2 rounded"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Color Options */}
      {colors && colors.length > 0 && (
        <div className="flex justify-center space-x-2 mb-4">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-black 
                       transition-all duration-200 hover:scale-110 relative group/color"
              style={{ backgroundColor: color }}
              aria-label={`Color option ${index + 1}`}
            >
              <span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                             group-hover/color:opacity-100 transition-opacity duration-200 pointer-events-none"
              >
                Color {index + 1}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Product Info */}
      <div className="text-center px-2">
        <h3
          className="text-sm font-medium text-black mb-2 tracking-wide uppercase
                     hover:text-gray-600 transition-colors duration-200 cursor-pointer"
        >
          {name}
        </h3>
        <p className="text-sm text-gray-700 font-semibold">{price}</p>
      </div>
    </div>
  );
};
