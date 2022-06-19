import React from 'react'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { Link } from "react-router-dom"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from "../HomeFirstProduct/HomeFirstProduct1.module.css"
export const HomeThirdProduct = () => {
    const [watchData, setWatchData] = useState([])
    let [count, SetCount] = useState(0)
    const [page, setPage] = useState(1)
    useEffect(() => {
        getData()
    }, [page])

    const getData = async () => {
        axios.get(`http://localhost:8080/Community_Posts?_page=${page}&_limit=4`).then(({ data }) => {
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


                                        <div className={styles.Home_watch_textHome_main_name}>
                                            <p>{e.name}</p>
                                            <p>{e.name1}</p>
                                            <button className={styles.btn}>Shop Now</button>
                                        </div>


                                    </div>
                                </div></Link>
                        )
                    })
                }
            </div>


            <button style={{
                border: "1px solid red",
                position: "absolute",
                width: "40px",
                height: "40px",
                top: "430%",
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
                    top: "430%",
                    left: "90%",
                    zIndex: "1",
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "transparent",




                }
            } onClick={() => {
                setPage(page + 1)
            }}><ArrowForwardIosIcon /></button>

        </>

    )
}
