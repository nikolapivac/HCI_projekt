import React from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css"
import "./navbar.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Nvbar = () => {
    return (
        // <nav
        //     className={styles.nav}
        // >
        //     {navigationItems.map((item) => (
        //         <li
        //             key={item}
        //             className={styles.Nav_items}
        //         >
        //             {item}
        //         </li>
        //     ))}
        // </nav>
        <> 
        <Navbar sticky="top" expand="sm" collapseOnSelect className={styles.nvbar}>

        <Navbar.Toggle/>
        <Navbar.Collapse>


            <Nav >
                <Nav.Link href="/"><h4 className={styles.items}>Home</h4></Nav.Link>
            </Nav>
            <Nav >
                <Nav.Link href="/hogwarts_houses"><h4 className={styles.items}>Hogwarts houses</h4></Nav.Link>
            </Nav>

            <Nav>
                <Nav.Link href="/films"><h4 className={styles.items}>Films</h4></Nav.Link>
            </Nav>
            <Nav >
                <Nav.Link href="/experience"><h4 className={styles.items}>Experience</h4></Nav.Link>
            </Nav>
            <Nav >
                <Nav.Link href="/blog_index"><h4 className={styles.items}>Blog</h4></Nav.Link>
            </Nav>
            <Nav className={styles.items}>
                <Nav.Link href="/shop"><h4 className={styles.items}>Shop</h4></Nav.Link>
            </Nav>
            
        </Navbar.Collapse>

        </Navbar>
</>
);

};

export default Nvbar;