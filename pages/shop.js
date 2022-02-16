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
            <div className='col-md-3 col-sm-4'>
            <div className="bg-text_yellow text-hp_blue font-Wizarding text-xl mx-0">
                <h1 className="p-4">Products</h1>
                
                <div className="flex flex-col">
                    <button className="mb-3 hover:text-hov_yellow" onClick={()=>filterResult('Clothes')}>Clothes</button>
                    <button className="mb-3 hover:text-hov_yellow" onClick={()=>filterResult('Sweets')}>Sweets</button>
                    <button className="mb-3 hover:text-hov_yellow" onClick={()=>filterResult('Props')}>Props</button>
                    <button className="mb-3 hover:text-hov_yellow" onClick={()=>filterResult('Wands')}>Wands</button>
                    <span className="p-3 ml-10">
                        <button className="mb-3 hover:text-hov_yellow" onClick={()=>setData(Categories)}>All products</button>
                    </span>
                </div>
                <div className="w-6 h-6">
                    <Image src={Cart} />
                    <button className="border-2 border-hp_blue rounded-md text-justify hover:text-hov_yellow">Go To Cart</button>
                </div>
                
            </div>

            </div>
            <div className='col'>
            <div>
                <div className='container-fluid '>
                    <div className='row '>
                {data.map((product)=>(
                    // <div className={styles.product_grid}>
                    <>
                        <div class='col-lg-4 col-sm-6  pb-4'>  
                        <div class="row">
                        <div class="row">
                        <div className={styles.picture}>
                            <img src={product.image} class="img-fluid" />
                        </div>
                        </div>
                        <div className={styles.box}>
                        <div class='row'>
                            <h4 className={styles.producttext}>{product.name}</h4>
                        </div>
                        </div>
                        <div class="row">
                            <h4 className={styles.producttext}>{product.price}</h4>
                        <button className="p-1 rounded-md bg-text_yellow text-hp_blue">Add To Cart</button>
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