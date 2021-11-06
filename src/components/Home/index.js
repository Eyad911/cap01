import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/img1.png";

import './style.css'
export const Home = () => {
    return (<>
        <div className="homePage">
            <img  src={img1} alt="logo"/>
             <Link id="start-btn" to="/Game" ><button id="start-btn" >Start Game</button></Link>
             <Link id="start-btn" to="/Instruction" ><button id="start-btn" >Instruction</button></Link>
        </div>
     
        </>
    )
}
