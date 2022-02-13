import Header from "../../components/header/header"
import Image from 'next/image';
import Footer from "../../components/footer/footer"
import styles from "./home.module.css"
import "./home.module.css"
import Banner from "./banner.png"
import FlagsImg from "../slike/flags.png"
import Shop1 from  "../slike/shop/bellatrix_wand.png"
import Shop2 from"../slike/shop/ChocFrog.png"
import Shop3 from "../slike/shop/Marauders_Map.png"
import Shop4 from "../slike/shop/ron_sweater.png"

const Home =()=>{
    return (
    <div className={styles.pagecontainer}>
    <Header/>
    <div className={styles.contentwrap}>
    <div class={styles.container}>
    <Image src={Banner}
    alt="Banner"
    class={styles.banner}/>
    <div className={styles.align}>
    <div class={styles.centered}>Start your Hogwarts adventure</div>
    {/* <button className={styles.signup}>SIGN UP</button> */}
    </div>
    </div>
    <div className={styles.houses}>
               <div className='container-fluid'>
                   <div className='row'>
                       {/* {column0} */}
                       <div className='col-5'>
                           <Image class="img-fluid" src={FlagsImg}></Image>
                       </div>
                       {/* {column1} */}
                       <div className='col'>
                           <div className={styles.align}>
                           <h4 className={styles.flagsnaslov}>Hogwarts houses</h4>
                            <button className={styles.discover}>discover</button>
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
                    <Image
                    className="img-fluid"
                    src={Shop1}></Image>
                    <h5>Bellatrix Lastrange’s wand
$30.00</h5>
                </div>
                <div className="col">
                    <Image
                    className="img-fluid"
                    src={Shop2}></Image>
                    <h5>Chocolate Frog
$10.00</h5>
                </div>
                <div className="col">
                    <Image
                    className="img-fluid"
                    src={Shop3}></Image>
                    <h5>Marauder’s Map replica
$20.00</h5>
                </div>
                <div className="col">
                    <Image
                    className="img-fluid"
                    src={Shop4}></Image>
                    <h5>“R” knitted sweater
$50.00</h5>
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