// this card component will be used to present blog overview info like cards
import Link from "next/link";
import { Post } from '@/types/types'

const BlogPreviewCard = ({ post, index }: { post: Post, index: number }) => {
  return (
    <div key={index} className="card bg-base-100 shadow-xl">
      <figure className="object-contain h-60">
            <img src={post.cover} alt={`post image of ${post.title}`} />
        </figure>
      <div className="card-body">
        <p className="text-primary text-sm">{post.date}</p>
        <h2 className="card-title">
          <Link href={post.slug} className="text-black hover:underline">
            {post.title}
          </Link>
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          {post.tags.map((tag, i) => (
            <div key={i} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;