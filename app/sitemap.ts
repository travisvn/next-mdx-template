
import { postUrl, siteConfig } from '@/config/site'
import { getBlogPosts } from '@/utils/mdx-utils'


export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${siteConfig.baseUrl}/${postUrl}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', `/${postUrl}`].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}