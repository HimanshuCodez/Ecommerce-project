import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box className="">
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid2>
        <Grid2 item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Mintu</p>
              <p className="opacity-70 ">April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={.5} />
          <p className="">
           Nice Product,i love this shirt
          
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
