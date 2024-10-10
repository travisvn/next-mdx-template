# Next.js MDX Template

![GitHub stars](https://img.shields.io/github/stars/travisvn/next-mdx-template?style=social)
![GitHub forks](https://img.shields.io/github/forks/travisvn/next-mdx-template?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/travisvn/next-mdx-template?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/travisvn/next-mdx-template)
![GitHub language count](https://img.shields.io/github/languages/count/travisvn/next-mdx-template)
![GitHub top language](https://img.shields.io/github/languages/top/travisvn/next-mdx-template)
![GitHub last commit](https://img.shields.io/github/last-commit/travisvn/next-mdx-template?color=red)
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftravisvn%2Fnext-mdx-template&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)
[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://img.shields.io/github/sponsors/travisvn)

Simple, easy-to-modify template to use for creating a blog, portfolio, or content-based website

## Features ⭐️
- :white_check_mark: Next.js 14 App Directory
- :white_check_mark: `next-mdx-remote` 
- :white_check_mark: RSS Feed
- :white_check_mark: Sitemap generation
- Tailwind CSS
- Syntax highlighting in `.mdx`
- Custom components embeddable in `.mdx` files
- Utility functions to customize further

[View live demo](https://next-mdx-template.vercel.app/)

## Config ⚙️
- `config/site.ts` - Site title, description, and URL
- `.env` to set `BASE_URL` if you'd like to override the base URL you set in `config/site.ts`

## Structure 📂

The majority of the structure should be self evident, based on [Next.js docs](https://nextjs.org/docs)

- `content/` - Location for posts (.mdx files)
- `utils/mdx-utils.ts` - Main functions for handling `.mdx` and converting frontmatter
- `lib/helpers.ts` - _extra (i.e. not required)_ Options for handling `.mdx`

### Notes ℹ️

- `gray-matter` and `date-fns` are included but not required
  - If you'd like to remove them, remove the `lib/helpers.ts` file and its connections
- Based off of [leerob.io repo](https://github.com/leerob/leerob.io)
