import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Hcrest from "../pages/slike/house crests/Hufflepuffcrest.jpg"
import Lupin from "./slike/notable members/RemusLupin.jpg"
import Tonks from "./slike/notable members/NymphadoraTonks.jpg"
import Sprout from "./slike/notable members/Sprout.jpg"
import styles from "./houses/hufflepuff.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Hufflepuff=()=>{
    return(
    <>
<Header/>
<div className={styles.background}>
    <div className="container-fluid">
        <h1 className={styles.title}>Hufflepuf</h1>
    <div className="row">
        <div className="col-4">
            <Image
            src={Hcrest}
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
                <li>HELGA HUFFLEPUFF</li>
                <li>YELLOW AND BLACK</li>
                <li>BADGER</li>
                <li>EARTH</li>
                <li>PATIENCE, FAIRNESS, LOYALTY</li>
                <li>POMONA SPROUT</li>
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
            src={Lupin} class="img-fluid"></Image>
            </div>
            <h4 className={styles.text}>REMUS LUPIN</h4>
            </div>
            <div className="col">
            <Image
            src={Tonks} class="img-fluid" 
            ></Image>
            <h4 className={styles.text}>NYMPHADORA TONKS</h4>
            </div>
            <div className="col">
            <Image
            src={Sprout} class="img-fluid" 
            ></Image>
            <h4 className={styles.text}>POMONA SPROUT</h4>
            </div>

        </div>

    </div>

</div>

<Footer/>
    </>
    );
};

export default Hufflepuff;