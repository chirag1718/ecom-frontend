import React from "react";
import ProductTable from "./ProductTable";
import BannerTable from "./BannerTable";
import { Typography } from "@mui/material";

const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleAddProduct = () => {
  //   navigate("/add-product");
  // };
  return (
    <div className="flex items-center justify-center my-10 space-y-20 flex-col">
      {/* Products */}
      <div>
        <Typography variant="h4" component="h1" align="left">
          Products
        </Typography>
        <ProductTable />
      </div>
      {/* Banner */}
      <div>
        <Typography variant="h4" component="h1" align="left">
          Banner
        </Typography>
        <BannerTable />
      </div>
    </div>
  );
};

export default Dashboard;
