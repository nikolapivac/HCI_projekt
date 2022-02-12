import React from 'react';
import Navbar  from "./navbar";
import styles from "./navbar.module.css";
// import Banner from "react-banner";


const Header =()=>{
    return (
        <header className={styles.header}>
        <button className={styles.log_in}>login</button>
        <h1 className={styles.naslov1}>WIZARDING WORLD OF</h1>
        <h1 className={styles.naslov2}>Harry Potter</h1>
        <Navbar/>
        </header>
    );
};

export default Header;