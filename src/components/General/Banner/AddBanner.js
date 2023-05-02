import React, { useState } from "react";
// MUI
import {
  Button,
  Checkbox,
  // IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// Api import
import EcomAPI from "../../../apis/EcomAPI";
import { useNavigate } from "react-router-dom";

const AddBanner = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState(undefined);
  const [source, setSource] = useState("");
  const [isHero, setIsHero] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const redirect = () => {
    let time = setTimeout(function () {
      navigate("/");
      window.clearTimeout(time);
    }, 1000);
  };

  const handleHeroToggle = (e) => {
    setIsHero((isHero) => !isHero);
    console.log(setIsHero, "this is hero banner");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", image);
      formData.append("source", source);
      formData.append("isHero", isHero);
      const response = await EcomAPI.post("/banner/add-banner", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response, "banner response log");
      setSuccess("Banner added Successfully");
      redirect();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  // const handleEditBanner = (id, e) => {
  //   e.stopPropagation();
  //   navigate(`/edit-banner/${id}`);
  // };

  // const handleDeleteBanner = () => {
  //   // Delete banner
  // };
  return (
    <div>
      <Typography variant="h6" component="div" align="center">
        Add Banner
      </Typography>
      <form
        name="file"
        method="post"
        encType="multipart/form-data"
        action="/banner/add-banner"
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

            {/* Source */}
            <TextField
              value={source}
              onChange={(e) => {
                setSource(e.target.value);
                setError("");
                setSuccess("");
              }}
              label="Source"
            />
          </Stack>
          <div>
            Hero Banner
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
          />

          <div className="flex justify-center">
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <span className="text-center">{error ? <>{error}</> : success}</span>
        </Stack>
      </form>
      {/* Banner Edit/Delete */}
      {/* <div className="absolute bottom-3 right-3">
        <IconButton>
          <EditIcon color="primary" onClick={(e) => handleEditBanner()} />
        </IconButton>
        <IconButton>
          <DeleteIcon color="error" onClick={handleDeleteBanner} />
        </IconButton>
      </div> */}
    </div>
  );
};

export default AddBanner;
