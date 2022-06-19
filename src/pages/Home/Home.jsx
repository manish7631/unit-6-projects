import React from 'react'
import FeaturedSlider from '../../components/AllSlider/featuredSlider/featuredSlider'
import PauseOnHover from '../../components/AllSlider/firstSlider'
import { Footer } from '../../components/Footer/Footer'
import { HomeFirstProduct1 } from '../HomeProduct/HomeFirstProduct/HomeFirstProduct'
import { HomeProductSecond } from '../HomeProduct/HomesecondProduct/HomeSecondProduct'
import { HomeThirdProduct } from '../HomeProduct/HomeThirdProduct/HomeThirdProduct'
import { Link } from "react-router-dom"

import styles from "./Home.module.css"
export const Home = () => {
    return (
        <div>
            <PauseOnHover />

            {/* ------------------2nd_div_featuredBrandStart------------------------ */}

            <div id={styles.featuredBrand}>
                <h1>Featured Brands</h1>
                <div className={styles.FeaturedBrands_slider}>
                    <FeaturedSlider />
                </div>
            </div>

            {/* ---------------3rd_div_Special_Offers-------------------------------- */}
            <div id={styles.Special_Offers}>
                <h1>Special Offers</h1>

                <div>
                    <HomeFirstProduct1 />
                    <Link to="product">  <button style={{
                        marginTop: "10px"
                    }} className={styles.btn}>View More</button></Link>
                </div>

            </div>
            {/* -------------------4th_div_Trending_Now------------------------------------- */}

            <div id={styles.Trending_Now}>
                <h1>Trending Now</h1>
                <div>
                    <HomeProductSecond />
                    <Link to="product">  <button className={styles.btn}>Shop More</button>
                    </Link>
                </div>
            </div>
            {/* ------------5th_div_Community_Posts-------------------------------- */}
            <div id={styles.Special_Offers}>
                <h1>Community Posts</h1>

                <div>
                    <HomeThirdProduct />
                    <Link to="product"><button className={styles.btn}>View More</button>
                    </Link>
                </div>

            </div>

            {/* ------------2nd_last_div-------------------------------- */}
            <div id={styles.secondLastMain}>


                <div>
                    <div className={styles.secondLast}>
                        <div className={styles.secondLast_Div}>
                            <h3>Download the
                                <br />
                                ModeSens App</h3>

                            <p>A seamless experience that takes your style
                                <br />
                                to the next level.</p>
                            <a href="https://play.google.com/store/apps/details?id=com.modesens.androidapp">
                                <button className={styles.btn}>Download Now</button></a>
                            <div>
                                <img style={{
                                    width: "60%",
                                    height: "700px"
                                }} src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png" alt="" /></div>
                        </div>
                        <div className={styles.secondLast_Div}>
                            <h3>Install the ModeSens
                                <br />
                                Browser Extension</h3>

                            <p> Get timely, accurate product information
                                <br />
                                every time you browse.</p>
                            <a href="https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/">
                                <button className={styles.btn}>Install Now</button></a>
                            <div>
                                <img style={{
                                    width: "80%",
                                    height: "700px"
                                }} src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" /></div>

                        </div>

                    </div>
                    <p>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</p>
                </div>

            </div>

            {/* ----------------Fotter----------------------------- */}
            <hr />
            <div id={styles.fotter}>
                <Footer />
            </div>


            {/* ----------------Fotter_last----------------------------- */}

            <div id={styles.fotterLast}>
                <div className={styles.fotterLastDiv}>
                    <div>
                        <img style={{
                            width: "100px",
                            height: "70px"
                        }} src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" />
                    </div>
                    <div style={{
                        width: "30px",
                        height: "30px",
                        border: "1px solid black",
                        borderRadius: "50%",
                        margin: "5px"
                    }}>c</div>
                    <div>2022, ModeSens Inc</div>
                </div>



                <div className={styles.SocialMediaDiv}>
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/20181008footer-pit.svg" alt="" />
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/20181008footer-tt.svg" alt="" />
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/footer-p.svg" alt="" />
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/footer-fb.svg" alt="" />
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/footer-wb.svg" alt="" />
                    <img className={styles.SocialMedia} src="https://cdn.modesens.com/static/img/footer-wx.svg" alt="" />
                </div>



            </div>



        </div>
    )
}
