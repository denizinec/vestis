import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const defaultLocale = 'tr'
const locales = ['en', 'tr']

function isStaticPath(pathname: string) {
  return pathname.startsWith('/images/') || 
         pathname.startsWith('/_next/') || 
         pathname.includes('.')
}

function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
  }
  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Statik dosyalar
  if (isStaticPath(pathname)) {
    return NextResponse.next()
  }

  // Eğer pathname zaten geçerli bir locale ile başlıyorsa (örneğin /tr veya /en), yönlendirme yapma
  const hasLocale = locales.some((locale) =>
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (hasLocale) {
    return NextResponse.next()
  }

  // Anasayfa yönlendirmesi
  if (pathname === '/') {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}/home`, request.url))
  }

  // Locale ekle ve yönlendir
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|images|favicon.ico).*)'],
}
