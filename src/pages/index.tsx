/**
 * This page will be used to present blogs overview.
 * It includes a basic header with the website name and description.
 * you will fetch the blog posts at build time using getStaticProps and pre-render the page
 */
import { getAllPublishedBlogs } from '@/lib/notion'
import { Post } from '@/types/types'
import BlogPreviewCard from '@/components/blog-preview-card'
import Pagination from '@/components/common/pagination'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home({ posts = [] }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastPost = currentPage * 6
  const indexOfFirstPost = indexOfLastPost - 6
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / 6)

  const { t } = useTranslation()

  if (!posts.length) return <h1>{t('NO_POST')}</h1>
  return (
    <>
      <div className='flex flex-col items-center p-8'>
        <h1 className='mb-10 font-bold text-primary'>{t('ALL_BLOGS')}</h1>
        <div className='mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2'>
          {currentPosts &&
            currentPosts.length > 0 &&
            currentPosts.map(
              (post: Post, index: number) =>
                post && (
                  <BlogPreviewCard key={index} post={post} index={index} />
                )
            )}
        </div>
        <Pagination
          index={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  )
}

// getStaticProps will fetch the blog posts at build time using getAllPublishedBlogs function
export async function getStaticProps() {
  const posts = await getAllPublishedBlogs()
  return {
    props: {
      posts
    },
    revalidate: 60 // regenerate the page every 60 seconds
  }
}
