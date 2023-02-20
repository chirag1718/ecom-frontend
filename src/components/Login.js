import React, { useState } from "react";
// Api import
import EcomAPI from "../apis/EcomAPI";

// Material UI import
import { Button, FormControl, InputAdornment, TextField } from "@mui/material";

// Material UI icon
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// React router import
import { useNavigate } from "react-router-dom";
const Login = () => {
  // React router
  const navigate = useNavigate();

  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Signup button
  const handleSignup = () => {
    navigate("/signup");
  };

  // Login button
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await EcomAPI.post("/user/login", {
        email,
        password,
      });

      navigate("/");
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl className="flex items-center justify-center min-h-screen w-full flex-col">
      <p className="text-xl font-sans">Enter your Login Credentials</p>
      <TextField
        label="Email"
        className="mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        className="mb-3 w-[14rem]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              className="cursor-pointer"
              position="end"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="outlined"
        className="w-[14rem] mb-5"
        endIcon={<LoginIcon />}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button
        variant="contained"
        // className=""
        onClick={handleSignup}
        endIcon={<PersonAddIcon />}
      >
        Create New Account
      </Button>
    </FormControl>
  );
};

export default Login;
