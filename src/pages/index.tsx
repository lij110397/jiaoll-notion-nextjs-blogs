/**
 * This page will be used to present blogs overview.
 * It includes a basic header with the website name and description.
 * you will fetch the blog posts at build time using getStaticProps and pre-render the page
 */
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { getAllPublishedBlogs } from "../../lib/notion";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

// define interface for the posts according to post metadata from notion.js
// the posts will be an array of objects with the following properties: id, title, tags, description, date, and slug.
interface Post {
  id: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
}

export default function Home({ posts }: { posts: Post[] }) {
  if (!posts) return <h1>No posts!</h1>;
  return (
    <div>
      <Head>
        <title>jiaoll blogs</title>
        <meta name="description" content="Jiaoll's personal blogs system including sense and sensitivity blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* in the main section, use map function to present the post */}
        <h1>Blogs</h1>
        {posts.map((post: any, index: number) => (
          <section key={index} className={styles.card}>
            <div>
              <h2>
                <Link href={post.slug}>
                  {post.title}
                </Link>
              </h2>
            </div>
            <div>{post.date}</div>
            <p>{post.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

// getStaticProps will fetch the blog posts at build time using getAllPublishedBlogs function
export async function getStaticProps() {
  const posts = await getAllPublishedBlogs();
  return {
    props: {
      posts,
    },
    revalidate: 60, // regenerate the page every 60 seconds
  };
}