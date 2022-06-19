import React from 'react'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { Link } from "react-router-dom"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import styles from "./HomeSecondProduct.module.css"
export const HomeProductSecond = () => {
    const [watchData, setWatchData] = useState([])
    let [count, SetCount] = useState(0)
    const [page, setPage] = useState(1)
    useEffect(() => {
        getData()
    }, [count, page])

    const getData = async () => {
        axios.get(`http://localhost:8080/Trending?_page=${page}&_limit=4`).then(({ data }) => {
            setWatchData(data)
            //  console.log("data", data)
        })
            .catch((err) => { console.log("error", err) })
    }






    return (
        <>
            <div id={styles.Home_main_first_product}>


                {
                    watchData.map((e, i) => {
                        return (
                            <Link to={`/product/${e.id}`} key={uuidv4()}>
                                <div key={uuidv4()} className={styles.Home_main_first_product_watch} >
                                    <img style={{
                                        borderRadius: "10px"
                                    }} src={e.img} alt="" />

                                    <div className={styles.Home_watch_text}>


                                        <div className={styles.Home_main_name}>
                                            <h1>{e.name}</h1>
                                            <p style={{
                                                fontSize: "18px"
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
                                                            margin: "5px",
                                                            fontWeight: "500",
                                                            padding: "10px",
                                                        }
                                                    }> <h3>  $ </h3><h3>{e.latestPrice}</h3> <h3> - </h3>   <h3>  $ </h3><h3>{e.actualPrice}</h3></div>

                                                <h5 style={{
                                                    fontSize: "18px"
                                                }}>{e.p2}</h5>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

                <button style={{
                    border: "1px solid red",
                    position: "absolute",
                    width: "40px",
                    height: "40px",
                    top: "320%",
                    left: "6%",
                    zIndex: "1",
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "transparent",

                }} onClick={() => {
                    setPage(page - 1)
                }}><ArrowBackIosIcon /></button>
                <button style={
                    {
                        border: "1px solid red",
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: "320%",
                        left: "90%",
                        zIndex: "1",
                        borderRadius: "50%",
                        padding: "5px",
                        backgroundColor: "transparent",




                    }
                } onClick={() => {
                    setPage(page + 1)
                }}><ArrowForwardIosIcon /></button>

            </div>


        </>

    )
}
