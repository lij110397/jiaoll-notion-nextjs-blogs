import Navbar from '@/components/common/navbar'
import HeroWrapper from '@/components/common/hero-wrapper'
import React from 'react'
interface HeaderProps {
  pageTitle: string
  url: string
}

//
const Header = ({ pageTitle, url }: HeaderProps) => {
  return (
    <>
      <header>
        <Navbar />
        <div className='container'>
          <HeroWrapper title={pageTitle} url={url} />
        </div>
      </header>
    </>
  )
}

export default Header
