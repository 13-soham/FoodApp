import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Section = () => {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen pt-20'>
        <div className='w-70 px-4 py-6 border-2 rounded-lg border-cyan-700 
                      flex flex-col gap-4'>

            {/* "!" is the symbol of importance */}
            <button className='buttonProp bg-green-600! active:scale-95 transition-transform duration-150'><Link to="/section/veg">Veg</Link></button>
            <button className='buttonProp bg-amber-600! active:scale-95 transition-transform duration-150'><Link to="nonveg">NonVeg</Link></button>
            <button className='buttonProp bg-red-700! active:scale-95 transition-transform duration-150'><Link to="/section/conti">Continental</Link></button>
        </div>

        <div className='w-full mt-10'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Section