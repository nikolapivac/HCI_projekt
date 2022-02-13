import styles from './exp.module.css'

export default function Experience({ experience }) {
  return (
    <>
    <div className='experiences'>
      <div className='container fluid'>
        <div className='row'>
           <div className={styles.expcontainer} class="has-bg-img">
    <img className={styles.exp_image} class="bg-img" src={experience.frontmatter.cover_image} alt='' />
    </div>
          <div className='col'>
             <h3 className={styles.exp_title}>{experience.frontmatter.title}</h3>
    	          <div className={styles.text_container}>
      <p className={styles.exp_body}>{experience.frontmatter.excerpt}</p>
          </div>
        </div>
        <div className='col'>
 <img className={styles.exp_map} src={experience.frontmatter.map} alt='' />

        </div>

    </div>   
    </div>
    </div>
    </>
    )
  }
