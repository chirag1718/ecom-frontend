import React, { useState } from "react";

// MUI
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";

// Api import
import EcomAPI from "../../apis/EcomAPI";

// Categories import
import SelectOptions from "./SelectOptions";

// import AddIcon from "@mui/icons-material/Add";

const AddProduct = () => {
  //Setter function
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(undefined);
  const [category, setCategory] = useState({});
  const [error, setError] = useState("");
  const success = () => {
    return <span>Product added succesfully</span>;
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
      // console.log(formData);
      const response = await EcomAPI.post("/product/addproducts", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response.data);
      success();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  // const handleCategory = () => {
  //   // categoryOptions.push()
  // };

  return (
    <form
      name="file"
      method="post"
      encType="multipart/form-data"
      className="mt-5"
      action="/product/addProduct"
    >
      <Stack spacing={4} className="mx-4">
        <Stack direction="column" spacing={4}>
          {/* Name */}
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            label="Name"
          />

          {/* Description */}
          <TextField
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setError("");
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
            }}
            defaultValue="Chocolate"
            helperText="Please select a category"
          >
            {SelectOptions.map((categories) => (
              <MenuItem key={categories.value} value={categories.value}>
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
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            label="Price"
          />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setError("");
            }}
            type="file"
            className=""
          />
          <div className=" flex justify-center">
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <span className="text-red-500 text-center">
            {error ? <>{error}</> : null}
          </span>
        </Stack>
      </Stack>
    </form>
  );
};

export default AddProduct;
