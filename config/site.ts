
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: 'MDX Onyva',
  description: 'Next.js and MDX content',
  baseUrl: (process.env.BASE_URL != null && process.env.BASE_URL != '') ? process.env.BASE_URL : ``,
}


export const markdownDirectory = 'content'