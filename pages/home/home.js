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
<<<<<<< HEAD
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
    <div className='main-footer color'>
               <div className='container-fluid'>
                   <div className='row'>
                       {/* {column0} */}
                       <div className='col-4'>
                           <Image class="img-responsive" src={FlagsImg}></Image>
                       </div>
                       {/* {column1} */}
                       <div className='col'>
                           <div className={styles.align}>
                           <h4 className={styles.flagsnaslov}>Hogwarts houses</h4>
                            <button className={styles.discover}>DISCOVER</button>
                           </div>
                       </div>
                       </div>
                       </div>
                       </div>
    <div className="shop color2">
        <div className="container-fluid">
            <div className="row">
                <h4 className={styles.flagstext}>Shop in our store</h4>
                <div className="col">
                    <Image
                    className="img-responsive"
                    src={Shop1}></Image>
                    <h4 className={styles.flagstext}>Bellatrix Lastrange’s wand
$30.00</h4>
                </div>
                <div className="col">
                    <Image
                    className="img-responsive"
                    src={Shop2}></Image>
                    <h4 className={styles.flagstext}>Chocolate Frog
$10.00</h4>
                </div>
                <div className="col">
                    <Image
                    className="img-responsive"
                    src={Shop3}></Image>
                    <h4 className={styles.flagstext}>Marauder’s Map replica
$20.00</h4>
                </div>
                <div className="col">
                    <Image
                    className="img-responsive"
                    src={Shop4}></Image>
                    <h4 className={styles.flagstext}>“R” knitted sweater
$50.00</h4>
                </div>

            </div>
        </div>

    </div>
    </div>
    <Footer/>
    </div>
=======
        <div className={styles.pagecontainer}>
            <Header/>
            <div className={styles.contentwrap}>
                <div class={styles.container}>
                    <Image src={Banner}
                    alt="Banner"
                    class={styles.banner}/>
                        <div class={styles.centered}>Start your Hogwarts adventure</div>
                        {/* <button className={styles.signup}>SIGN UP</button> */}
                </div>
                <div className='main-footer color'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {/* {column0} */}
                                <div className='col-5'>
                                    <Image class="img-responsive" src={FlagsImg}></Image>
                                </div>
                                {/* {column1} */}
                                <div className='col '>
                                    <h4 className={styles.container}>Hogwarts houses</h4>
                                        <button className={styles.discover}>DISCOVER</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
>>>>>>> dc947ce6bae711eb945514f53033caa0735c7521
    );
};

export default Home;