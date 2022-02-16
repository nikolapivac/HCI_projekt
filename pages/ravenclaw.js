import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Rcrest from "../pages/slike/house crests/RavenclawCrest.jpg"
import Luna from "./slike/notable members/LunaLovegood.jpg"
import Ollivander from "./slike/notable members/ollivander.jpg"
import Filius from "./slike/notable members/Flitwick.jpg"
import styles from "./houses/ravenclaw.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'

const Ravenclaw=()=>{
    return(
    <>
<Header/>
<Head>
    <title>Ravenclaw</title>
</Head>
<div className={styles.background}>
    <div className="container-fluid">
        <a href={`/hogwarts_houses`} className={styles.button}>Back To Houses</a>
        <h1 className={styles.title}>Ravenclaw</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Rcrest}
            width= "300px"
            height="300px"
            ></Image>
        </div>
        <div className="col">
            <ui className={styles.text2}>
                <li>founder:</li>
                <li>house colors:</li>
                <li>Animal:</li>
                <li>element:</li>
                <li>traits:</li>
                <li>head:</li>
            </ui>
        </div>
        <div className="col" >
            <ui className={styles.text2}>
                <li>rowena ravenclaw</li>
                <li>blue and bronze</li>
                <li>eagle</li>
                <li>air</li>
                <li>wit, wisdom</li>
                <li>filius flitwick</li>
            </ui>
        </div>
    </div>

    </div>
</div>
<div className={styles.background}>
    <div className="container-fluid" className={styles.background}>
        <div className="row">
            <h4 className={styles.title2}>Notable members</h4>
            <div className="col">
                <div className={styles.picture}>
            <Image
            src={Luna} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}></Image>
            </div>
            <h4 className={styles.text}>Luna Lovegood</h4>
            </div>
            <div className="col">
            <Image
            src={Ollivander} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Garrick Ollivander</h4>
            </div>
            <div className="col">
            <Image
            src={Filius} class="img-fluid"  width="300px"
            height="200px" className={styles.picture}
            ></Image>
            <h4 className={styles.text}>Filius Flitwick</h4>
            </div>

        </div>

    </div>
    
</div>

<Footer/>
    </>
    );
};

export default Ravenclaw;