import { cn } from '@/lib/utils'
import NavBar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

type Props = {
  children?: React.ReactNode
}


const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="mt-8 flex flex-col mx-auto items-center">
        <div
          className={cn(
            'md:my-3',
            'items-center md:items-start ',
            'place-content-center ',
            'md:max-w-prose w-full',
          )}>
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainLayout