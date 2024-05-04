import { siteConfig } from '@/config/site'


export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  }
}