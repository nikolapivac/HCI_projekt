import styles from './exp.module.css'

export default function Experience({ experience }) {
  return (
    <div className={styles.expcontainer}>
      <img className={styles.exp_image} src={experience.frontmatter.cover_image} alt='' />

      <img className={styles.exp_map} src={experience.frontmatter.map} alt='' />

      <h3 className={styles.exp_title}>{experience.frontmatter.title}</h3>

      <div className={styles.text_container}>
        <p className={styles.exp_body}>{experience.frontmatter.excerpt}</p>
      </div>
      
    </div>
  )
}