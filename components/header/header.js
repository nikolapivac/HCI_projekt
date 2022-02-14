import React from 'react';
import Nvbar  from "./navbar";
import styles from "./navbar.module.css";
import "./navbar.module.css";
import "../../pages/home/home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";




const Header =()=>{
    return (
        <header className={styles.header}>
        <button onClick="window.location=" className={styles.log_in}>
            <a href='/login'>login</a></button>
            <div className={styles.title}>

        <div className={styles.title}> 
        <h1 className={styles.naslov1}>the wizarding world of</h1>
        <h2 className={styles.naslov2}>Harry Potter</h2>
            </div>
        <Nvbar/>
            </div>
        </header>
    );
};

export default Header;