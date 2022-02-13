import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Gcrest from "../pages/slike/house crests/gryffindorcrest.jpg"
import Trio from "./slike/notable members/trio.jpg"
import Minerva from "./slike/notable members/Minerva_McGonagall_HP4.jpg"
import Albus from "./slike/notable members/albusdumbledore.jpg"
import styles from "./houses/gryffindor.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Gryffindor=()=>{
    return(
    <>
<Header/>
<div className={styles.background}>
    <div className="container-fluid">
        <h1 className={styles.title}>Gryffindor</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Gcrest}
            class="img-fluid"
            ></Image>
        </div>
        <div className="col-2">
            <ui className={styles.text2}>
                <li>FOUNDER:</li>
                <li>HOUSE COLORS:</li>
                <li>ANIMAL:</li>
                <li>ELEMENT:</li>
                <li>TRAITS:</li>
                <li>HEAD:</li>
            </ui>
        </div>
        <div className="col" >
            <ui className={styles.text2}>
                <li>CEDRIC GRYFFINDOR</li>
                <li>SCARLET AND GOLD</li>
                <li>LION</li>
                <li>FIRE</li>
                <li>COURAGE, BRAVERY, DETERMINATION</li>
                <li>MINERVA MCGONAGALL</li>
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
            src={Trio} class="img-fluid"></Image>
            </div>
            <h4 className={styles.text}>Harry Potter, Hermione Granger and Ron Weasley</h4>
            </div>
            <div className="col">
            <Image
            src={Albus} class="img-fluid" 
            ></Image>
            <h4 className={styles.text}>Albus Dumbledore</h4>
            </div>
            <div className="col">
            <Image
            src={Minerva} class="img-fluid" 
            ></Image>
            <h4 className={styles.text}>Minerva McGonagall</h4>
            </div>

        </div>

    </div>

</div>

<Footer/>
    </>
    );
};

export default Gryffindor;