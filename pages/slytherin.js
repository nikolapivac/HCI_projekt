import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Screst from "../pages/slike/house crests/Slytherincrest.jpg"
import MalfoyFamily from "./slike/notable members/Malfoy_Family.jpg"
import Snape from "./slike/notable members/snape.jpg"
import Voldemort from "./slike/notable members/voldemort.jpg"
import styles from "./houses/slytherin.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'

const Slytherin=()=>{
    return(
    <>
<Header/>
<Head>
    <title>Slytherin</title>
</Head>
<div className={styles.background}>
    <div className="container-fluid">
        <a href={`/hogwarts_houses`} className={styles.button}>Back To Houses</a>
        <h1 className={styles.title}>Slytherin</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Screst}
            class="img-fluid"
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
                <li>salazar slytherin</li>
                <li>green and silver</li>
                <li>serpent</li>
                <li>water</li>
                <li>determination, pride, ambition</li>
                <li>horace slughorn</li>
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
                <div className={styles.picture}>
            <Image
            src={MalfoyFamily} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}></Image>
            </div>
            <h4 className={styles.text}>MALFOY FAMILY</h4>
            </div>
            <div className="col">
            <Image
            src={Snape} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>SEVERUS SNAPE</h4>
            </div>
            <div className="col">
            <Image
            src={Voldemort} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>TOM RIDDLE/ LORD VOLDEMORT</h4>
            </div>

        </div>

    </div>
    
</div>

<Footer/>
    </>
    );
};

export default Slytherin;