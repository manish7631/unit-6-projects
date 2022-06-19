import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class PauseOnHover extends Component {

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
                        top: "30%",
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
                        top: "30%",
                        left: "90%",
                        zIndex: "1",
                        borderRadius: "50%",
                        padding: "5px",
                        backgroundColor: "transparent",




                    }
                }>  <ArrowForwardIosIcon /></button>



                <Slider ref={c => (this.slider = c)} {...settings}>

                    <div key={1}>

                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://modesens.com/banner/12512/getimg/?img=%2Fbanner%2F20220617-modesens-Chicos-1140x400-EN.jpg" alt="" />

                    </div>
                    <div key={2}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220613-modesens-AERYNE-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={3}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220614-modesens-Monnalisa-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={4}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220612-modesens-TheSportsEdit-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={5}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220613-modesens-SummerFashionGuide-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={6}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://modesens.com/banner/12480/getimg/?img=%2Fbanner%2F20220615-modesens-Vestiaire-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={7}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220516-modesens-SS22-SALE-1140x400-EN.jpg" alt="" />
                    </div>
                    <div key={8}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220614-modesens-saledresses-1140x400-F.jpg" alt="" />
                    </div>
                    <div key={9}>
                        <img style={{
                            width: "100%",
                            height: "420px",
                        }} src="https://cdn.modesens.com/banner/20220613-modesens-FSaintLaurent-1140x400-F.jpg" alt="" />
                    </div>


                </Slider>
            </div>
        );
    }
}


