import Header from "../components/header/header"
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Gryffindor from "./slike/house crests/gryffindor.jpg"
import Slytherin from "./slike/house crests/slytherin.jpg"
import Rawenclaw from "./slike/house crests/rawenclaw.jpg"
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
                <h4 className={styles.text}>Gryfffindor</h4>

            </div>
            <div className="col">
                <Image src={Rawenclaw} className="img-resposive" class={styles.pic}></Image>
                <h4 className={styles.text}>Rawenclaw</h4>

            </div>
            <div className="col">
                <Image src={Hufflepuf} className="img-resposive" class={styles.pic}></Image>
                <h4 className={styles.text}>Hufflepuf</h4>

            </div>
            <div className="col">
                <Image src={Slytherin}className="img-resposive" class={styles.pic}></Image>
                <h4 className={styles.text}>Slytherin</h4>

            </div>

        </div>

    </div>

</div>
<Footer/>
        </>
    );
};

export default HousesIndex;