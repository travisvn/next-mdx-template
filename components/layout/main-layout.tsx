import { cn } from '@/lib/utils'

type Props = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto items-center ">
        <div className={cn(
          'md:my-3',
          'items-center md:items-start ',
          'place-content-center ',
        )}>
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default MainLayout