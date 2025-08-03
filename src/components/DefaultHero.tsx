'use client';

import React from 'react';

export const DefaultHero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="mb-8 lg:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight leading-none">
            COLLECTIONS
          </h1>
        </div>

        <div className="max-w-2xl">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover our carefully curated selection of premium products. Each
            piece tells a story, crafted with attention to detail and timeless
            design.
          </p>
        </div>
      </div>
    </div>
  );
};
