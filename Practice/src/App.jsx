import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';



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
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </div>
  )
}

export default App;