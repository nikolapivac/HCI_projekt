import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Film from '../components/Film'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../components/films.module.css'

export default function FilmIndex({ films }) {
    return (
      <div>

        <Header />

        <Head>
          <title>Films</title>
        </Head>

        <h1 className={styles.title}>Films</h1>
        <div className={styles.filmscontainer}>
            {films.map((film, index) => (
                <Film key={index} film={film} />
            ))}
        </div>
        
        <Footer />
      </div> 
    )
  }
  
export async function getStaticProps() {
// Getting markdown files from the films directory
    const files = fs.readdirSync(path.join('films'))

// Getting slug and frontmatter from films
    const films = files.map((filename) => {
        // Create slug by removing the .md extension
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('films', filename),
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
      films,
    },
  }
}
