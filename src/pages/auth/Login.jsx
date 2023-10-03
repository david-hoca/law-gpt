import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useQuery, useMutation } from "react-query";
// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

// API
import { loginUser } from "@api/loginApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const navigate = useNavigate();

  // Create a mutation to handle login
  const loginMutation = useMutation((userData) => loginUser(userData));

  // Function to handle login when the button is clicked
  const handleLogin = async () => {
    try {
      // Enable data fetching here
      const response = await loginMutation.mutateAsync({
        email,
        password,
      });

      const { data, token } = response.data;
      localStorage.setItem("token", token);

      // Snackbar success notification
      setOpenSuccessSnackbar(true);
      setTimeout(() => {
        setOpenSuccessSnackbar(false);
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="auth">
        <div className="container">
          <div className="auth__wrapper">
            <div className="auth__inner">
              <Typography variant="h4" gutterBottom>
                Login to your account
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <div className="auth__form">
                  <TextField
                    className="myTextField"
                    required
                    id="outlined-required-email"
                    label="Email address"
                    value={email}
                    autoComplete="current-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    className="myTextField"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className="myButton"
                    variant="contained"
                    onClick={handleLogin}
                  >
                    Continue
                  </Button>
                </div>
              </Box>
              <Typography
                className="auth__haveAccount"
                variant="subtitle1"
                gutterBottom
              >
                Don't you have an account? <Link to="/signup">Register</Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Success Snackbar */}
      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSuccessSnackbar(false)}
        message="Login successful! Redirecting..."
      />
    </React.Fragment>
  );
};
