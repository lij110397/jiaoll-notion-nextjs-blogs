// this card component will be used to present blog overview info like cards
import Link from 'next/link'
import { Post } from '@/types/types'
import React from 'react'
import TagItem from '@/components/common/tag-item'

const BlogPreviewCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <div
      key={index}
      className='blog-preview-card bg-base card max-w-lg shadow-xl'
    >
      <figure className='h-32 object-contain md:h-60'>
        <img src={post.cover} alt={`post image of ${post.title}`} />
      </figure>
      <div className='card-body'>
        <p className='text-sm text-primary'>{post.date}</p>
        <h2 className='text-content card-title hover:underline'>
          <Link href={`/${post.slug}`}>{post.title}</Link>
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className='text-content'>{post.description}</p>
        <div className='card-actions justify-end'>
          {post.tags.map((tag, i) => (
            <TagItem key={i} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPreviewCard
