import React, { useState } from "react";

// MUI
import { Button, InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";

// Api import
import EcomAPI from "../apis/EcomAPI";

const AddProduct = () => {
  //Setter function
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(undefined);
  const [error, setError] = useState("");

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("file", image);
      // console.log(formData);
      const response = await EcomAPI.post("/product/addproduct", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
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
            // value={image}
            onChange={(e) => {
              setImage(e.target.files[0]);
              setError("");
            }}
            type="file"
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
