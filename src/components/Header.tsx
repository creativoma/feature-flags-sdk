'use client';

import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-start justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-black font-bold text-lg sm:text-xl leading-none tracking-tighter">
              SUMMER
              <br />
              THE
              <br />
              COLLECTION/
              <br />
              WEBSHOP
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12 text-sm font-medium tracking-wide">
            <div className="space-y-1">
              <div className="text-black font-bold hover:text-gray-600 cursor-pointer transition-all duration-300 relative group">
                COLLECTIONS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="text-gray-600 text-xs space-y-1">
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  CLOTHING
                </div>
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  MUSIC
                </div>
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  PRINT
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-black font-bold hover:text-gray-600 cursor-pointer transition-all duration-300 relative group">
                ACCESSORIES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="text-gray-600 text-xs space-y-1">
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  STATIONERY
                </div>
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  HOME
                </div>
                <div className="hover:text-black cursor-pointer transition-colors duration-200">
                  OTHER
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-black" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5 text-black" strokeWidth={1.5} />
              )}
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105">
              <Search className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105 relative">
              <ShoppingBag className="w-5 h-5 text-black" strokeWidth={1.5} />
              <span className="absolute top-0.5 right-0.5 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105">
              <User className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-4 py-6 space-y-6">
            <div className="space-y-4">
              <div className="text-black font-bold text-base">COLLECTIONS</div>
              <div className="pl-4 space-y-2 text-sm text-gray-600">
                <div className="hover:text-black cursor-pointer">CLOTHING</div>
                <div className="hover:text-black cursor-pointer">MUSIC</div>
                <div className="hover:text-black cursor-pointer">PRINT</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-black font-bold text-base">ACCESSORIES</div>
              <div className="pl-4 space-y-2 text-sm text-gray-600">
                <div className="hover:text-black cursor-pointer">
                  STATIONERY
                </div>
                <div className="hover:text-black cursor-pointer">HOME</div>
                <div className="hover:text-black cursor-pointer">OTHER</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
