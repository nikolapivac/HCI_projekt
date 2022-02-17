import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Experience from '../components/Experience'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../components/exp.module.css'

export default function ExpIndex({ experiences }) {
    return (
      <div>
        <Header />

        <Head>
          <title>Experience</title>
        </Head>

        <div className={styles.expcontainer}>
            {experiences.map((experience, index) => (
                <Experience key={index} experience={experience} />
            ))}
        </div>

        <Footer />

      </div> 
    )
  }

  export async function getStaticProps() {
    const files = fs.readdirSync(path.join('experiences'))

    const experiences = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(
            path.join('experiences', filename),
            'utf-8'
        )
        const { data: frontmatter } = matter(markdownWithMeta)
        return {
            slug,
            frontmatter,
        }  
      }
    )
    return {
        props: {
          experiences,
        },
      }
    }