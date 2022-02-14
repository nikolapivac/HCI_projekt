import Header from "../components/header/header"
import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import Footer from "../components/footer/footer"
import Gryffindor from "./slike/house crests/gryffindor.jpg"
import Slytherin from "./slike/house crests/slytherin.jpg"
import Ravenclaw from "./slike/house crests/rawenclaw.jpg"
import Hufflepuf from "./slike/house crests/hufflepuf.jpg"
import styles from "./houses/houses.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const HousesIndex=()=>{
    return(
        <>
<Header/>
<Head>
    <title>Hogwarts Houses</title>
</Head>
<div className={styles.background}>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Image src={Gryffindor} className="img-resposive" class={styles.pic}></Image>
               <a className={styles.text} href="/gryffindor"><h2>Gryffindor</h2></a>
               </div>
            <div className="col">
                <Image src={Ravenclaw} className="img-resposive" class={styles.pic}></Image>
               <a className={styles.text} href="/ravenclaw"><h2>Ravenclaw</h2></a>

            </div>
            <div className="col">
                <Image src={Hufflepuf} className="img-resposive" class={styles.pic}></Image>
                <a className={styles.text} href="/hufflepuff"><h2>Hufflepuff</h2></a>

            </div>
            <div className="col">
                <Image src={Slytherin}className="img-resposive" class={styles.pic}></Image>
                <a className={styles.text} href="/slytherin"><h2>Slytherin</h2></a>

            </div>

        </div>

    </div>

</div>
<Footer/>
        </>
    );
};

export default HousesIndex;