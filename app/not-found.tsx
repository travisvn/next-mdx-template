import NotFoundReturnButton from '@/components/404-return-button'
// import Link from 'next/link'


export default function NotFound() {

  return (
    <>
      <div className="px-4 flex flex-col mx-auto items-center">
        <div className="text-center">
          <h1 className="text-8xl sm:text-9xl font-black text-ctp-yellow">404</h1>

          <p className="text-2xl font-bold tracking-tight sm:text-4xl text-white">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-300">We can&apos;t find that page.</p>

        </div>
        <div className="text-center mt-[100px]">
        </div>
        <NotFoundReturnButton />
      </div>
    </>
  )
}