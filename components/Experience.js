import styles from './exp.module.css'
import Image from 'next/image'

export default function Experience({ experience }) {
  return (
    <>
    <div className={styles.experiences}>
      <div className='container fluid'>
        <div className='row '>
          <div className={styles.expcontainer}>

    <Image className="img-fluid"
    src={experience.frontmatter.cover_image}
    alt=''
    layout="responsive"
    overflow="hidden"
    width="400px"
    height="300px"
    //  height="50%"
    objectFit='cover'
    objectPosition='center' />
           {/* <div className={styles.expcontainer}> */}
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
    {/* </div> */}
    </>
    )
  }
