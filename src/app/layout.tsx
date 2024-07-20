import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { AppWrap } from '@/components';
import React, { Suspense } from 'react';

const font = Lato({ subsets: ['latin'], preload: true, weight: ['100','300','400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Nexus Portfolio | Favour Orukpe ©️',
  description: 'Portfolio Webpage',
  icons: {
    icon: '/images/nextjs.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense fallback={<div>Loading....</div>}>
          <AppWrap>
            {children}
          </AppWrap>
        </Suspense>
      </body>
    </html>
  );
}
