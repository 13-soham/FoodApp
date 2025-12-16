import React from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {
    const params = useParams();
  return (
    <div className='mt-2'>
        <h1 className='text-2xl text-white middle'>Your {params.id} menu is ready.</h1>
    </div>
  )
}

export default Menu;