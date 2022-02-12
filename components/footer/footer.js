import React from 'react';
import Image from 'next/image';
import Footerimg from "../../public/assets/footerlogo.png";
import styles from "./footer.module.css"
import  "./footer.module.css"
const Footer=()=>{
    
    {return (
        // <div className={styles.footer}>
        // <div className={styles.footerimg}>
        //     <Image src={Footerimg} 
        //     layout="fill"
        //     objectFit="cover"
        //     alt="Footer Logo" />
        // </div>
        // <h1 className={styles.footerTitle}>Wizarding World of Harry Potter</h1>
        // </div>
           <div className='mainfooter-lg-6 color'>
               <div className='container-fluid'>
                   <div className='row'>
                       {/* {column0} */}
                       <div className='col-3'>
                           <Image  class="img-responsive" src={Footerimg}></Image>
                       </div>
                       {/* {column1} */}
                       <div className='col'>
                           <h4 className={styles.footerTitle}>The wizarding world of Harry Potter</h4>
                           <ui  className={styles.footertext}>
                               <li>ABOUT US</li>
                               <li>PRIVACY SETTINGS</li>
                               <li>FAQ</li>
                               <li>TERMS & CONDITIONS</li>
                           </ui>
                       </div>
                       {/* {column2} */}
                       <div className='col-4'>
                           <h4 className={styles.footertext}> © WIZARDING WORLD DIGITAL 2022</h4>
                           <h5 className={styles.footertext}>
Brought to you by Wizarding World Digital, a partnership between Warner Bros. and Pottermore. Delivering the latest news and official products from the Wizarding World and our partners.

  
                           </h5>
                       </div>
                   </div>
               </div>
           </div>
    )
    }

}

export default Footer;
