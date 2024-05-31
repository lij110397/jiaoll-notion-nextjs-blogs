import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import { PostProps } from '@/types/types'
import TagItem from '@/components/common/tag-item'

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
    <article className='w-full max-w-2xl overflow-x-scroll text-secondary-content md:overflow-x-visible lg:max-w-3xl'>
      {props.metadata && (
        <>
          <h1 className='blog-title text-2xl md:text-4xl'>
            {props.metadata.title}{' '}
          </h1>
          <div className='mt-5 flex flex-col justify-center gap-3 md:flex-row md:items-center md:justify-start'>
            <div className='text-md'>{props.metadata.date}</div>
            {props.metadata && props.metadata.tags && (
              <div className='flex max-w-full flex-row flex-wrap gap-3'>
                {props.metadata.tags.map((tag, i) => (
                  <TagItem key={i} tag={tag} />
                ))}
              </div>
            )}
          </div>
          <div className='relative -mt-4'>
            <NotionRenderer
              recordMap={props.blockMap}
              fullPage={false}
              darkMode={false}
              previewImages={false}
              components={{
                Code,
                Collection
              }}
            />
          </div>
          <div className='divider mb-24 text-base-100'>END</div>
        </>
      )}
    </article>
  )
}

export default Content
