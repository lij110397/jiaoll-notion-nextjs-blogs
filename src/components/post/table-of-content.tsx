import React from 'react'
import { PostProps } from '@/types/types'
import { getPageTableOfContents } from 'notion-utils'
import { PageBlock } from 'notion-types'

const TableOfContent = ({ metadata, blockMap }: PostProps) => {
  // get the table of content from the blockMap use getPageTableOfContents function
  // 1. get the pageblock
  // console.log('blockMap',blockMap);
  const pageId = metadata.id
  const pageBlock = blockMap.block[pageId].value as PageBlock
  // console.log('pageBlock', pageBlock);
  // // 2. get the table of content
  const toc = getPageTableOfContents(pageBlock, blockMap)
  if (toc.length === 0) {
    return null
  }
  // console.log('toc', toc)

  // click toc item to scroll to the corresponding content
  function scrollToContent(id: string) {
    id = id.replace(/-/g, '') // remove the '-' in the id
    // get the element in a Notion page
    const element = document.getElementById(id)
    // const target = document.querySelector(`.notion-block-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='min-w-56 flex-col whitespace-nowrap rounded-lg bg-secondary p-12 text-start text-sm text-primary xl:min-w-64'>
      <h1 className='text-center text-xl font-extrabold uppercase'>Catalog</h1>
      <div className='divider divide-primary'></div>
      <div className='text-primary'>
        {toc.map((item, index) => (
          <div
            key={index}
            className={
              item.type === 'sub_header'
                ? 'ml-5'
                : item.type === 'sub_sub_header'
                  ? 'ml-10'
                  : ''
            }
          >
            <a
              onClick={() => scrollToContent(item.id)}
              className='block py-1 hover:underline'
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableOfContent
