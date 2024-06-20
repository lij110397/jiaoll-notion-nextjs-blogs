import React from 'react'
import TableOfContent from '@/components/post/table-of-content'
import { PostProps } from '@/types/types'

const Aside = ({ metadata, blockMap }: PostProps) => {
  return (
    <aside>
      <div className='sticky top-10 mb-24 hidden lg:block'>
        <TableOfContent metadata={metadata} blockMap={blockMap} />
      </div>
    </aside>
  )
}
export default Aside
