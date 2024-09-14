import { Button, Grid2 } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard.jsx'

const DeliveryAddressForm = () => {
  return (
    <div>
        <Grid2 container spacing={4}>
            <Grid2 className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                <div className='py-7 p-5 border-b cursor-pointer '>
<AddressCard/>
<Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>Deliver Here</Button>
                </div>

            </Grid2>
        </Grid2>
    </div>
  )
}

export default DeliveryAddressForm