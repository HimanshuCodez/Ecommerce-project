import { Grid, TextField } from "@mui/material";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    // default behaviour submit hote hi refresh ho jata h
    e.preventDefault();
    console.log("address");
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    console.log("address", address);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name=" firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
