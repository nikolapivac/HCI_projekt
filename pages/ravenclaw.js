import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Rcrest from "../pages/slike/house crests/RavenclawCrest.jpg"
import Luna from "./slike/notable members/LunaLovegood.jpg"
import Ollivander from "./slike/notable members/ollivander.jpg"
import Filius from "./slike/notable members/Flitwick.jpg"
import styles from "./houses/ravenclaw.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Ravenclaw=()=>{
    return(
    <>
<Header/>
<div className={styles.background}>
    <div className="container-fluid">
        <h1 className={styles.title}>Ravenclaw</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Rcrest}
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
                <li>ROWENA RAVENCLAW</li>
                <li>BLUE AND BRONZE</li>
                <li>EAGLE</li>
                <li>AIR</li>
                <li>WIT, LEARNING, WISDOM</li>
                <li>FILIUS FLITWICK</li>
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
            src={Luna} class="img-fluid"></Image>
            </div>
            <h4 className={styles.text}>LUNA LOVEGOOD</h4>
            </div>
            <div className="col">
            <Image
            src={Ollivander} class="img-fluid" 
            ></Image>
            <h4 className={styles.text}>Garrick Ollivander</h4>
            </div>
            <div className="col">
            <Image
            src={Filius} class="img-fluid" 
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