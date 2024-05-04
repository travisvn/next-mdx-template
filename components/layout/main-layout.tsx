import { cn } from '@/lib/utils'
import NavBar from '@/components/layout/navbar'

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center">
        <div className={cn(
          'md:my-3',
          'items-center md:items-start ',
          'place-content-center ',
        )}>
          <NavBar />
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default MainLayout