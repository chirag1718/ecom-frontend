import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/add-product");
  };
  return (
    <>
      <div className="flex items-center justify-center my-3 flex-col">
        <ProductTable />
      </div>
      {/* <Button
        type="submit"
        className="mt-3 absolute "
        variant="outlined"
        onClick={handleAddProduct}
      >
        Add Product
      </Button> */}
    </>
  );
};

export default Dashboard;
