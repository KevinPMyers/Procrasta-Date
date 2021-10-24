import { React, useState } from 'react';
import { Button, Radio } from 'antd';
import Fork from '../assets/ForkedUp.png'

function LandingPage() {


    return (

        <div className="LandingPage">
            <img className="forked-up" src={Fork}></img>
            <p> We got you! Sign in and follow the steps to get things cookin!</p>
            <Button size="large" className="LandingButton" href="/login-page">Login/Sign Up</Button>

        </div >
    );
}


export default LandingPage;
