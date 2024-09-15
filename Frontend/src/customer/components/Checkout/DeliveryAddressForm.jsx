import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard.jsx";

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    // default behaviour submit hote hi refresh ho jata h 
    e.preventDefault()
    console.log("address")
    const data =new FormData(e.currentTarget)
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("streetAddress"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber"),

    }
    console.log("address",address)
  }
  return (
    <div>
      <Grid container spacing={4}>
        {/* Address Card Section */}
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: "0 8px 8px 0",
            boxShadow: 2,
            height: "30.5rem",
            overflowY: "auto",
          }}
        >
          <Box sx={{ py: 4, px: 3, borderBottom: 1, borderColor: "divider" }}>
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </Box>
        </Grid>

        {/* Delivery Address Form Section */}
        <Grid item xs={12} lg={7}>
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: "8px",
              boxShadow: 2,
              padding: 4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code "
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type='submit'
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
