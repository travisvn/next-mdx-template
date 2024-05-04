'use client'

import { navItems, siteConfig } from '@/config/site'
import Link from 'next/link'


const NavBar = () => {

  return (
    <>
      <nav
        className="flex flex-row mx-auto max-w-screen-lg w-full justify-between"
      >
        <div className="text-ctp-rosewater font-bold text-2xl">
          <Link
            href='/'
            className=''>
            {siteConfig.title}
          </Link>
        </div>
        <div className="">
          <div className="flex flex-row space-x-3">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar