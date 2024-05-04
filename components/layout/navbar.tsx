'use client'

import { siteConfig } from '@/config/site'
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
          Links here
        </div>
      </nav>
    </>
  )
}

export default NavBar