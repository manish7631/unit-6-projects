import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class FeaturedSlider extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };
        return (
            <div style={{
                width: "100%",
                height: "420px",
                // border:"1px solid red"
            }}>
                <button onClick={this.previous} style={
                    {
                        border: "1px solid red",
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: "108%",
                        left: "6%",
                        zIndex: "1",
                        borderRadius: "50%",
                        padding: "5px",
                        backgroundColor: "transparent",





                    }
                }>  <ArrowBackIosIcon /></button>

                <button onClick={this.next} style={
                    {
                        border: "1px solid red",
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: "108%",
                        left: "90%",
                        zIndex: "1",
                        borderRadius: "50%",
                        padding: "5px",
                        backgroundColor: "transparent",




                    }
                }>  <ArrowForwardIosIcon /></button>



                <Slider ref={c => (this.slider = c)} {...settings}>

                    <div key={1}>
                        <p>  Get the look you want. Choose from over 12,000+ brands and designers.</p>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-around"
                        }} >
                            <div style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}> <div style={{
                                width: '100%',
                                height: "100px",
                                color: "white",
                            }}>GUCCI</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>VERSACE</div>
                            </div>
                            <div style={{
                                backgroundColor: "pink",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>PRADA</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>BALENCIAGA</div>
                            </div>
                            <div style={{
                                backgroundColor: "black",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>SAINT LAURENT</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>GIVENCHY</div>
                            </div>
                            <div style={{
                                backgroundColor: "grey",
                                width: "200px",
                                height: "200px",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px"
                                }}>BOTTEGA VENETA</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>LOEWE</div>
                            </div>
                            <div style={{
                                backgroundColor: "blue",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>BURBERRY</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>VERSACE</div>
                            </div>
                            <div style={{
                                backgroundColor: "green",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>FENDI</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>VALENTINO</div>
                            </div>

                        </div>

                    </div>



                    <div key={2}>
                        <p>Compare across our 500+ partner stores to find the products you want at the best price.
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: "space-around"
                        }} >
                            <div style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}> <div style={{
                                width: '100%',
                                height: "100px",
                                color: "white",
                            }}>NET-A-PORTER</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>FWRD</div>
                            </div>
                            <div style={{
                                backgroundColor: "pink",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>MR PORTER</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>24S-com</div>
                            </div>
                            <div style={{
                                backgroundColor: "black",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>FARFETCH</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>SSENSE</div>
                            </div>
                            <div style={{
                                backgroundColor: "grey",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>MATCHESFASHION</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>NORDSTROM</div>
                            </div>
                            <div style={{
                                backgroundColor: "blue",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>LUISAVIAROMA</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>HARVEY NICHOLS</div>
                            </div>
                            <div style={{
                                backgroundColor: "green",
                                width: "200px",
                                height: "200px",
                                color: "white",
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>SHOPBOP</div>
                                <div style={{
                                    width: '100%',
                                    height: "100px",
                                    color: "white",
                                }}>VALENTINO</div>
                            </div>

                        </div>

                    </div>



                </Slider>
            </div>
        );
    }
}


