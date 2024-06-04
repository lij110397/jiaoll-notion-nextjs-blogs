# Project Name  - My Blog system
[Click Link to check my blog website](https://blog.jiaoll.com)

# Project Description
This blog system is part of my personal website. It is a Notion + Next.js project. It uses Notion my CMS, which is my note systems. As for the stacks, it uses Next.js + DaisyUI + Tailwind CSS. It also uses lots of others packages to complement functions like language switch, theme switch and so on.

# Version released
## v1.0
- Time: released at May 31 2024
- Content: This version includes most playable functions of a blog system, mainly including blog lists page(home page) and blog post page.

# Skill Stack used in the project
## Main Stack
- Notion as CMS - use Notion API
- Next.js + DaisyUI + Tailwind CSS
- Vercel as deployment platform
## Others
- Auto coding tool - Github Copilot used in the development.
## Useful Resources, tools, packages
**Thanks to the authors of these resources. There are really helpful to make my simple blog system possible.**
### Notion + Next.js
Using Notion as a CMS shares common process:
1. Create a new Notion Integration and a blog system database(add the integration in its share)
2. Setup your Next.js project and add Notion API secret to connect with Notion API
3. Use Notion API to get posts from the database and show it in the blog list
3. Use Notion API to get post content and present it(react-notion-x)

[How to create next js blog using notion as a cms](https://bejamas.io/hub/guides/how-to-create-next-js-blog-using-notion-as-a-cms)
[Building a blog with Notion & Next.js](https://splitbee.io/blog/notion-as-cms-using-nextjs)

### Notion-based Blog system
[NotionX - a blog system of notion+next.js](https://github.com/NotionX/react-notion-x?tab=readme-ov-file#packages)
[Notionic - a blog system of notion+next.js](https://github.com/izuolan/notionic/tree/5116f012659d8ac31f6b6870c1012a4a6f6fa44c)

### How to better present the content just like other blog systems - CSS and Responsive design
1. Responsive Design using Tailwind CSS variable class
2. Switch Themes using Daisy UI theme system and **[theme-change package](https://github.com/saadeghi/theme-change)**
3. Add Animation using **framer-motion** package when switch the pages
4. Use **react-i18next** to switch language in client render
5. Use **NProgress** package to show progress bar when loading the page

### Deploy to vercel through github repository

### Add Testing process and CI workflow
1. Unit Testing
2. Cypress E2E Testing
3. CI using Github Action

### Make the code prettier
1. Use prettier and eslint to stylish my code

# Experience shares

# Future
## SEO of the blog page
How to add SEO to the page.
## Do server-render to the pages for different languages when my blog posts are getting more
## Turn Notion Page into formats used in other platform, like 公众号, medium and so on. 
I can write one post and do it can help me to make it formats usable for other platform.