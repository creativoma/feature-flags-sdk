'use client';

import React from 'react';

interface SummerHeroProps {
  showDiscount: boolean;
  showPremiumPromo: boolean;
  showCountdown: boolean;
}

export const SummerHero = ({
  showDiscount,
  showPremiumPromo,
  showCountdown,
}: SummerHeroProps) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="mb-8 lg:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black tracking-tight leading-none">
            COLLECTIONS
          </h1>
        </div>

        {showDiscount && (
          <div className="mb-8 lg:mb-12 bg-black text-white p-4 sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  SUMMER SALE
                </h2>
                <p className="text-base lg:text-lg opacity-90">
                  Up to 70% off selected items
                </p>
              </div>
              {showCountdown && <CountdownTimer />}
            </div>
          </div>
        )}

        {showPremiumPromo && (
          <div className="mb-8 lg:mb-12 border border-black p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                PREMIUM MEMBERSHIP
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Exclusive access to limited collections and early releases
              </p>
              <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors text-sm sm:text-base">
                JOIN NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 7,
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center lg:text-right">
      <div className="text-xs sm:text-sm opacity-75 mb-2">LIMITED TIME</div>
      <div className="flex justify-center lg:justify-end space-x-2 sm:space-x-4 text-base sm:text-xl font-mono">
        <div>{timeLeft.days.toString().padStart(2, '0')}D</div>
        <div>{timeLeft.hours.toString().padStart(2, '0')}H</div>
        <div>{timeLeft.minutes.toString().padStart(2, '0')}M</div>
        <div>{timeLeft.seconds.toString().padStart(2, '0')}S</div>
      </div>
    </div>
  );
}
