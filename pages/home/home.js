import Header from "../../components/header/header"
import Image from 'next/image';
import Footer from "../../components/footer/footer"
import styles from "./home.module.css"
import "./home.module.css"
import Banner from "./banner.png"
import FlagsImg from "../slike/flags.png"

const Home =()=>{
    return (
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
    );
};

export default Home;