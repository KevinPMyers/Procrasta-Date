import React from 'react';
import { Carousel, Button } from 'antd';
import CarouselOne from '../../assets/Carousel1(2).png'
import CarouselTwo from '../../assets/Carousel2.png'


function FoodCarousel() {

    const contentStyle = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

    };

    function onChange(a, b, c) {
        console.log(a, b, c);
    }


    return (
        <div >
            <Carousel afterChange={onChange} autoplay="true">
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