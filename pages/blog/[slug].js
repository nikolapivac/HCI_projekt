import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head><title>{title}</title></Head>  
      <Header />  
      <div className='card card-page'>
        <img src={cover_image} alt='' />
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// Getting the paths from the markdown files
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
    //Map through each file and get the slug by removing .md from the name
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false, //in case the selected path does not exist
  }
}

// Getting the data based on a particular slug
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )
    //getting the frontmatter & the content of the post
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}