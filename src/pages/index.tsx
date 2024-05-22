/**
 * This page will be used to present blogs overview.
 * It includes a basic header with the website name and description.
 * you will fetch the blog posts at build time using getStaticProps and pre-render the page
 */
import { getAllPublishedBlogs } from '../../lib/notion'
// import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import HomeLayout from '../components/homelayout'
import { Post } from '../types/types'
import BlogPreviewCard from '../components/blog-preview-card'
import Pagination from '../components/pagination'
import React, { useState } from 'react'

export default function Home({ posts = [] }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  let indexOfLastPost = currentPage * 6
  let indexOfFirstPost = indexOfLastPost - 6
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  let totalPages = Math.ceil(posts.length / 6)

  if (!posts.length) return <h1>No posts!</h1>
  return (
    <div>
      <HomeLayout pageTitle='Blogs' url=''>
        <div className='p-16'>
          <h1 className='text-primary font-bold mb-10'>All blogs post</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20'>
            {currentPosts &&
              currentPosts.length > 0 &&
              currentPosts.map((post: any, index: number) => (
                post && <BlogPreviewCard key={index} post={post} index={index} />
              ))}
          </div>
          <Pagination
            index={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </HomeLayout>
    </div>
  )
}

// getStaticProps will fetch the blog posts at build time using getAllPublishedBlogs function
export async function getStaticProps() {
  const posts = await getAllPublishedBlogs()
  return {
    props: {
      posts,
    },
    revalidate: 60, // regenerate the page every 60 seconds
  }
}
