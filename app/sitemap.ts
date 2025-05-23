import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vestistextile.com'
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/services',
    '/contact',
    '/blog',
  ]
  
  const languages = ['en', 'tr']
  
  const urls: MetadataRoute.Sitemap = []
  
  languages.forEach(lang => {
    staticPages.forEach(page => {
      urls.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      })
    })
  })
  
  return urls
} 