import createMDX from '@next/mdx'
// import rehypePrettyCode from 'rehype-pretty-code'

// /** @type {import('rehype-pretty-code').Options} */
// const rehypePrettyCodeOptions = {
//   keepBackground: false,
//   // https://shiki.style/themes#themes
//   // theme: 'catppuccin-frappe',
//   // theme: 'one-dark-pro',
//   theme: {
//     dark: 'catppuccin-frappe',
//     light: 'catppuccin-latte',
//   }
// }

// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

  transpilePackages: ['next-mdx-remote'],
  experimental: {
    // mdxRs: false,
    mdxRs: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  // }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)