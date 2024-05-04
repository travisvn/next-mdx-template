export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: 'My MDX Blog',
  description: 'Next.js and MDX content',
  baseUrl: (process.env.BASE_URL != null && process.env.BASE_URL != '') ? process.env.BASE_URL : `https://next-mdx-template.vercel.app`,
}

export const markdownDirectory = 'content'
export const postUrl = 'post'

export const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}
