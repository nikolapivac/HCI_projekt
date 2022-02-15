import styles from './exp.module.css'
import Image from 'next/image'

export default function Experience({ experience }) {
  return (
    <>
    {/* <div className={styles.experiences}>

           {/* <div className={styles.expcontainer}> */}
    {/* </div> */} 
      <div className='container fluid' position="relative">
    <Image className="img-fluid"
    src={experience.frontmatter.cover_image}
    alt=''
    layout="fill"
    // width="100%"
    // height="100%"
    objectFit='contain'
    z-index="-1"
    // overflow="hidden"
    objectPosition='center'
     />
        <div className='row '>
          <div className='col'>
          <div className={styles.expcontainer}>
             <h3 className={styles.exp_title}>{experience.frontmatter.title}</h3>
    	          <div className={styles.text_container}>
      <p className={styles.exp_body}>{experience.frontmatter.excerpt}</p>
      </div>
          </div>
        </div>
        <div className='col'>
 <img className={styles.exp_map} src={experience.frontmatter.map} alt='' />

        </div>

    </div>   
    </div>
    {/* </div> */}
    </>
    )
  }