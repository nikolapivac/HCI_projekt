import Header from "../components/header/header"
import Head from 'next/head'
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Gcrest from "../pages/slike/house crests/gryffindorcrest.jpg"
import Trio from "./slike/notable members/trio.jpg"
import Minerva from "./slike/notable members/Minerva_McGonagall_HP4.jpg"
import Albus from "./slike/notable members/albusdumbledore.jpg"
import styles from "./houses/gryffindor.module.css"
import "./houses/gryffindor.module.css"
import "bootstrap/dist/css/bootstrap.min.css";


const Gryffindor=()=>{
    return(
    <>
<Header/>
<Head>
    <title>Gryffindor</title>
</Head>
<div className={styles.background}>
    <div className="container-fluid">
        <h1 className={styles.title}>Gryffindor</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Gcrest}
            className="img-fluid"
            width= "300px"
            height="300px"
            ></Image>
        </div>
        <div className="col-2">
            <ui className={styles.text2}>
                <li>founder:</li>
                <li>house colors:</li>
                <li>animal:</li>
                <li>element:</li>
                <li>traits:</li>
                <li>head:</li>
            </ui>
        </div>
        <div className="col" >
            <ui className={styles.text2}>
                <li>cedric gryffindor</li>
                <li>scarlet and gold</li>
                <li>lion</li>
                <li>fire</li>
                <li>courage, bravery, determination</li>
                <li>minerva mcgonagall</li>
            </ui>
        </div>
    </div>

    </div>
</div>
<div className={styles.background}>
    <div className="container-fluid" class={styles.background}>
        <div className="row">
            <h4 className={styles.title2}>Notable members</h4>
            <div className="col">
            <Image
            src={Trio} 
            class="img-fluid"
            width="300px"
            height="200px"
            className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Harry Potter, Hermione Granger and Ron Weasley</h4>
            </div>
            <div className="col">
            <Image
            src={Albus} 
            class="img-fluid"
             width="300px"
            height="200px" 
            className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Albus Dumbledore</h4>
            </div>
            <div className="col">
            <Image
            src={Minerva} 
            class="img-fluid" 
             width="300px"
            height="200px"
            className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Minerva McGonagall</h4>
            </div>

        </div>

    </div>
<a href={`/hogwarts_houses`} className={styles.button}>Back To Houses</a>
</div>

<Footer/>
    </>
    );
};

export default Gryffindor;