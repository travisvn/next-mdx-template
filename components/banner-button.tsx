import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  href: string
  // text: string
  children: React.ReactNode
}

const BannerButton = ({ href, children }: Props) => {

  return (
    <>
      <div className="">
        <div
          className="absolute -inset-1 rounded-xl bg-gradient-to-tl from-fuchsia-600 via-slate-600 to-yellow-600 opacity-100 blur-lg  md:blur-2xl"
        ></div>
        <Link
          href={href}
          className={cn(
            // 'relative flex w-full items-center justify-center',
            'text-xl py-1 px-2',
            'sm:text-2xl sm:py-2 sm:px-4',
            'md:text-4xl md:py-3 md:px-6 rounded-xl duration-300 font-firaSans tracking-tighter text-ctp-pink',
            'bg-gray-800 hover:bg-opacity-80',
            // ' bg-black/15 hover:bg-black/25',
            'active:shadow-inner active:shadow-black/50',
            // 'innerShadow',
            // 'shadow-lg shadow-black/20',
            // 'outline-none ring-1 ring-black',
            // 'border border-white/10',
            'good-box',
            'active:scale-95 active:duration-0 ease-in-out',
            'inline-flex items-center',
            // 'hover:scale-110 active:scale-90 active:duration-150',
          )}
        >
          {children}
        </Link>
      </div>
    </>
  )
}

export default BannerButton