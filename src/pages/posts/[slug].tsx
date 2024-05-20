// present a single post page
import { getAllPublishedBlogs, getSinglePost } from '@/lib/notion'
import HomeLayout from '@/components/_homelayout'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

type PostProps = {
  post: {
    metadata: {
      title: string
      date: string
      tags: string[]
      cover: string
    }
    recordMap: ExtendedRecordMap
  }
}

const Post = ({ post }: PostProps) => {
  return (
    <HomeLayout
      pageTitle={post.metadata.title}
      url={post.metadata.cover}
      metadata={post.metadata}
    >
      <section className='px-56 py-40'>
        <div className='text-5xl'>{post.metadata.title} </div>
        <NotionRenderer
          recordMap={post.recordMap}
          fullPage={false}
          darkMode={false}
          previewImages={false}
        />
      </section>
    </HomeLayout>
  )
}
export default Post
/*
Similarly to the blog overview page - index.tsx, you will be pre-rendering each post page.

add the getStaticProps() function after the Post component and call the getSingleBlogPostBySlug function to fetch the blog post from Notion.
*/

/**
 * Retrieves the static props for the dynamic route "/posts/[slug].tsx".
 *
 * @param {Object} params - The parameters object containing the slug.
 * @param {string} params.slug - The slug parameter from the path URL.
 * @returns {Promise<Object>} The static props object.
 */
export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getSinglePost(params.slug) //uses the slug parameter from the path URL to identify which blog to present
  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}

// getStaticPaths function will generate the paths for the blog posts based on the slugs
export const getStaticPaths = async () => {
  const posts = await getAllPublishedBlogs()
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}
