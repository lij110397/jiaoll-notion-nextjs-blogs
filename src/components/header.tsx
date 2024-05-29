import Navbar from '@/components/navbar'
import HeroWrapper from '@/components/hero-wrapper'
import React from 'react';
interface HeaderProps {
    pageTitle: string
    url: string
  }

  // 
const Header = ({ pageTitle, url}:HeaderProps) => {
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
