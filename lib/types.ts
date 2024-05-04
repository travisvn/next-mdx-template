/* Work-in-progress - experimenting with types and interfaces */
export type PostMetadata = {
  title?: string
  publishedAt?: string
  subtitle?: string
  summary?: string
  tags?: string[]
}

export interface PostData {
  content?: string

  slug?: string
  [key: string]: any
}

export interface UnusedPostData {
  coverImage?: string
  ogImage?: {
    url?: string
  }
  draft?: boolean
  headliner?: boolean
}

export type PostComplete = PostMetadata & PostData & UnusedPostData

export type PostTest = PostData & (PostMetadata | UnusedPostData)

/* End WIP */

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