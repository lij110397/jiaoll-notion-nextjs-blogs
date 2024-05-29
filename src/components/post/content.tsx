import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import { PostProps } from '@/types/types'
import TagItem from '@/components/tag-item'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)

const Content = (props: PostProps) => {
  return (
    <article className='w-full md:overflow-x-visible overflow-x-scroll max-w-2xl lg:max-w-3xl'>
      {props.metadata && (
        <>
          <h1 className='text-2xl blog-title md:text-4xl'>{props.metadata.title} </h1>
          <div className='flex md:flex-row gap-3 md:justify-start md:items-center flex-col justify-center mt-5'>
            <div className='text-md'>{props.metadata.date}</div>
            {props.metadata && props.metadata.tags && (
              <div className='flex flex-row gap-3 flex-wrap max-w-full'>
                {props.metadata.tags.map((tag, i) => (
                  <TagItem key={i} tag={tag} />
                ))}
              </div>
            )}
          </div>
          <div className='-mt-4 relative'>
            <NotionRenderer
              recordMap={props.blockMap}
              fullPage={false}
              darkMode={false}
              previewImages={false}
              components={{
                Code,
                Collection,
              }}
            />
          </div>
          <div className='divider text-gray-300 mb-24'>END</div>
        </>
      )}
    </article>
  )
}

export default Content
