import React from "react";
import Fork from '../../assets/ForkedUp.png'

function Header() {

    return (
        <div>
            <header >
                <a href="/" className="header-title">Procrast-A-Date!</a>
                 

            </header>
<img className="forked-up" src={Fork}></img>
                 <p className="intro"> We got you! Sign in and follow the steps to get things cookin!</p>
        </div>
    )

}


export default Header;