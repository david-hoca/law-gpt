import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";
// MUI
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcome">
        <div className="container">
          <div className="welcome__wrapper">
            <Typography variant="h4" gutterBottom>
              Welcome to Law GPT
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Start with:
            </Typography>
            <div>
              <Link to={"/signup"}>
                <Button className="welcome__button" variant="text">
                  Register now
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button className="welcome__button" variant="text">
                  Login now
                </Button>
              </Link>
            </div>
            <Typography variant="subtitle1" gutterBottom>
              We're on
              <a href="#"> LinkedIn | </a>
              <a href="#"> WhatsApp | </a>
              <a href="#"> Discord </a>
            </Typography>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
