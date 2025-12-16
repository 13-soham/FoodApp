import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Exit from './Pages/Exit';
import Section from './Pages/Section';
import Veg from './Pages/Veg';
import Conti from './Pages/Conti';
import NonVeg from './Pages/NonVeg';
import Menu from './Pages/Menu';
import Back from './Components/Back';



/*
Planning → 

1) Header
  → Logo
  → nav items
2) Body
  → search
  → resturantContent
  → resturentCard
3) Footer
  → Copyright
  → Links
  → Address
  → Contact

*/

const App = () => {
  return (
    <div className='min-h-screen px-7 py-3 bg-black'>
      <Header />
      <Back />
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/home" element={<Home />}/>

        {/* dynamic route */}
        <Route path="/home/:id" element={<Menu />}/>

        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<ContactUs />}/>

        {/* nested route */}
        <Route path='/section' element={<Section />}>
          <Route path='veg' element={<Veg/>}/>
          <Route path='nonveg' element={<NonVeg/>}/>
          <Route path='conti' element={<Conti/>}/>
        </Route>

        {/* 404 page */}
        <Route path='*' element={<Exit/>}/>
      </Routes>
    </div>
  )
}

export default App;