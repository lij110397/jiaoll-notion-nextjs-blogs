// this file will be used to manage all functions related to requests with Notion API
import { Client } from "@notionhq/client";
// import package convert notion to markdown
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_KEY,
});

const n2m = new NotionToMarkdown({notionClient :notion});
// create a function to get all published blogs from notion api using NOTION_DATABASE_ID from the env
// filter out only published blogs
// sort the blogs in descending order based on the date they were created.
export async function getAllPublishedBlogs() {

    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID ?? '',
        filter: {
            property: "published",
            checkbox: {
                equals: true,
            },
        },
        sorts: [
            {
                property: "date",
                direction: "descending",
            },
        ]

    });

    const allPosts = posts.results;
    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
}

// create a function to get the necessary metadata of a blog post
// the metadata includes the id, title, slug, date, preview, and tags of the blog post
const getPageMetaData = (post: any) => {
    return {
        id: post.id,
        title: post.properties.name.title[0].plain_text,
        tags: post.properties.tags.multi_select.map((tag: any) => tag.name),
        description: post.properties.description.rich_text[0].plain_text,
        date: getToday(post.properties.date.last_edited_time),
        // slug: generateSlug(post.properties.name.title[0].plain_text),
        slug: post.properties.slug.rich_text[0].plain_text,
    };
}

// using the getToday function to format the date from Notion to a more human-readable format.
export const getToday = (datestring: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    if (datestring) {
        date = new Date(datestring);
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
    return today;
}

// create a function to generate the slug of a blog post based on the title
// export const generateSlug = (title: string) => {
//     return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^\-+|\-+$/g, '');
// }

// function getSinglePost - fetch a single blog from notion and convert it to markdown format
export const getSinglePost = async(slug: string) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID ?? '',
        filter: {
            property: "slug",
            formula: {
                string: {
                    equals: slug,
                }
            }
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
        metadata,
        markdown: mdString,
    };
}