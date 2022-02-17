import React from 'react';
import Image from 'next/image';
import Footerimg from "../../public/assets/footerlogo.png";
import styles from "./footer.module.css"
import  "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.mainfooter}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <Image  className="img-fluid" src={Footerimg}></Image>
                    </div>
                    <div className='col-4'>
                        <h4 className={styles.footerTitle}>Wizarding world of Harry Potter</h4>
                        <ui  className={styles.footertext}>
                            <li>About us</li>
                            <li>Privay settings</li>
                            <li>Faq</li>
                            <li>Terms & conditions</li>
                        </ui>
                    </div>
                    <div className='col-4'>
                        <h4 className={styles.footercred}> © WIZARDING WORLD DIGITAL 2022</h4>
                        <h5 className={styles.footercred}>
                            Brought to you by Wizarding World Digital, a partnership between Warner Bros. and Pottermore. Delivering the latest news and official products from the Wizarding World and our partners.</h5>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;
