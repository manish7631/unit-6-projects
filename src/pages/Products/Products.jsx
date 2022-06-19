import React from 'react'
import styles from "./products.module.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"
export const Products = () => {


    const [watchData, setWatchData] = useState([])

    const [page, setPage] = useState(1)
    const [q, setQ] = useState("woman")
    useEffect(() => {
        getData()
    }, [page, q])

    const getData = async () => {
        axios.get(`http://localhost:8080/womanProduct?_page=${page}&_limit=8`).then(({ data }) => {
            setWatchData(data)
            console.log("data", data)
        })
            .catch((err) => { console.log("error", err) })
    }








    return (
        <div>Products

            <div>
                <div className={styles.productpage}>
                    <div className={styles.btnp}>

                        <button id="get_btn" onClick={() => {



                        }}>Get</button>



                    </div>
                    <div id={styles.product_info}>
                        {watchData.map((e) => {

                            return (
                                <Link to={`/product/${e.id}`} key={uuidv4()}>
                                    <div>
                                        <div className={styles.div1}>
                                            <img className={styles.imagetag} src={e.img} alt="" />



                                            <div className={styles.Home_watch_text}>

                                                <button className={styles.HoverButton}>View Now</button>
                                                <div className={styles.Home_main_name}>
                                                    <h2>{e.name}</h2>
                                                    <p style={{
                                                        fontSize: "14px"
                                                    }}>{e.p1}</p>


                                                </div>

                                                <div className={styles.Home_main_price}>
                                                    <div style={{
                                                        paddingTop: "0",
                                                        marginTop: "0"
                                                    }}>
                                                        <div
                                                            style={
                                                                {
                                                                    color: "red",
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    marginLeft: "5px",
                                                                    textAlign: "center",
                                                                    alignItems: "center",
                                                                    fontWeight: "500",
                                                                    padding: "0px",
                                                                }
                                                            }> <h3>  $ </h3><h3>{e.latestPrice}</h3> <h3> - </h3>   <h3>  $ </h3><h3>{e.actualPrice}</h3></div>

                                                        <p style={{
                                                            fontSize: "18px"
                                                        }}>{e.p2}</p>

                                                    </div>
                                                    <div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
