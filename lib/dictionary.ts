import type { Locale } from '@/lib/types'

const dictionaries = {
  en: () => import('@/public/locales/en.json').then(module => module.default),
  tr: () => import('@/public/locales/tr.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
} 