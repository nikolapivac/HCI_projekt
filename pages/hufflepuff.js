import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Hcrest from "../pages/slike/house crests/Hufflepuffcrest.jpg"
import Lupin from "./slike/notable members/RemusLupin.jpg"
import Tonks from "./slike/notable members/NymphadoraTonks.jpg"
import Sprout from "./slike/notable members/Sprout.jpg"
import styles from "./houses/hufflepuff.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'

const Hufflepuff=()=>{
    return(
    <>
<Header/>
<Head>
    <title>Hufflepuff</title>
</Head>
<div className={styles.background}>
    <div className="container-fluid">
        <a href={`/hogwarts_houses`} className={styles.button}>Back To Houses</a>
        <h1 className={styles.title}>Hufflepuff</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Hcrest}
            class="img-fluid"
            width= "300px"
            height="300px"
            ></Image>
        </div>
        <div className="col">
            <ui className={styles.text2}>
                <li>Founder:</li>
                <li>House colors:</li>
                <li>Animal:</li>
                <li>Element:</li>
                <li>Traits:</li>
                <li>Head:</li>
            </ui>
        </div>
        <div className="col" >
            <ui className={styles.text2}>
                <li>Helga Hufflepuff</li>
                <li>Yellow and black</li>
                <li>Badger</li>
                <li>Earth</li>
                <li>Patience, fairness</li>
                <li>Pomona sprout</li>
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
            src={Lupin} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}></Image>
            </div>
            <h4 className={styles.text}>Remus Lupin</h4>
            </div>
            <div className="col">
            <Image
            src={Tonks} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Nymphadora Tonks</h4>
            </div>
            <div className="col">
            <Image
            src={Sprout} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Pomona Sprout</h4>
            </div>

        </div>

    </div>
    
</div>

<Footer/>
    </>
    );
};

export default Hufflepuff;