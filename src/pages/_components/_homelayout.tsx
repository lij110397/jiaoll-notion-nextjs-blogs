import { ReactNode } from 'react'
import Footer from './footer'
import HeroWrapper from './hero-wrapper'
import Navbar from './navbar'

interface SubLayoutProps {
  children: ReactNode
  pageTitle: string
  url?: string
  metadata?: {
    title: string
    date: string
    tags: string[]
    cover: string
  }
}
const HomeLayout: React.FC<SubLayoutProps> = ({ children, pageTitle, url, metadata }) => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center'>
          <HeroWrapper title={pageTitle} url={url} metadata={metadata}/>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default HomeLayout
