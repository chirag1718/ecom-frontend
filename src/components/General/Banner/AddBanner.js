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
  const [isMid, setIsMid] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const redirect = () => {
    let time = setTimeout(function () {
      navigate("/");
      window.clearTimeout(time);
    }, 1000);
  };

  const handleToggle = (e) => {
    setIsHero((isHero) => !isHero);
    setIsMid((isMid) => !isMid);
    setIsBottom((isBottom) => !isBottom);
    // console.log(setIsHero, "this is hero banner");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", image);
      formData.append("source", source);
      formData.append("isHero", isHero);
      formData.append("isMid", isMid);
      formData.append("isBottom", isBottom);
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
      <Typography variant="h5" component="div" align="center" className="mt-5">
        Add Banner
      </Typography>
      <form
        name="file"
        method="post"
        encType="multipart/form-data"
        action="/banner/add-banner"
      >
        <Stack spacing={4} className="m-auto mt-5 w-[60vw]">
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
          <Stack direction="column" spacing={2}>
            <span>
              Hero Banner
              <Checkbox
                color="success"
                value={isHero}
                onChange={handleToggle}
              />
            </span>
            <span>
              Mid Banner
              <Checkbox color="success" value={isMid} onChange={handleToggle} />
            </span>
            <span>
              Bottom Banner
              <Checkbox
                color="success"
                value={isBottom}
                onChange={handleToggle}
              />
            </span>
          </Stack>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setError("");
              setSuccess("");
            }}
            type="file"
          />

          <div className="flex justify-end">
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
