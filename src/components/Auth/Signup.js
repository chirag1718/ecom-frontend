import React, { useState } from "react";
// API import
import EcomAPI from "../../apis/EcomAPI";

// Matreial UI
import { Button, FormControl, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";

const Signup = () => {
  // React router
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await EcomAPI.post("/user/register", {
        firstName,
        email,
        password,
      });

      const res = response.data;
      dispatch(setUser(res));

      navigate("/");
      // console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Signup button
  const handleLogin = () => {
    navigate("/login");
  };

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl className="flex items-center justify-center min-h-screen w-full flex-col">
      <p className="text-xl font-sans">Enter your Credentials</p>

      {/* First Name */}
      <TextField
        label="First Name"
        className="mb-3"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      {/* Email */}
      <TextField
        label="Email"
        className="mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <TextField
        label="Password"
        className="mb-3 w-[14rem]"
        type={showPassword ? "text" : "password"}
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

      {/* Register */}
      <Button
        variant="outlined"
        className="w-[14rem] mb-5"
        endIcon={<PersonAddIcon />}
        onClick={handleRegister}
      >
        Sign In
      </Button>

      {/* Login */}
      <Button variant="text" onClick={handleLogin} endIcon={<LoginIcon />}>
        Log In
      </Button>
    </FormControl>
  );
};

export default Signup;
