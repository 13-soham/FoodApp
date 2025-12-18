import React, { useContext } from 'react'
import Header from '../Components/Header';
import {Route, Routes} from "react-router-dom";
import { valContext } from '../context/ToggleContext';

const Home = () => {
  const data = useContext(valContext);
  return (
    <div>
        <h1 className='text-white middle'>This is Home</h1>
        <h1 className='text-white text-2xl m-10'>Data from Context API : {data}</h1>
    </div>
  )
}

export default Home;