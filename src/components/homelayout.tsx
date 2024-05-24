import { ReactNode } from 'react'
import Footer from './footer'
import HeroWrapper from './hero-wrapper'
import Navbar from './navbar'
import React from "react";

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

const HomeLayout: React.FC<SubLayoutProps> = ({ children, pageTitle, url }) => {
  if(!children) return <div>no content</div>
  if(!pageTitle) return <div>no pageTitle</div>
  if(!url) return <div>no url</div>
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center'>
          <HeroWrapper title={pageTitle} url={url}/>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default HomeLayout
