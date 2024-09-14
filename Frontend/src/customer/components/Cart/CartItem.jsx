import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://m.media-amazon.com/images/I/810RoZM-PaL._AC_UL320_.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim rise black Jeans</p>
          <p className=" opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Mintu</p>

          <div className=" flex space-x-5 items-center text-lg  text-gray-900 pt-6">
            <p className="font-semibold">₹900</p>
            <p className=" line-through opacity-50">₹2225</p>
            <p className=" text-green-600 font-semibold">70%off</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10 items-start pt-4 justify-start">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
