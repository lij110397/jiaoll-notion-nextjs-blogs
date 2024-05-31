// present a single post page
import {
  getAllPublishedBlogs,
  getSinglePostMeta,
  getRecordMap
} from '@/lib/notion'
import PostLayout from '@/layouts/post-layout'
import React from 'react'
import { PostProps } from '@/types/types'

const Post = ({ metadata, blockMap }: PostProps) => {
  return (
    <>{metadata && <PostLayout metadata={metadata} blockMap={blockMap} />}</>
  )
}
export default Post

export const getStaticProps = async ({
  params
}: {
  params: { slug: string }
}) => {
  try {
    const metadata = await getSinglePostMeta(params.slug) //uses the slug parameter from the path URL to identify which blog to present
    const blockMap = await getRecordMap(metadata.id)
    return {
      props: {
        metadata,
        blockMap
      },
      revalidate: 1
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        metadata: null,
        blockMap: null
      },
      revalidate: 1
    }
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPublishedBlogs()
  const paths = posts.map(({ slug }) => {
    if (!slug) {
      slug = 'default-slug'
    }
    return {
      params: { slug }
    }
  })
  return {
    paths,
    fallback: true
  }
}
