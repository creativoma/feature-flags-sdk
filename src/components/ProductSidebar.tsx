'use client';

import { ChevronDown, Eye, Filter } from 'lucide-react';
import { useState } from 'react';

interface FilterSection {
  title: string;
  items: string[];
  expanded: boolean;
}

export const ProductSidebar = () => {
  const [filters, setFilters] = useState<FilterSection[]>([
    {
      title: 'AVAILABILITY',
      items: ['In Stock', 'Pre-order', 'Limited Edition'],
      expanded: true,
    },
    {
      title: 'SIZE',
      items: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      expanded: true,
    },
    {
      title: 'COLLECTIONS',
      items: [
        'SUMMER CATS',
        'SUMMER TOUR',
        'SUMMER PRIDE',
        'SUMMER SILHOUETTE',
        'SUMMER WATERLOO',
        'SUMMER GOLD',
        'AGNETHA',
        'BENNY',
        'BJÖRN',
        'FRIDA',
        'DANCING QUEEN',
      ],
      expanded: false,
    },
  ]);

  const toggleFilter = (index: number) => {
    setFilters(prev =>
      prev.map((filter, i) =>
        i === index ? { ...filter, expanded: !filter.expanded } : filter
      )
    );
  };

  return (
    <aside className="w-full lg:w-80 lg:pr-8">
      <div className="mb-6 lg:mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
          <h2 className="text-base lg:text-lg font-medium tracking-wide">
            FILTERS
          </h2>
        </div>
        <p className="text-sm text-gray-500">Refine your search</p>
      </div>
      <div className="mb-6 lg:mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between cursor-pointer hover:text-gray-600 transition-colors duration-200">
          <span className="text-sm font-medium tracking-wide">SORT BY</span>
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filters.map((section, index) => (
          <div
            key={section.title}
            className="border-b border-gray-100 pb-6 last:border-b-0"
          >
            <button
              onClick={() => toggleFilter(index)}
              className="flex items-center justify-between w-full text-left mb-4 
                       hover:text-gray-600 transition-colors duration-200 group"
            >
              <h3 className="text-sm font-medium tracking-wide">
                {section.title}
              </h3>
              <ChevronDown
                className={`w-4 h-4 transition-all duration-300 group-hover:scale-110
                          ${section.expanded ? 'rotate-180' : ''}`}
                strokeWidth={1.5}
              />
            </button>

            {section.expanded && (
              <div className="space-y-3 animate-fade-in">
                {section.title === 'COLLECTIONS' ? (
                  <div>
                    <button
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-black 
                                     transition-all duration-200 mb-4 font-medium hover:scale-105"
                    >
                      <Eye className="w-3 h-3" strokeWidth={1.5} />
                      SEE ALL
                    </button>
                    <div className="space-y-3">
                      {section.items.map(item => (
                        <label
                          key={item}
                          className="flex items-center space-x-3 text-sm cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-black focus:ring-black focus:ring-1
                                     transition-all duration-200 hover:scale-110"
                          />
                          <span
                            className="text-gray-600 hover:text-black transition-all duration-200
                                         group-hover:translate-x-1"
                          >
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {section.items.map(item => (
                      <label
                        key={item}
                        className="flex items-center space-x-3 text-sm cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-black focus:ring-black focus:ring-1
                                   transition-all duration-200 hover:scale-110"
                        />
                        <span
                          className="text-gray-600 hover:text-black transition-all duration-200
                                       group-hover:translate-x-1"
                        >
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};
