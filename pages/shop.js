import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import data from '../utils/data'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Banner from '../public/images/shop/banner.jpg'

export default function Shop(){
    return(
        <div className="bg-hp_blue">
            <Head>
                <title>Shop</title>
            </Head>
            <Header />
            <Image src={Banner}/>
            <div className="text-6xl text-text_yellow font-HarryP">Get the new Harry Potter merchandise</div>
            <div >
                <Grid container spacing={3}>
                    {data.products.map((product)=>(
                        <Grid item md={4} key={product.name}>
                            <Card>
                                <CardActionArea style={{backgroundColor: "#0C1631"}}>
                                    <CardMedia component="img" image={product.image} title={product.name}>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography className="text-text_yellow" style={{fontFamily: "Wizarding"}}>{product.name}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{backgroundColor: "#0C1631"}}>
                                    <Typography className="text-text_yellow" style={{fontFamily: "Wizarding"}}>{product.price}</Typography>
                                    <Button size="small" color="primary" style={{color:"#D3BA32", fontFamily: "Wizarding"}}>Add To Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    )
}