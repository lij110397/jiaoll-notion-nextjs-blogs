// this card component will be used to present blog overview info like cards
import Link from 'next/link'
import { Post } from '@/types/types'
import React from 'react'

const BlogPreviewCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <div key={index} className='card bg-base-100 shadow-xl blog-preview-card max-w-lg'>
      <figure className='object-contain h-32 md:h-60'>
        <img src={post.cover} alt={`post image of ${post.title}`} />
      </figure>
      <div className='card-body'>
        <p className='text-primary text-sm'>{post.date}</p>
        <h2 className='card-title text-black hover:underline'>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{post.description}</p>
        <div className='card-actions justify-end'>
          {post.tags.map((tag, i) => (
            <div key={i} className='badge badge-outline'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPreviewCard
