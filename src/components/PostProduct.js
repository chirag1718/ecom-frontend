import React from "react";
// MUI
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

const PostProduct = () => {
  return (
    <form
      method="post"
      encType="multipart/form-data"
      //onSubmit={handleFormSubmits}
      className="mt-5"
    >
      <Stack spacing={4}>
        <Stack direction="column" spacing={4}>
          <TextField label="Name" />
          <TextField label="Description" />
          <TextField label="Price" />
          <TextField label="Quantity" />
        </Stack>
      </Stack>
      <input type="file" className="mt-4" />
    </form>
  );
};

export default PostProduct;
