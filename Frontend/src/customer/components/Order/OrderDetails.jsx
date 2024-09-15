import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
  return (
    <div className='lg:px-20 px:5 '>
        <div>
<h1 className='font-bold text-xl  py-5 ' >Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20 '>
            <OrderTracker activeStep={3}/>
        </div>
    </div>
  )
}

export default OrderDetails