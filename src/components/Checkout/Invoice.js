import { Box, Typography } from "@mui/material";
import React from "react";

const Invoice = () => {
  return (
    <div className="flex flex-col text-center">
      <Typography component="span" variant="h5" className="">
        Invoice
      </Typography>

      <div className="flex justify-around  mt-5 text-white ">
        <Box className="h-96 w-96 bg-stone-800 border border-blue-900 p-5">
          <Typography component="span" variant="h5">
            Items
          </Typography>
        </Box>
        <Box className="h-96 w-96 bg-stone-800 border border-blue-900 p-5">
          <Typography component="span" variant="h5">
            Invoice
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Invoice;
