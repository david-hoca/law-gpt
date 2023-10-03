import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Signup = () => {
  return (
    <React.Fragment>
      <div className="auth">
        <div className="container">
          <div className="auth__wrapper">
            <div className="auth__inner">
              <Typography variant="h4" gutterBottom>
                Create your account
              </Typography>
              <Typography className="auth__text" variant="subtitle1" gutterBottom>
                Please note that email & password verification is required for
                signup. Your email will only be used to verify your identity for
                security purposes.
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <div className="auth__form">
                  <TextField
                    className="myTextField"
                    required
                    id="outlined-required"
                    label="Email address"
                  />
                  <TextField
                    className="myTextField"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button className="myButton" variant="contained">
                    Continue
                  </Button>
                </div>
              </Box>
              <Typography
                className="auth__haveAccount"
                variant="subtitle1"
                gutterBottom
              >
                Already have an account? <Link to={"/login"}>Login</Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
