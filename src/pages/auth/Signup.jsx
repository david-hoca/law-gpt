import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { useQuery, useMutation } from "react-query";
// MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

// API
import { signupUser } from "@api/signupApi";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const navigate = useNavigate();

  // Fetch signup data using useQuery (if needed)
  const { data, isLoading, isError } = useQuery("signupData", signupUser, {
    enabled: false, // Data fetching is disabled by default
  });

  // Create a mutation to handle signup
  const signupMutation = useMutation((userData) => signupUser(userData));

  // Function to handle signup when the button is clicked
  const handleSignup = async () => {
    try {
      // Enable data fetching here
      const response = await signupMutation.mutateAsync({
        fullName,
        email,
        password,
      });

      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      // Snackbar success notification
      setOpenSuccessSnackbar(true);
      setTimeout(() => {
        setOpenSuccessSnackbar(false);
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="auth">
        <div className="container">
          <div className="auth__wrapper">
            <div className="auth__inner">
              <Typography variant="h4" gutterBottom>
                Create your account
              </Typography>
              <Typography
                className="auth__text"
                variant="subtitle1"
                gutterBottom
              >
                Please note that email & password verification is required for
                signup. Your email will only be used to verify your identity for
                security purposes.
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <div className="auth__form">
                  <TextField
                    className="myTextField"
                    required
                    id="outlined-required-fullname"
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
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
                    onClick={handleSignup}
                    disabled={signupMutation.isLoading}
                  >
                    {signupMutation.isLoading ? "Signing up..." : "Continue"}
                  </Button>
                </div>
              </Box>
              <Typography
                className="auth__haveAccount"
                variant="subtitle1"
                gutterBottom
              >
                Already have an account? <Link to="/login">Login</Link>
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
        message="Signup successful! Redirecting..."
      />
    </React.Fragment>
  );
};
