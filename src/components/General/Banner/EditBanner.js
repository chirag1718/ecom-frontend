import React, { useEffect, useState } from "react";
// MUI
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// Api import
import EcomAPI from "../../../apis/EcomAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditBanner = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState(undefined);
  const [source, setSource] = useState("");
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const redirect = () => {
    let time = setTimeout(function () {
      navigate("/");
      window.clearTimeout(time);
    }, 1000);
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get(`/banner/get-one-banner/${id}`);
        setSelectedBanner(response.data);
        setName(response.data.name);
        setSource(response.data.source);
        setImage(response.data.image);
        console.log(response.data);
      } catch (err) {
        console.log(err, "Error: Edit Banner get route");
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.stopPropagation();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("source", source);
      formData.append("file", image);

      const bannerUpdate = await EcomAPI.put(
        `/banner/update-banner/${id}`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(bannerUpdate, "Banner Updated successfully");
      setSuccess("Banner Updated Successfully");
      redirect();
    } catch (err) {
      console.log(err, "Error: EditBanner handleUpadte");
    }
  };
  return (
    <div>
      <Typography variant="h6" component="div" align="center" className="mb-3">
        Edit Banner
      </Typography>
      <form
        name="file"
        method="post"
        encType="multipart/form-data"
        action="/banner/edit-banner"
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

          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              setError("");
              setSuccess("");
            }}
            type="file"
          />

          <div className="flex justify-center">
            <Button type="submit" variant="contained" onClick={handleUpdate}>
              Submit
            </Button>
          </div>
          <span className="text-center">{error ? <>{error}</> : success}</span>
        </Stack>
      </form>
    </div>
  );
};

export default EditBanner;
