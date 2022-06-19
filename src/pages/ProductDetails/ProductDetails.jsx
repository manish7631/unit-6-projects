import React from 'react'
import styles from "./ProductDetails.module.css"
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from '../../components/Footer/Footer';



export const ProductDetails = () => {

    const { id } = useParams()


    const [list, setlist] = useState({})



    useEffect(() => {
        GetEvent()
    }, [])
    const GetEvent = () => {
        axios.get(`http://localhost:8080/Trending/${id}`).then(({ data }) => {
            setlist(data)
            // console.log(data)

        }).catch((err) => { console.log('error', err) })
    }
    return (
        <div>ProductDetails


            <div id={styles.Main_div}>


                <div style={{
                    display: "flex"
                }}>
                    <div className={styles.image_div}>
                        <h3>MODESENS / DESIGNERS /<span>{list.name}</span> / <span>{list.for}</span>/ <span>{list.type}    </span> </h3>
                        <div>       <img className={styles.img} src={list.img} alt="" /></div>
                    </div>
                    <div className={styles.text_div}>
                        <h3>{list.name}</h3>
                        <h3>{list.p1}</h3>
                        <div className={styles.Home_main_price}>

                            <div style={
                                {
                                    width: "90%",
                                    height: "50px",

                                    color: "red",
                                    display: "flex",
                                    fontSize: "20px",

                                    textAlign: "left",
                                    alignItems: "left",
                                    fontWeight: "500",

                                }
                            }>
                                <p>  $ </p><p>{list.latestPrice}</p> <p> - </p>   <p>  $     </p><p>{list.actualPrice}</p>
                            </div>

                            <div>

                            </div>

                        </div>

                        <div style={{
                            display: "flex",
                            width: "50%",
                            height: "50px",
                            paddingLeft: "0",
                            justifyContent: "space-between"
                        }}>
                            <Link to="www.google.com">
                                <h3>  Shop From  <span>{list.p2}</span></h3>
                            </Link>
                            <Link to="www.google.com"> <h3>Size Guide</h3></Link>
                        </div>

                        <div>
                            <a href="https://www.net-a-porter.com/en-us/shop/product/jacquemus/clothing/mini-dresses/limao-cutout-woven-halterneck-mini-dress/33258524072444936?cm_mmc=LinkshareUS-_-z1KL9yrNyf4-_-Custom-_-LinkBuilder&utm_source=rakuten&utm_medium=affiliation&utm_campaign=US_3261841&utm_content=US_ModeSens&utm_term=z1KL9yrNyf4-AgBWUUKZw2UZfgTC9PdN4w&ranMID=24449&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-AgBWUUKZw2UZfgTC9PdN4w&siteID=z1KL9yrNyf4-AgBWUUKZw2UZfgTC9PdN4w&linkshare_siteID=z1KL9yrNyf4-AgBWUUKZw2UZfgTC9PdN4w&linkshare_affiliate_mid=24449#modesens=1">  <button className={styles.btn}>SELECT STORE TO BUY</button> </a>
                            <h3>Earn up to 570 points from this purchase <span><a href="https://modesens.com/loyalty/">Learn More</a></span></h3>
                        </div>
                    </div>

                </div>
                <hr />
                <Footer />
            </div>

        </div>
    )
}
