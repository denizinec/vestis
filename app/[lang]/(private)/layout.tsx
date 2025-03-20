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


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Textile Company | Premium Textile Solutions',
  description: 'Leading textile manufacturer providing high-quality fabrics and innovative textile solutions',
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
      <body className={inter.className}>
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