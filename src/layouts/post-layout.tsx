import Head from 'next/head'
import React from 'react'
import Content from '@/components/post/content'
import Aside from '@/components/post/aside'
import { PostProps } from '@/types/types'

// layout for posts
const PostLayout = ({ metadata, blockMap }: PostProps) => {
  return (
    <>
      <Head>
        <title>jiaoll blogs</title>
        <meta
          name='description'
          content="Jiaoll's personal blogs system including sense and sensitivity blogs"
        />
      </Head>
      <div className='m-auto w-full flex-grow px-4'>
        <div className='mx-5 flex flex-row justify-center gap-5'>
          <Content metadata={metadata} blockMap={blockMap} />
          <Aside metadata={metadata} blockMap={blockMap} />
        </div>
      </div>
    </>
  )
}

export default PostLayout
