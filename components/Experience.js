import styles from './exp.module.css'
import Image from 'next/image'

export default function Experience({ experience }) {
  return (
    <>
    {/* <div className={styles.experiences}>

           {/* <div className={styles.expcontainer}> */}
    {/* </div> */} 
      <div className='container fluid relative g-0 '>
    <Image className="img-fluid opacity-50"
    src={experience.frontmatter.cover_image}
    alt=''
    sizes="100%"
    layout="fill"
    object-fit="cover"
     />
        <div className='row p-0'>
          <div className='col-7'>
          <div className={styles.expcontainer}>
             <h3 className={styles.exp_title}>{experience.frontmatter.title}</h3>
    	          <div className={styles.text_container}>
      <p className={styles.exp_body}>{experience.frontmatter.excerpt}</p>
      </div>
          </div>
        </div>
        <div className='col-5 relative'>
 <img  className={styles.exp_map} src={experience.frontmatter.map} alt='' />

        </div>

    </div>   
    </div>
    {/* </div> */}
    </>
    )
  }