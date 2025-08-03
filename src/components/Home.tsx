'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { DefaultHero } from '@/components/DefaultHero';
import { FeatureFlagsToolbar } from '@/components/FeatureFlagsToolbar';
import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductSidebar } from '@/components/ProductSidebar';
import { SummerHero } from '@/components/SummerHero';

const Footer = dynamic(
  () => import('@/components/Footer').then(mod => ({ default: mod.Footer })),
  {
    ssr: false,
  }
);

interface FlagResults {
  showSummerHero: boolean;
  showDiscount: boolean;
  showPremiumPromo: boolean;
  showCountdown: boolean;
}

export const Home = ({
  showSummerHero: initialSummerHero,
  showDiscount: initialDiscount,
  showPremiumPromo: initialPremiumPromo,
  showCountdown: initialCountdown,
}: FlagResults) => {
  const [flags, setFlags] = useState({
    showSummerHero: initialSummerHero,
    showDiscount: initialDiscount,
    showPremiumPromo: initialPremiumPromo,
    showCountdown: initialCountdown,
  });

  const handleFlagsChange = (newFlags: typeof flags) => {
    setFlags(newFlags);
  };

  const products = [
    {
      id: 1,
      name: 'FRIDA YELLOW CAT DRESS',
      price: '€72,92 EUR',
      image:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center',
      colors: ['#F4D03F', '#E67E22'],
    },
    {
      id: 2,
      name: 'AGNETHA BLUE CAT DRESS',
      price: '€72,92 EUR',
      image:
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop&crop=center',
      colors: ['#3498DB', '#1F4E79'],
    },
    {
      id: 3,
      name: "AGNETHA'S BLUE CROCHET HAT",
      price: '€34,22 EUR',
      image:
        'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center',
      colors: ['#2C3E50', '#34495E'],
    },
    {
      id: 4,
      name: 'DANCING QUEEN VINYL',
      price: '€29,95 EUR',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center',
      colors: ['#000000', '#2C3E50'],
    },
    {
      id: 5,
      name: 'WATERLOO POSTER',
      price: '€15,50 EUR',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
      colors: ['#FFFFFF', '#F8F9FA'],
    },
    {
      id: 6,
      name: 'SUMMER TOTE BAG',
      price: '€42,00 EUR',
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      colors: ['#ECF0F1', '#BDC3C7'],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {flags.showSummerHero ? (
          <SummerHero
            showDiscount={flags.showDiscount}
            showPremiumPromo={flags.showPremiumPromo}
            showCountdown={flags.showCountdown}
          />
        ) : (
          <DefaultHero />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar />
            <ProductGrid products={products} />
          </div>
        </div>

        <Footer />
      </div>

      <FeatureFlagsToolbar
        initialFlags={flags}
        onFlagsChange={handleFlagsChange}
      />
    </>
  );
};
