import { React, useState } from 'react';
import { Button, Radio } from 'antd';
import Fork from '../assets/ForkedUp.png'
import FoodCarousel from '../components/Carousel'

function LandingPage() {


    return (

        <div className="LandingPage">
            <img className="forked-up" src={Fork}></img>
            <p className="intro"> We got you! Sign in and follow the steps to get things cookin!</p>
            <FoodCarousel />
            <Button type="submit" className="LandingButton" href="/login-page">Login/Sign Up</Button>

        </div >
    );
}


export default LandingPage;
