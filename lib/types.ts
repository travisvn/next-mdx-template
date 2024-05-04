export type PostType = {
  slug?: string
  title?: string
  publishedAt?: string
  subtitle?: string
  summary?: string
  tags?: string[]
  // end of currently used frontmatter

  coverImage?: string
  ogImage?: {
    url?: string
  }

  content?: string

  draft?: boolean
  headliner?: boolean
  [key: string]: any
}

export type AuthorType = {
  slug?: string,
  name?: string,
  profilePic?: string,
  [key: string]: any
}