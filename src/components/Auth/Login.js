import React, { useState } from "react";
// Api import
import EcomAPI from "../../apis/EcomAPI";

// Material UI import
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

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
  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // Login button
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await EcomAPI.post("/user/login", {
        email,
        password,
      });
      console.log(response);
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
  return (
    <div className="flex justify-center items-center text-center h-[80vh]">
      <Box className="w-[400px] h-[500px] flex justify-center items-center border-[1px] p-3 ">
        <Stack direction="column">
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
              type={showPassword ? "text" : "password"}
              className="mb-7 "
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

            <Button
              type="submit"
              variant="outlined"
              className=" mb-7"
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
            <Typography className="text-red-500 font-poppins">
              {error ? <>{error}</> : null}
            </Typography>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
