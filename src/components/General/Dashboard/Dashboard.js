import React from "react";
import ProductTable from "./ProductTable";
import BannerTable from "./BannerTable";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center my-10 space-y-20 flex-col ">
      {/* Products */}
      <div>
        <Typography
          variant="h4"
          component="h1"
          align="left"
          className="font-poppins"
        >
          Products
        </Typography>
        <ProductTable />
      </div>
      {/* Banner */}
      <div>
        <Typography
          variant="h4"
          component="h1"
          align="left"
          className="font-poppins"
        >
          Banner
        </Typography>
        <BannerTable />
      </div>
    </div>
  );
};

export default Dashboard;
