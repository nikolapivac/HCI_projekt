import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './blogpost.module.css'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head><title>{title}</title></Head>  
      <Header />  
      <div className={styles.postcontainer}>
       <div className='container-fluid'>
      <div className="row">
        {/* <div className={styles.container}> */}
          <div className='col-6 gx-0'>
        <img className={styles.blog_image} className="img-fluid" src={cover_image} alt='' />  
          </div>
          <div className='col-6'>
        <h4 className={styles.post_title}>{title}</h4>
        <div className={styles.post_date}>Posted on {date}</div>
          </div>
        </div>
      {/* </div> */}
        </div>
      <div className="row">
        <div className={styles.post_body}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <a href={`/blog_index`} className={styles.button}>Back To Blog</a> 
        </div>
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