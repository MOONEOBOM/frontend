import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import QueryClientProvider from '@/components/common/QueryClientProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mooneobom.vercel.app'),
  title: {
    default: '무너봄',
    template: '%s | 무너봄',
  },
  description: '무너에게 물어봄? 무너봄!',
  keywords: ['AI', '상담', '요약', '유플러스', '무너', '무너봄'],
  openGraph: {
    title: '무너봄',
    description: '무너에게 물어봄? 무너봄!',
    url: 'https://mooneobom.vercel.app',
    siteName: '무너봄',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: '무너봄',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '무너봄',
    description: '무너에게 물어봄? 무너봄!',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
