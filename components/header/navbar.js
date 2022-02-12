import React from 'react';
import { navigationItems } from '../../const/NavbarList';
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav
            className={styles.nav}
        >
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className={styles.Nav_items}
                >
                    {item}
                </li>
            ))}
        </nav>

    );
};

export default Navbar;