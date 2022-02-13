import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { sortByDate } from '../utils'
<<<<<<< HEAD
import styles from "./home/home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './blog/blogpost.module.css'

>>>>>>> dc947ce6bae711eb945514f53033caa0735c7521
export default function BlogIndex({ posts }) {
    return (
      <div>
        <div className={styles.pagecontainer}>
        <Header />
         <div className={styles.contentwrap}>
        <Head>
          <title>Blog</title>
        </Head>

        <div className={styles.postcontainer}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
              ))}
        </div>
        </div>
        <Footer />
      </div> 
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
