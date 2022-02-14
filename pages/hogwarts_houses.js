import Header from "../components/header/header";
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
<div className={styles.background}>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Image src={Gryffindor} className="img-resposive" class={styles.pic}></Image>
               <Link href="/gryffindor"><h4 className={styles.text}>Gryffindor</h4></Link>
               </div>
            <div className="col">
                <Image src={Ravenclaw} className="img-resposive" class={styles.pic}></Image>
               <Link href="/ravenclaw"><h4 className={styles.text}>Ravenclaw</h4></Link>

            </div>
            <div className="col">
                <Image src={Hufflepuf} className="img-resposive" class={styles.pic}></Image>
                <Link href="/hufflepuff"><h4 className={styles.text}>Hufflepuff</h4></Link>

            </div>
            <div className="col">
                <Image src={Slytherin}className="img-resposive" class={styles.pic}></Image>
               <Link href="/slytherin"><h4 className={styles.text}>Slytherin</h4></Link>
>
            </div>

        </div>

    </div>

</div>
<Footer/>
        </>
    );
};

export default HousesIndex;