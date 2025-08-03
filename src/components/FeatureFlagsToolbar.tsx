'use client';

import { ChevronDown, Flag, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FeatureFlagsToolbarProps {
  initialFlags: {
    showSummerHero: boolean;
    showDiscount: boolean;
    showPremiumPromo: boolean;
    showCountdown: boolean;
  };
  onFlagsChange: (flags: {
    showSummerHero: boolean;
    showDiscount: boolean;
    showPremiumPromo: boolean;
    showCountdown: boolean;
  }) => void;
}

export const FeatureFlagsToolbar = ({
  initialFlags,
  onFlagsChange,
}: FeatureFlagsToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flags, setFlags] = useState(initialFlags);

  useEffect(() => {
    onFlagsChange(flags);
  }, [flags, onFlagsChange]);

  const toggleFlag = (flagName: keyof typeof flags) => {
    setFlags(prev => ({
      ...prev,
      [flagName]: !prev[flagName],
    }));
  };

  const resetFlags = () => {
    const newFlags = {
      showSummerHero: Math.random() > 0.3,
      showDiscount: Math.random() > 0.4,
      showPremiumPromo: Math.random() > 0.6,
      showCountdown: Math.random() > 0.5,
      example: Math.random() > 0.5,
    };
    setFlags(newFlags);
  };

  const flagDescriptions = {
    showSummerHero: 'Summer Hero Section',
    showDiscount: 'Discount Banner',
    showPremiumPromo: 'Premium Promo',
    showCountdown: 'Countdown Timer',
    example: 'Example Flag',
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 font-medium tracking-wide text-xs sm:text-sm"
        >
          <Flag className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">FEATURE FLAGS</span>
          <span className="sm:hidden">FLAGS</span>
          <ChevronDown
            className={`transform transition-transform w-3 h-3 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-14 sm:bottom-20 right-2 sm:right-4 z-50 bg-white border border-gray-200 shadow-xl p-4 sm:p-6 w-72 sm:w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-medium text-black flex items-center space-x-2 tracking-wide text-xs sm:text-sm">
              <Flag className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>FEATURE FLAGS</span>
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black text-lg w-6 h-6 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {Object.entries(flags).map(([flagName, isEnabled]) => (
              <div key={flagName} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-xs sm:text-sm font-medium text-black">
                    {
                      flagDescriptions[
                        flagName as keyof typeof flagDescriptions
                      ]
                    }
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {flagName}
                  </div>
                </div>
                <button
                  onClick={() => toggleFlag(flagName as keyof typeof flags)}
                  className={`relative inline-flex h-4 w-8 sm:h-5 sm:w-9 items-center transition-colors border ${
                    isEnabled
                      ? 'bg-black border-black'
                      : 'bg-gray-200 border-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 transform bg-white transition-transform ${
                      isEnabled
                        ? 'translate-x-4 sm:translate-x-5'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-4 sm:mt-6 pt-3 sm:pt-4">
            <button
              onClick={resetFlags}
              className="w-full border border-gray-300 hover:border-black text-gray-700 hover:text-black py-2 px-3 text-xs sm:text-sm transition-colors font-medium tracking-wide"
            >
              Randomize Flags
            </button>
          </div>

          <div className="mt-2 sm:mt-3 text-xs text-gray-500 text-center">
            Changes apply in real-time
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
