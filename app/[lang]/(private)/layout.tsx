import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { LoadingProvider } from '@/components/loading-provider';
import { TranslationWrapper } from '@/components/TranslationWrapper';
import { Locale } from '@/lib/types'
import { getDictionary } from '@/lib/dictionary'

import localFont from 'next/font/local';


const inter = Inter({ subsets: ['latin'] });

const trinite = localFont({
  src: [
    {
      path: '../../../public/fonts/Trinite.ttf',
      weight: '400',
    }
  ],
  variable: '--font-trinite',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vestistextile.com'),
  title: {
    default: 'Vestis Textile | High-Quality Fabrics & Innovative Textile Solutions',
    template: '%s | Vestis Textile'
  },
  description: 'Vestis Textile is a leading textile manufacturer providing high-quality fabrics and innovative textile solutions for fashion, home, and industrial applications.',
  keywords: 'textile, manufacturing, fabrics, solutions, innovation, quality, sustainability, fashion, design, production, tekstil, üretim, giyim, tasarım, kalite, sürdürülebilirlik, gelecek, vestis tekstil, vestis virum reddit, vestis textile',
  authors: [{ name: 'Vestis Textile' }],
  creator: 'Vestis Textile',
  publisher: 'Vestis Textile',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: 'https://vestistextile.com',
    siteName: 'Vestis Textile',
    title: 'Vestis Textile | High-Quality Fabrics & Innovative Textile Solutions',
    description: 'Vestis Textile is a leading textile manufacturer providing high-quality fabrics and innovative textile solutions for fashion, home, and industrial applications.',
    images: [
      {
        url: '/images/logoo1.jpg',
        width: 1200,
        height: 630,
        alt: 'Vestis Textile',
      },
    ],
  },
  icons: {
    icon: '/images/logoo1.png',
    shortcut: '/images/logoo1.png',
    apple: '/images/logoo1.png',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.className} ${trinite.variable}`}>
        <TranslationWrapper dict={dict}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <Navbar lang={lang} dict={dict} />
            <main>{children}</main>
            <Footer dict={dict} />
          </LoadingProvider>
        </ThemeProvider>
        </TranslationWrapper>
      </body>
    </html>
  );
}