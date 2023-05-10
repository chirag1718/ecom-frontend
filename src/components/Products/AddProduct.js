import React, { useState } from "react";

// MUI
import {
  Button,
  Checkbox,
  InputAdornment,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import SendIcon from "@mui/icons-material/Send";
// Api import
import EcomAPI from "../../apis/EcomAPI";

// Categories import
import SelectOptions from "./SelectOptions";

// React reouter
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  let navigate = useNavigate();

  //Setter function
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(undefined);
  const [category, setCategory] = useState({});
  const [quantity, setQuantity] = useState("");
  const [isHero, setIsHero] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Navigate to 🏠 after succesfull product submission
  const redirect = () => {
    let time = setTimeout(function () {
      navigate("/");
      window.clearTimeout(time);
    }, 2000);
  };

  const handleHeroToggle = (e) => {
    setIsHero((isHero) => !isHero);
    console.log(setIsHero, "this is hero product");
  };

  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("file", image);
      formData.append("category", category);
      formData.append("isHero", isHero);
      formData.append("quantity", quantity);
      // console.log(formData);
      const response = await EcomAPI.post("/product/add-products", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response.data, "Submitted successfully");
      setOpen(true);
      setSuccess("Product added Successfully");
      redirect();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <div className="">
      <Typography variant="h6" component="div" align="center" className="mb-3">
        Add Product
      </Typography>
      <form
        name="file"
        method="post"
        encType="multipart/form-data"
        action="/product/add-product"
      >
        <Stack spacing={4} className="mx-4">
          <Stack direction="column" spacing={4}>
            {/* Name */}
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
                setSuccess("");
              }}
              label="Name"
            />

            {/* Description */}
            <TextField
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setError("");
                setSuccess("");
              }}
              label="Description"
            />
            {/* Category */}
            <TextField
              select
              value={category}
              label="Category"
              onChange={(e) => {
                setCategory(e.target.value);
                setError("");
                setSuccess("");
              }}
              defaultValue="Chocolate"
              helperText="Please select a category"
            >
              {SelectOptions.map((categories) => (
                <MenuItem key={categories.value} value={categories.label}>
                  {categories.label}
                </MenuItem>
              ))}
              <Button
                type="submit"
                className="my-5"
                // onClick={handleCategory}
              >
                {/* <AddIcon /> */}
                Add new Category
              </Button>
            </TextField>

            {/*Price */}
            <TextField
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setError("");
                setSuccess("");
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeOutlinedIcon color="success" />
                  </InputAdornment>
                ),
              }}
              label="Price"
            />
            {/*Quantity */}
            <TextField
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                setError("");
                setSuccess("");
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ShoppingCartOutlinedIcon color="warning" />
                  </InputAdornment>
                ),
              }}
              label="Quantity"
            />
          </Stack>

          <div>
            Hero Product
            <Checkbox
              color="success"
              value={isHero}
              onChange={handleHeroToggle}
            />
          </div>

          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setError("");
              setSuccess("");
            }}
            type="file"
            className=""
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              endIcon={<SendIcon />}
            >
              Submit
              <Snackbar
                message="Product Submitted Succesfully"
                autoHideDuration={2000}
                open={open}
                onClose={handleCloseToast}
              />
            </Button>
          </div>
          <span className="text-center">{error ? <>{error}</> : success}</span>
        </Stack>
      </form>
    </div>
  );
};

export default AddProduct;
