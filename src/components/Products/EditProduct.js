import {
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EcomAPI from "../../apis/EcomAPI";
import SelectOptions from "./SelectOptions";

const EditProduct = () => {
  let navigate = useNavigate();
  //Setter function
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(undefined);
  const [category, setCategory] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get(`/product/get-one-product/${id}`);
        setSelectedProduct(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setImage(response.data.image);
        setCategory(response.data.category);
        setPrice(response.data.price);
        console.log(response.data);
      } catch (err) {
        console.log(err, "This is error");
      }
    };
    fetchData();
  }, [id]);

  // redirect user to home page after product update
  const redirect = () => {
    let time = setTimeout(function () {
      navigate("/");
      window.clearTimeout(time);
    }, 2000);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("file", image);
      formData.append("category", category);

      const productUpdate = await EcomAPI.put(
        `/product/update-product/${id}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(productUpdate, "Product updated successfully");
      setSuccess("Product Updated Succesfully");
      redirect();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Typography variant="h6" component="div" align="center">
        Edit Product
      </Typography>
      <form
        name="file"
        method="post"
        encType="multipart/form-data"
        action="/product/edit-product"
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
              <Button type="submit" className="my-5">
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
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
              label="Price"
            />
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
                setError("");
                setSuccess("");
              }}
              type="file"
              className=""
              name="uImage"
            />
            <div className=" flex justify-center">
              <Button type="submit" variant="contained" onClick={handleUpdate}>
                Submit
              </Button>
            </div>
            <span className="text-center">
              {error ? <>{error}</> : success}
            </span>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default EditProduct;
