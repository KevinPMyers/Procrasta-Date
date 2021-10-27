import { React, useState } from 'react';
import { Button, Radio } from 'antd';
import Auth from '../utils/auth';
import Fork from '../assets/ForkedUp.png'
import FoodCarousel from '../components/Carousel'


function LandingPage() {

      const loggedIn = Auth.loggedIn();


    return (

        <div className="LandingPage">       
        
             {
                            loggedIn ? (
                            <FoodCarousel /> ) :
                        <div>
                            <FoodCarousel />
                            <Button type="submit" className="LandingButton" href="/login-page">Login/Sign Up</Button>
                        </div>} 

        </div >
    );
}


export default LandingPage;
