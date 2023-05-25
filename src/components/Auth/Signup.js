import React, { useState } from "react";
// API import
import EcomAPI from "../../apis/EcomAPI";

// Matreial UI
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
  const [error, setError] = useState("");
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
      setError(err.message);
    }
  };

  // Signup button
  const handleLogin = () => {
    navigate("/login");
  };

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center text-center h-[80vh]">
      <Box className="w-[400px] h-[500px] flex justify-center items-center border-[1px] p-3 ">
        <Stack direction="column font-poppins">
          <FormControl>
            <Typography
              style={{
                marginBottom: "20px",
                fontSize: "20px",
                fontFamily: "Poppins",
              }}
            >
              Enter your Login Credentials
            </Typography>

            {/* First Name */}
            <TextField
              label="First Name"
              className="mb-7"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setError("");
              }}
            />

            {/* Email */}
            <TextField
              label="Email"
              className="mb-7"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

            {/* Password */}
            <TextField
              label="Password"
              className="mb-7"
              type={showPassword ? "text" : "password"}
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

            {/* Register */}
            <Button
              variant="outlined"
              className="mb-7"
              endIcon={<PersonAddIcon />}
              onClick={handleRegister}
            >
              Sign In
            </Button>

            {/* Login */}
            <Button
              variant="text"
              onClick={handleLogin}
              endIcon={<LoginIcon />}
            >
              Log In
            </Button>
            <Typography className="text-red-500 font-poppins">
              {error ? <>{error}</> : null}
            </Typography>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};

export default Signup;
