import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/810RoZM-PaL._AC_UL320_.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className=" ">Men slim Jeans</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
        <span>Price</span>
        <p>₹4697</p>
        </Grid>
        <Grid item xs={4}>
{true &&<p>
    <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600  mr-2 text-sm"/>
    <span>
        Delivered On March 03 
    </span>
</p>}
{false &&<p>
    <AdjustIcon/>
    <span>
   Expected Delivery On March 03 
    </span>
</p>}
<p>
    <span>
    Delivered On March 03 
    </span>
</p>
<p>
    <span>
    Delivered On March 03 
    </span>
</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
