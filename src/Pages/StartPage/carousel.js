import React from "react";
import  { Carousel }  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../../assets/2022-03-28_20-15.png'
import img2 from './../../assets/2022-03-28_20-16.png'
import img3 from './../../assets/2022-03-29_17-43.png'

export default function CarouselComponent() {
    return (
        <div>
            <Carousel autoPlay infiniteLoop width="375px">
                <div>
                    <img src={img1} alt="img1"/>
                </div>
                <div>
                    <img src={img2} alt="img2"/>
                </div>
                <div>
                    <img src={img3} alt="img3"/>
                </div>
            </Carousel>
        </div>
    );
}