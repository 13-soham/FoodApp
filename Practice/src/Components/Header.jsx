import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'
import logo from '../Images/foodhub-high-resolution-logo-transparent.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToggleDataContext } from '../context/ToggleContext';

const Header = () => {

  const {theme, setTheme} = useContext(ToggleDataContext);

  function changeToggle(){
    if(theme === "light") setTheme("dark");
    if(theme === "dark") setTheme("light");
  }

  const navigate = useNavigate();
  function menu() {
    let x = Math.floor(Math.random() * 10 + 1);
    if (x >= 1 && x <= 6) navigate("/section/veg");
    if (x >= 7 && x <= 8) navigate("/section/nonveg");
    if (x >= 9 && x <= 10) navigate("/section/conti");
  }
  return (
    <div className={theme === "light" ? "text-white" : "text-cyan-400"}>
      {/* <p className='text-2xl text-white'>{theme}</p> */}
      <div className='border-2 border-white px-5 py-2 flex items-center justify-between'>
        <div className='h-20 w-20 overflow-hidden flex items-center cursor-pointer'>
          <Link to="/"><img src={logo} alt='FoodHub logo' className='h-full w-auto object-contain' /></Link>
        </div>
        <div className='flex items-center gap-5'>

          <i onClick={changeToggle} className="ri-sun-line cursor-pointer text-xl"></i>
          <div className="relative group cursor-pointer">
            <i
              onClick={menu}
              className="
                    ri-restaurant-2-fill text-2xl
                    transition-all duration-300
                    group-hover:text-green-400
                    group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]
                  "
            ></i>

            <span
              className="
                  absolute top-full mt-2 left-1/2 -translate-x-1/2
                  px-3 py-1 text-sm rounded-md
                  bg-black text-green-400
                  opacity-0 scale-90
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                  pointer-events-none
                "
            >
              Today's Menu
            </span>
          </div>
          <h2 className='text-m cursor-pointer'><NavLink style={(e)=>{
            return{
              color : e.isActive? "tomato" : "" 
            };
          }} to="/home">Home</NavLink></h2><h2 className='text-m cursor-pointer'><NavLink style={(e)=>{
            return{
              color : e.isActive? "tomato" : "" 
            };
          }} to="/about">About</NavLink></h2><h2 className='text-m cursor-pointer'><NavLink style={(e)=>{
            return{
              color : e.isActive? "tomato" : "" 
            };
          }} to="/contact">Contact us</NavLink></h2>

          <Link to="/section"><i className='ri-shopping-cart-line text-2xl cursor-pointer'></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;