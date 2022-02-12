import Link from 'next/link'
import styles from '../pages/blog/blogpost.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.postcontainer}>
      <img className={styles.blog_image} src={post.frontmatter.cover_image} alt='' />

      <h3 className={styles.card_title}>{post.frontmatter.title}</h3>

      <p className={styles.card_body}>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className={styles.button}>Read More</a>
      </Link>
    </div>
  )
}
