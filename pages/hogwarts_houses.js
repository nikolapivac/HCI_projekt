import Header from "../components/header/header"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Footer from "../components/footer/footer"
import Gryffindor from "./slike/house crests/gryffindor.jpg"
import Slytherin from "./slike/house crests/slytherin.jpg"
import Ravenclaw from "./slike/house crests/rawenclaw.jpg"
import Hufflepuf from "./slike/house crests/hufflepuf.jpg"
import styles from "./houses/houses.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

const HousesIndex = () => {
    return(
        <>
            <Header/>

            <Head>
                <title>Hogwarts Houses</title>
            </Head>

            <div className={styles.background}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Link href="/gryffindor" ><Image src={Gryffindor}  className={styles.pic} ></Image></Link>
                            <Link href="/gryffindor"><h2 className={styles.text}>Gryffindor</h2></Link>
                        </div>
                        <div className="col-md-3">
                            <Link href="/ravenclaw"><Image src={Ravenclaw}  className={styles.pic}></Image></Link>
                        <Link  href="/ravenclaw"><h2 className={styles.text}>Ravenclaw</h2></Link>

                        </div>
                        <div className="col-md-3">
                            <Link href="/hufflepuff"><Image src={Hufflepuf}  className={styles.pic}></Image></Link>
                            <Link  href="/hufflepuff"><h2 className={styles.text}>Hufflepuff</h2></Link>

                        </div>
                        <div className="col-md-3">
                            <Link href="/slytherin"><Image src={Slytherin}className={styles.pic}></Image></Link>
                            <Link  href="/slytherin"><h2 className={styles.text}>Slytherin</h2></Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default HousesIndex;