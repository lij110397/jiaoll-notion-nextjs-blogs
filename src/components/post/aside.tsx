import React, { useEffect } from 'react'
import { useState } from 'react'
import TableOfContent from '@/components/table-of-content'
import { PostProps } from '@/types/types'
import { FaArrowCircleUp } from 'react-icons/fa'
// aside component will present two elements when scrolling
// 1. table of content component to show catalog of the post
// 2. arrow up button to help user to scroll to the top of the page

const Aside = ({ metadata, blockMap }: PostProps) => {
  // add scroll event listener to show the arrow up button and toc components
  const [showScrollElement, setShowScrollElement] = useState(false)

  // useEffect event add event listener to window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollElement(true)
      } else {
        setShowScrollElement(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [metadata, blockMap])

  // scroll event for arrow up to the top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <aside>
      {/* <div className=''>
        {showScrollElement && (
          <button onClick={scrollToTop} className='bg-gray-50'>
            <FaArrowCircleUp size={30} />
          </button>
        )}
      </div> */}
      <div className='sticky top-10 hidden lg:block'>
        <TableOfContent metadata={metadata} blockMap={blockMap} />
      </div>
    </aside>
  )
}
export default Aside
