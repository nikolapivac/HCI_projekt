import styles from '../pages/blog/blogpost.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.postcontainer}>
      <div className='blog'>
        <div className='row'>
          <div className='col-md'>
            <img className={styles.blog_image} src={post.frontmatter.cover_image} alt='' />
          </div>
          <div className='col-md'>
            <h3 className={styles.card_title}>{post.frontmatter.title}</h3>
            <p className={styles.card_body}>{post.frontmatter.excerpt}</p>
            <a href={`/blog/${post.slug}`} className={styles.button}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

