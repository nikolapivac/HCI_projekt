import React from 'react';
import Navbar  from "./navbar";
import styles from "./navbar.module.css";
import "./navbar.module.css";
import "../../pages/home/home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";



const Header =()=>{
    return (
        <header className={styles.header}>
        <button className={styles.log_in}>login</button>
        <div className="align"> 
        <h1 className={styles.naslov1}>THE WIZARDING WORLD OF</h1>
        <h2 className={styles.naslov2}>Harry Potter</h2>
        </div>
        {/* <Navbar/> */}
        </header>
    );
};

export default Header;