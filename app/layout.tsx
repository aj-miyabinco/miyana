import type { Metadata } from 'next';
import './globals.css';
import { playfairDisplay, inter } from '../lib/fonts';
import { Providers } from '../lib/providers';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Miyana™ | Premium Perfumes Crafted in India',
  description:
    'Golden Ratio-inspired, Razorpay-ready e-commerce experience for Miyana™ premium perfumes. Minimal, warm, and globally inspired.',
  metadataBase: new URL('https://www.example.com'),
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Miyana™ Perfumes — Golden Ratio Luxury',
    description: 'Perfume experiences crafted with Japanese minimalism, Arabic depth, and Indian craftsmanship.',
    url: 'https://www.example.com',
    siteName: 'Miyana™',
    images: [
      {
        url: '/og-miyana.jpg',
        width: 1200,
        height: 630,
        alt: 'Miyana Perfume Bottles composed in a Golden Ratio frame'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
