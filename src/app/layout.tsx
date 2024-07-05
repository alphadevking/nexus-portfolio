import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { AppWrap } from '@/components';
import React from 'react';

const space_mono = Space_Mono({ subsets: ['latin'], preload: true, weight: ['400', '700'] });

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
      <body className={space_mono.className}>
        <AppWrap>
          {children}
        </AppWrap>
      </body>
    </html>
  );
}
