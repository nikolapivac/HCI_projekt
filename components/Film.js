import styles from './films.module.css'


export default function Film({ film }) {
  return (
    <>
      <div className={styles.filmscontainer}>
        <div className={styles.film}>
          <div className='row'>
            <div className='col-md-7 '>
              <h3 className={styles.film_title}>{film.frontmatter.title}</h3>
              <p className={styles.film_body}>{film.frontmatter.excerpt}</p> 
            </div>
            <div className='col-md-5'>
              <img className={styles.film_image} src={film.frontmatter.cover_image} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
