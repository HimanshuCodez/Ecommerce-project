import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px:5 ">
      <div>
        <h1 className="font-bold text-xl  py-5 ">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20 ">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className=" mb-6 space-y-5">
        {[1,1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border "
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top "
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                alt=""
              />
              <div className="ml-5 space-y-2">
                <p className=" font-semibold">Men slim Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  {" "}
                  <span>Color : Black</span> <span>Size : M</span>
                </p>
                <p>Seller : Mintu</p>
                <p>₹2303</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-2xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
