'use client'

import { cn } from '@/lib/utils'


const Footer = () => {
  return (
    <footer
      className={cn(
        'flex flex-row mx-auto space-x-8 w-full mt-8',
        'text-gray-500',
        'place-content-center',
      )}
    >
      <a
        href='https://github.com/travisvn/next-mdx-template'
        className='hover:ring-2 rounded-md px-2 py-1 duration-150 active:scale-95 active:duration-0'
        target='_blank'
      >
        View on GitHub
      </a>
    </footer>
  )
}

export default Footer