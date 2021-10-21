import { React, useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
function LoginPage() {

    return (
        <div className="LoginPage">
            <h2> Login to Get Started!</h2>
            <LoginForm></LoginForm>
            <h2> New Here? What took so Long? Sign Up Now!</h2>
            <SignUpForm></SignUpForm>


        </div >
    );




}


export default LoginPage;
