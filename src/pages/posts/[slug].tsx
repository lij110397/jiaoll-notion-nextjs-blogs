// present a single post page
import { getAllPublishedBlogs, getSinglePost } from '@/lib/notion'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({
  language,
  codestring,
}: {
  language: string
  codestring: string
}) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag='div'>
      {codestring}
    </SyntaxHighlighter>
  )
}

type PostProps = {
  post: {
    metadata: {
      title: string
      date: string
      tags: string[]
    }
    markdown: {
      parent: string
    }
  }
}

const Post = ({ post }: PostProps) => {
  return (
    <section>
      <h2>{post.metadata.title}</h2>
      <span>{post.metadata.date}</span>
      <p style={{ color: 'gray' }}>{post.metadata.tags.join(', ')}</p>
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <CodeBlock
                codestring={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {post.markdown.parent}
      </ReactMarkdown>
    </section>
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
