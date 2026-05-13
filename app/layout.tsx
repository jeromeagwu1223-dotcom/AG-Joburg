import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { QuoteModalProvider } from '@/components/QuoteModalProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AG Joburg — One call. Every trade.',
  description:
    'Renovations, repairs, waterproofing, plumbing, electrical, tiling and damp proofing — handled by one team. Free quotes within 24 hours across greater Joburg.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <QuoteModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
