import Categories from '../utils/categories'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Banner from '../public/images/shop/banner.jpg'
import Cart from '../public/images/shop/carticon.png'
import styles from "/styles/shop.module.css"
import "/styles/shop.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Shop(){
    
    const [data,setData]=useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData)=>{
            return curData.category===catItem
        });
        setData(result);
    }
    return(
        <div>
        <div className="bg-hp_blue">
            <Head>
                <title>Shop</title>
            </Head>
            <Header />
            <Image src={Banner}/>
            <div className="text-6xl text-text_yellow font-HarryP">Get the new Harry Potter merchandise</div>
            <div className='container-fluid g-0'>
            <div className='row'>
            <div className='col-md-3'>
            <div className={styles.menu_container}>
                <h1 className={styles.menu_title}>Products</h1>
                
                <div className={styles.menu_buttons_container}>
                    <button className={styles.menu_buttons} onClick={()=>filterResult('Clothes')}>Clothes</button>
                    <button className={styles.menu_buttons} onClick={()=>filterResult('Sweets')}>Sweets</button>
                    <button className={styles.menu_buttons} onClick={()=>filterResult('Props')}>Props</button>
                    <button className={styles.menu_buttons} onClick={()=>filterResult('Wands')}>Wands</button>
                    <span className={styles.allbutton_container}>
                        <button className={styles.menu_buttons} onClick={()=>setData(Categories)}>All products</button>
                    </span>
                </div>
                <div className="w-6 h-6">
                    <Image src={Cart} />
                    <button className={styles.gtc_button}>Go To Cart</button>
                </div>
                
            </div>

            </div>
            <div className='col-md-9'>
            <div>
                <div className='container-fluid '>
                    <div className='row '>
                {data.map((product)=>(
                    // <div className={styles.product_grid}>
                    <>
                        <div className='col-lg-4 col-md-6  '>  
                        <div className="row">
                        <div className="row">
                        <div className={styles.picture}>
                            <img src={product.image} class="img-fluid" />
                        </div>
                        </div>
                        <div className={styles.box}>
                        <div className='row'>
                            <h4 className={styles.producttext}>{product.name}</h4>
                        </div>
                        </div>
                        <div className="row">
                            <h4 className={styles.producttext}>{product.price}</h4>
                        <button className={styles.atc_button}>Add To Cart</button>
                        </div>
                        </div>
                    
                        </div> 
                        </>
                ))}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                
            <Footer />
            </div>
   </div>
    );
}