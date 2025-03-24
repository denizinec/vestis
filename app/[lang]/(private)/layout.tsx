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
  title: 'Vestis Textile',
  icons: {
    icon: '/images/logo.svg',
  },
  description: 'Vestis Textile is a leading textile manufacturer providing high-quality fabrics and innovative textile solutions',
  keywords: 'textile, manufacturing, fabrics, solutions, innovation, quality, sustainability, fashion, design, production, tekstil, üretim, giyim, tasarım, kalite, sürdürülebilirlik, gelecek, vestis tekstil, vestis virum reddit, vestis textile',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'standard',
    'max-video-preview': 1000,
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