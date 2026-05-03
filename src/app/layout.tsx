import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '700'],
  variable: '--font-main'
});

export const metadata: Metadata = {
  title: 'Sahil Hode | Full Stack Developer',
  description: 'I help businesses transform ideas into impactful digital products through clean code, fast web apps, and modern architectures.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Sahil Hode'],
  authors: [{ name: 'Sahil Hode' }],
  openGraph: {
    title: 'Sahil Hode | Full Stack Developer',
    description: 'Portfolio of Sahil Hode — Full Stack Developer',
    url: 'https://sahil-hode-portfolio.vercel.app', // placeholder, user used vision-vault-six but that's fazle rabbi
    siteName: 'Sahil Hode Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Hode | Full Stack Developer',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
