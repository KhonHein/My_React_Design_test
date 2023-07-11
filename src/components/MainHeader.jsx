import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png'
const MainHeader = ()=> {
  return (
    <header className='main_header'>
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>a;skldf;ajsdf;lasdf</h4>
          <h1>Join the lendgs of the Fitness world</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, asperiores aperiam sapiente nulla ut et dicta soluta ipsum iure saepe, illo laboriosam aliquam adipisci pariatur possimus. Nostrum, perspiciatis libero. Nisi.</p>
        
           <Link to="/plans" className='btn'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Imag" />
          </div>
        </div>
      </div>
    </header>
  )
}
export default MainHeader;