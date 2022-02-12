import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { sortByDate } from '../utils'

export default function BlogIndex({ posts }) {
    return (
      <div>
        <Header />
        <Head>
          <title>Blog</title>
        </Head>

        <div className='posts'>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
        <Footer />
      </div> 
    )
  }

export async function getStaticProps() {
// Getting markdown files from the posts directory
    const files = fs.readdirSync(path.join('posts'))

// Getting slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug by removing the .md extension
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
})

return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
