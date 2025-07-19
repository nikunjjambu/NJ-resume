import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

{
  /*import GoogleAnalytics from '@/components/Template/GoogleAnalytics';*/
}

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nikunj Jambu',
    template: '%s | Nikunj Jambu',
  },
  description:
    "Nikunj Jambu's personal website. MEL Specialist, Spatial Analyst and Conservation Biologist.",
  keywords: [
    'Nikunj Jambu',
    'MEL Specialist',
    'Spatial Analyst',
    'Conservation Biologist',
    'Field Biologist',
    'portfolio',
  ],
  authors: [{ name: 'Nikunj Jambu' }],
  creator: 'Nikunj Jambu',
  metadataBase: new URL('https://www.nikunjjambu.info'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nikunjjambu.info',
    siteName: 'Nikunj Jambu',
    title: 'Nikunj Jambu',
    description: 'MEL Specialist, Spatial Analyst and Conservation Biologist.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikunj Jambu',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        {/*<GoogleAnalytics />*/}
      </body>
    </html>
  );
}
