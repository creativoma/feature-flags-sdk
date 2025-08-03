import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Home Ecommerce | Feature Flags SDK',
  description: 'A simple ecommerce page to demonstrate feature flags',
};

const loraSans = Lora({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loraSans.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
