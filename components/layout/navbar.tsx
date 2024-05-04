'use client'

import { navItems, siteConfig } from '@/config/site'
import Link from 'next/link'


const NavBar = () => {

  return (
    <>
      <nav
        className="flex flex-row mx-auto justify-between w-full"
      >
        <div className="text-sky-600 font-bold text-2xl">
          <Link
            href='/'
            className=''
          >
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
                  className='hover:ring-2 rounded-md px-2 py-1 duration-150 active:scale-95 active:duration-0'
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