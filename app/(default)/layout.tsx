import MainLayout from '@/components/layout/main-layout'
import { Navbar } from '@/components/layout/nav'
import NavBar from '@/components/layout/navbar'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <MainLayout>
      <NavBar />
      <Navbar />
      {children}
    </MainLayout>
  )
}