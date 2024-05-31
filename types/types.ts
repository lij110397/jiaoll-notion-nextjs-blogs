// define interface for the posts according to post metadata from notion.js
// the posts will be an array of objects with the following properties: id, title, tags, description, date, and slug.
import { ExtendedRecordMap } from 'notion-types'
export interface Post {
  id: string
  title: string
  tags: string[]
  description: string
  date: string
  slug: string
  cover: string
}

export type PostProps = {
  metadata: {
    id: string
    title: string
    date: string
    tags: string[]
    cover: string
  }
  blockMap: ExtendedRecordMap
}
