'use client'

import BannerButton from '@/components/banner-button'
import { LucideArrowLeft } from 'lucide-react'

const NotFoundReturnButton = () => {

  return (
    <>
      <BannerButton href='/'>
        <div className="inline-flex items-center group ">
          <LucideArrowLeft
            // size={arrowSize()}
            className="
            size-[26px] sm:size-[30px] md:size-[40px]
            mr-2 md:mr-4 transition group-hover:-translate-x-1  md:group-hover:-translate-x-2 duration-300 transform ease-in-out "
          />
          Go back home

        </div>
      </BannerButton>
    </>
  )
}

export default NotFoundReturnButton