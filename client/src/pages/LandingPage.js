import { React, useState } from 'react';
import { Button, Radio } from 'antd';

function LandingPage() {


    return (

        <div className="LandingPage">
            <p>
                So... you Forked Up
            </p>
            <p> We got you</p>
            <Button size="large" className="LandingButton" href="/login-page">Login/Sign Up</Button>

        </div >
    );
}


export default LandingPage;
