import Categories from '../utils/categories'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Banner from '../public/images/shop/banner.jpg'
import Cart from '../public/images/shop/carticon.png'

export default function Shop(){
    
    const [data,setData]=useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData)=>{
            return curData.category===catItem
        });
        setData(result);
    }
    return(
        <div className="bg-hp_blue">
            <Head>
                <title>Shop</title>
            </Head>
            <Header />
            <Image src={Banner}/>
            <div className="text-6xl text-text_yellow font-HarryP">Get the new Harry Potter merchandise</div>

            <div className="w-64 h-96 bg-text_yellow text-hp_blue font-Wizarding text-xl">
                <h1 className="p-4">Products</h1>
                
                <div className="flex flex-col">
                    <button className="mb-3" onClick={()=>filterResult('Clothes')}>Clothes</button>
                    <button className="mb-3" onClick={()=>filterResult('Sweets')}>Sweets</button>
                    <button className="mb-3" onClick={()=>filterResult('Props')}>Props</button>
                    <button className="mb-3" onClick={()=>filterResult('Wands')}>Wands</button>
                </div>
                <div className="w-6 h-6">
                    <Image src={Cart}/>
                    <button className="border-2 border-hp_blue rounded-md text-justify">Go To Cart</button>
                </div>
                
            </div>

            <div>
                {data.map((product)=>(
                    <div className="w-48 h-48 bg-hp_blue text-text_yellow font-Wizarding">
                        <img src={product.image}/>
                        <div>
                            <h2>{product.name}</h2>
                            <h1>{product.price}</h1>
                        </div>
                        <button className="p-1 rounded-md bg-text_yellow text-hp_blue">Add To Cart</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )

    

}