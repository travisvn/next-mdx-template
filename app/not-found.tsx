import Link from 'next/link'


export default function NotFound() {

  return (
    <>
      <div className="px-4 flex flex-col mx-auto items-center">
        <div className="text-center">
          <h1 className="text-8xl sm:text-9xl font-black text-yellow-400">404</h1>

          <p className="text-2xl font-bold tracking-tight sm:text-4xl text-gray-600">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-800">We can&apos;t find that page.</p>

        </div>
        <div className="text-center mt-[100px]">
          <Link
            href={'/'}
            className=''>
            Return to homepage
          </Link>
        </div>
      </div>
    </>
  )
}