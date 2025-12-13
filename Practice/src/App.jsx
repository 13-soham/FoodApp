import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';



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
      <Header/>
      <Body/>
    </div>
  )
}

export default App;