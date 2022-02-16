import React from 'react';
import Link from 'next/link';
import Nvbar  from "./navbar";
import styles from "./navbar.module.css";
import "./navbar.module.css";
import "../../pages/home/home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";




const Header =()=>{
    return (
        <header className={styles.header}>
        <button className={styles.log_in} >
            {/* <a href='/login'>login</a> */}
            <Link href="/login"><h4 className={styles.bttn} >Login</h4></Link>
            </button>
            <div className={styles.title} >
            <div className={styles.title}>
                <Link href="/"> 
                    <h1 className={styles.naslov1}>The Wizarding World of</h1>
                </Link>
                <Link href="/">
                    <h2 className={styles.naslov2} >Harry Potter</h2>
                </Link>
            </div>
        <Nvbar/>
            </div>
        </header>
    );
};

export default Header;