import React from "react";


import { Route, Routes } from "react-router-dom";
import CustomerRoute from "./Routes/CustomerRoute.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Product from "./customer/components/Product/Product.jsx";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<CustomerRoute/>}></Route>

    </Routes>
      <div>
      
        
      
      </div>
    </>
  );
};

export default App;
