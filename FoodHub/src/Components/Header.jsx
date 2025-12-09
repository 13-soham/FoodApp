import React from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../Images/foodhub-high-resolution-logo-transparent.png'

const Header = () => {
  return (
    <div className='w-screen px-7 py-3'>
      <div className='border-2 border-black px-5 py-2 flex items-center justify-between'>
        <div className='h-20 w-20 overflow-hidden flex items-center cursor-pointer'>
          <img src={logo} alt='FoodHub logo' className='h-full w-auto object-contain' />
        </div>
        <div className='flex items-center gap-5'>
          <h2 className='text-m cursor-pointer'>Home</h2>
          <h2 className='text-m cursor-pointer'>About Us</h2>
          <h2 className='text-m cursor-pointer'>Contact Us</h2>
          <i className='ri-shopping-cart-line text-2xl cursor-pointer'></i>
          
        </div>
      </div>
    </div>
  )
}

export default Header;