import React from 'react'
import "./landingpage.css"
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className='mainlandingpage'>
    <div className='landContainer'>
    <div className='welcomeText'>
    Welcome to Dream Home
    </div>
    <div className='slogan'>
    A place where you can find a perfect place to live and rent just like in your dreams.
    </div>
    <div className='landButton'>
    <Link to={{ pathname: '/home' }} className='link'>
    <div className='joinButton'> Join Now</div> 
    </Link>
    </div>
    </div>
    </div>
  )
}
