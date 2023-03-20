import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// Api import
import EcomAPI from "../../../apis/EcomAPI";

const ProductTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/product/get-all-products");
        setSelectedProduct(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <TableContainer className="inline-flex h-[500px] scroll-smooth  border-2 rounded-lg w-[1300px] md:w-auto scrollbar-hide overflow-scroll">
      <Table>
        <TableHead>
          <TableRow >
            <TableCell className="text-base">Name</TableCell>
            <TableCell className="text-base">Category</TableCell>
            <TableCell className="text-base">Price</TableCell>
            <TableCell className="text-base">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedProduct &&
            selectedProduct.map((product) => {
              return (
                <TableRow key={product._id} className="">
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="underline">
                    {product.category}
                  </TableCell>
                  <TableCell>₹ {product.price}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
