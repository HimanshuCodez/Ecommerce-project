
import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'

const App = () => {
  return (<>
  <div>
 <Navigation/>
 {/* <HomePage/> */}
 <Product/>
<Footer/>
    </div></>
   
  )
}

export default App