import React from 'react';
import { navigationItems } from '../../const/NavbarList';
import styles from "./navbar.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
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
        <nav class="navbar navbar-expand-sm navbar-dark">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarMenu">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                      <a href=''>HOME</a>
                  </li>
                  <li class="nav-item">
                      <a href='hogwarts_houses' clas="nav-link"> HOGWARTS HOUSES</a>
                  </li>
                  <li class="nav-item">
                      <a href='films' clas="nav-link">FILMS</a>
                  </li>
                  <li class="nav-item">
                      <a href='experience' clas="nav-link">EXPERIENCE</a>
                  </li>
                  <li class="nav-item">
                      <a href='blog_index' clas="nav-link">BLOG</a>
                  </li>
                  <li class="nav-item">
                      <a href='shop' clas="nav-link">SHOP</a>
                  </li>
              </ul>
          </div>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        </nav>

    );
    
};

export default Navbar;