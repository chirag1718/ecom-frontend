import React from "react";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleAddProduct = () => {
  //   navigate("/add-product");
  // };
  return (
    <div className="flex items-center justify-center my-3 flex-col">
      <ProductTable />
    </div>
  );
};

export default Dashboard;
