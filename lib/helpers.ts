import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { PostType, AuthorType } from '@/lib/types'
import { markdownDirectory } from '@/config/site'

const postsDirectory = join(process.cwd(), markdownDirectory)
const authorsDirectory = join(process.cwd(), '_authors')

/**
 * 
 * TO-DO:
 *  - Function to generate 'archive' — time organized posts 
 * 
 *  - Functionality for "related articles" (how to accomplish this?)
 * 
 *  - Modifications to make a content-based site?
 *    - (eventually) Look into CMS options
 * 
 * 
 */

export function getPostSlugs(): string[] {
  const postFiles = fs.readdirSync(postsDirectory)
  const slugs = postFiles.map((dirtySlug) => dirtySlug.replace(/\.mdx$/, ''))
  return slugs
}

export function getAuthorSlugs(): string[] {
  const authorFiles = fs.readdirSync(authorsDirectory)
  const slugs = authorFiles.map((dirtySlug) => dirtySlug.replace(/\.json$/, ''))
  return slugs
}

export function getAllPosts(fields: string[] = []): PostType[] {
  fields = includeFields(fields)
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function includeFields(originalFields: string[], addedFields: string[] = []): string[] {
  let combinedFields: string[] = originalFields

  if (addedFields.length == 0) {
    addedFields = ['draft']
  }

  addedFields.forEach((field: string) => {
    if (!combinedFields.includes(field)) {
      combinedFields.push(field)
    }
  })

  return combinedFields
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: PostType = {}

  fields = includeFields(fields)

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}


export function getAllTags(omitDrafts: boolean = true): string[] {
  const posts = getAllPosts(['tags', 'draft'])
  const allTags = new Set<string>()
  posts.forEach((post) => {
    if (omitDrafts) {
      const firstPass = post?.draft
      if (firstPass) {
        return;
      }
    }
    post?.tags?.forEach((tag) => allTags.add(tag))
  })
  return Array.from(allTags)
}

export function getPostsByTag(
  tag: string,
  fields: string[] = [],
): PostType[] {
  return getAllPosts(fields).filter((post) => {
    return post.tags.includes(tag)
  })
}

export function filterDrafts(
  posts: PostType[]
): PostType[] {
  return posts.filter((post) => {
    return (post.draft === false)
  })
}

/** 
 * filterHeadliner inherently filters out the headliners (EXCLUDES them)
 *    maybe better named removeHeadliners (filterDrafts was more intuitive)
 * omitHeadliners
*/
export function filterHeadliner(
  posts: PostType[],
  omitHeadliners: boolean = true
): PostType[] {
  return posts.filter((post) => {
    const isHeadliner = post.headliner
    if (isHeadliner === true) { // maybe need to check this for === false -- look here if there are issues.
      if (omitHeadliners) return false
      else return true
    } else {
      if (omitHeadliners) return true
      else return false
    }
  })
}

export function getAllAuthors() {
  const authorsDirectory = join(process.cwd(), '_authors')
  const filenames = fs.readdirSync(authorsDirectory)

  return filenames.map(filename => {
    const file = fs.readFileSync(join(process.cwd(), '_authors', filename), 'utf8')

    // get data
    const data = JSON.parse(file)

    // get slug from filename
    const slug = filename.replace(/\.json/, '')

    // return combined frontmatter and slug build permalink
    return {
      ...data,
      slug,
      permalink: `/authors/${slug}`
    }
  })
}

export function getAuthorBySlug(slug: string): AuthorType {
  const file = fs.readFileSync(join(process.cwd(), '_authors', `${slug}.json`), 'utf8')

  const data = JSON.parse(file)

  return {
    ...data,
    permalink: `/authors/${slug}`,
    slug,
  }
}