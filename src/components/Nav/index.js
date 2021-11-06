import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Nav = () => {
    return (
        <div className="navBar">
            <ul className="ulNav">
               <Link  className="link1" to="/"> <li>Home</li></Link>
               <li className="liLogo"> Hangman</li>
              <Link className="link1" to="/Instruction">  <li>Instruction</li></Link>
            </ul>
        </div>
    )
}
