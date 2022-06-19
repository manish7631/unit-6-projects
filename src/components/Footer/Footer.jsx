import React from 'react'
import styles from "./Fotter.module.css"
export const Footer = () => {
    return (
        <div>
            <div>
                <div className={styles.secondLast}>
                    <div className={styles.secondLast_Div}>
                        <div className={styles.fotterDiv}>
                            <h2>CUSTOMER CARE</h2>
                            <p>Shopper Protection</p>
                            <p>Loyalty Program</p>
                            <p>Help Center</p>
                            <p>Size Guides</p>
                            <p>Contact Us / Feedback</p>
                            <p>Shipping / Returns</p>
                        </div>

                        <div className={styles.fotterDiv}>
                            <h2>LEGAL</h2>
                            <p>Terms Of USe</p>
                            <p>Disclosure</p>
                            <p>Privacy Policy</p>
                            <p>Community Guidelines</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={styles.secondLast_Div}>
                        <div className={styles.fotterDiv}>
                            <h2>INFORMATION</h2>
                            <p>About Us</p>
                            <p>Influencer Program</p>
                            <p>Partner Stores</p>
                            <p>Sitemap</p>
                        </div>

                        <div className={styles.fotterDiv}>
                            <h2>CONNECT WITH US</h2>
                            <a href="https://apps.apple.com/app/id976201094">
                                <button className={styles.button}>  <img className={styles.buttonimage} src="https://cdn.modesens.com/static/img/20190107Mobileios.svg" alt="" /></button></a>
                            <br />
                            <a href="https://play.google.com/store/apps/details?id=com.modesens.androidapp">
                                <button className={styles.button}> <img className={styles.buttonimage} src="https://cdn.modesens.com/static/img/20190107Mobileandroid.svg" alt="" /></button></a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
