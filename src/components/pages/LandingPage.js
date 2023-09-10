import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/toy.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center" style={{color:'#F0FFF0'}}>Toy's Kingdom</h1>
            <p className="main-para text-center" style={{color:'#F0FFF0'}}>Happiness For your little one</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}
//const backgroundOpacity = 0.1;
const HeaderStyle = {
    width: "100vw",
    height: "100vh",
    //background: `rgba(0, 0, 0, ${backgroundOpacity})url(${BackgroundImage})`,
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundOpacity: "0."
}