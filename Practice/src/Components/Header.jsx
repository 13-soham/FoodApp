import React from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../Images/foodhub-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-white'>
      <div className='border-2 border-white px-5 py-2 flex items-center justify-between'>
        <div className='h-20 w-20 overflow-hidden flex items-center cursor-pointer'>
          <Link to="/"><img src={logo} alt='FoodHub logo' className='h-full w-auto object-contain' /></Link>
        </div>
        <div className='flex items-center gap-5'>

          <h2 className='text-m cursor-pointer'><Link to="/home">Home</Link></h2>
          <h2 className='text-m cursor-pointer'><Link to="/about">About</Link></h2>
          <h2 className='text-m cursor-pointer'><Link to="/contact">Contact us</Link></h2>

          <Link to="/section"><i className='ri-shopping-cart-line text-2xl cursor-pointer'></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;