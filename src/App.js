import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import routes from './routes'
import MobileNavBar from './components/MobileNavBar/MobileNavBar.jsx'
import MobileFooter from './components/MobileFooter/MobileFooter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketContext } from './Context/BasketContext.js'


export default function App() {


  const [basketProduct, setBasketProduct] = useState([])
  console.log(basketProduct);
 

  let router = useRoutes(routes)



  return (

    <>

      <BasketContext.Provider value={{ basketProduct, setBasketProduct }}>
        

          <div className=' d-none d-lg-block'>
            <Navbar></Navbar>
          </div>
          <div className=' d-block d-lg-none'>
            <MobileNavBar />

          </div>

          <div className='container'>

            {router}

          </div>


          <div className='d-none d-lg-block'>
            <Footer></Footer>

          </div>

          <div className=' d-block d-lg-none'>
            <MobileFooter />
          </div>
       

      </BasketContext.Provider>

    </>

  )
}

