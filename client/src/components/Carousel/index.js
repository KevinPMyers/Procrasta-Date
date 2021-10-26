import React from 'react';
import { Carousel, Button } from 'antd';
import CarouselOne from '../../assets/Carousel1.gif'
import CarouselTwo from '../../assets/Carousel2.gif'


function FoodCarousel() {

    const contentStyle = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

    };


    return (
        <div >
            <Carousel dotsClass="dots" autoplay="true">
                <div>
                    <img className="carousel" src={CarouselOne}></img>

                </div>
                <div>
                    <img className="carousel" src={CarouselTwo}></img>
                </div>


            </Carousel>,

        </div>
    )
}

export default FoodCarousel