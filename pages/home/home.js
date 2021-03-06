import Head from 'next/head'
import Header from "../../components/header/header"
import Image from 'next/image';
import Link from "next/link";
import Footer from "../../components/footer/footer"
import styles from "./home.module.css"
import "./home.module.css"
import Banner from "./banner.png"
import FlagsImg from "../slike/flags.png"
import Shop1 from  "../slike/shop/bellatrix_wand.png"
import Shop2 from"../slike/shop/ChocFrog.png"
import Shop3 from "../slike/shop/Marauders_Map.png"
import Shop4 from "../slike/shop/ron_sweater.png"

const Home = () => {
    return (
        <div className={styles.pagecontainer}>
            <Header/>

            <Head>
                <title>Home | Wizarding World of Harry Potter</title>
            </Head>

            <div className={styles.contentwrap}>
                <div className={styles.container}>
                    <Image src={Banner} alt="Banner" className={styles.banner} />
                    <div className={styles.align}>
                        <h1 className={styles.centered}>Start your Hogwarts adventure</h1>
                        <button className={styles.signup}>
                            <Link href="/login">Sign up</Link>
                        </button>
                    </div>
                </div>
                <div className={styles.houses}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <Image class="img-fluid" src={FlagsImg}></Image>
                            </div>
                            <div className='col-md'>
                                <div className={styles.align}>
                                    <h4 className={styles.flagsnaslov}>Hogwarts houses</h4>
                                    <button className={styles.discover}>
                                        <Link href="/hogwarts_houses">
                                            <h4 className={styles.bttn}>discover</h4>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.shop}>
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className={styles.shoptitle}>Shop in our store</h2>
                            <div className="col">
                                <Image className="img-fluid" src={Shop1} ></Image>
                                <h5>Bellatrix Lastrange???s wand $30.00</h5>
                            </div>
                            <div className="col ">
                                <Image className="img-fluid" src={Shop2} ></Image>
                                <h5>Chocolate Frog $10.00</h5>
                            </div>
                            <div className="col">
                                <Image className="img-fluid" src={Shop3} ></Image>
                                <h5>Marauder???s Map replica $20.00</h5>
                            </div>
                            <div className="col">
                                <Image className="img-fluid" src={Shop4} ></Image>
                                <h5>???R??? knitted sweater $50.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;