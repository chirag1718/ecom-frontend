import React, { useState } from "react";
// Api import
import EcomAPI from "../../apis/EcomAPI";

// Material UI import
import { Button, FormControl, InputAdornment, TextField } from "@mui/material";

// Material UI icon
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch } from "react-redux";

// React router import
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/actions";
const Login = () => {
  // React router
  const navigate = useNavigate();

  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // Login button
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await EcomAPI.post("/user/login", {
        email,
        password,
      });

      
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("auth-token", response.data.token);
      
      const res = response.data;
      dispatch(setUser(res));
      
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  // Signup button
  const handleSignup = () => {
    navigate("/signup");
  };

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl className="flex items-center justify-center min-h-screen w-full flex-col">
      <p className="text-xl font-sans mb-5">Enter your Login Credentials</p>

      {/* Email */}
      <TextField
        label="Email"
        className="mb-3"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />

      {/* Password */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        className="mb-7 w-[14rem]"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
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
      {/* Login */}
      <span className="text-red-500 pb-3">{error ? <>{error}</> : null}</span>
      <Button
        type="submit"
        variant="outlined"
        className="w-[14rem] mb-5"
        endIcon={<LoginIcon />}
        onClick={handleLogin}
      >
        Log In
      </Button>
      {/* Create new account */}
      <Button
        variant="text"
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
