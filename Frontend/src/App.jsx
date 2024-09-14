
import React from 'react'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'

import Cart from './customer/components/Cart/Cart.jsx'
import Checkout from './customer/components/Checkout/Checkout.jsx'

const App = () => {
  return (<>
  <div>
 <Navigation/>
 {/* <HomePage/>
 <Product/>
 <ProductDetails/> */}
 {/* <Cart/> */}
 <Checkout/>
<Footer/>
    </div></>
   
  )
}

export default App