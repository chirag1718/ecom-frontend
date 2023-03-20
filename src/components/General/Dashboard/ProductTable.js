import {
  Button,
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
    <TableContainer className="inline-flex h-[500px] scroll-smooth border-2 rounded-lg w-[1300px] scrollbar-hide overflow-scroll">
      <Table stickyHeader>
        <TableHead className="">
          <TableRow>
            <TableCell className="text-base " align="center">
              Name
            </TableCell>
            <TableCell className="text-base " align="center">
              Category
            </TableCell>
            <TableCell className="text-base " align="center">
              Price
            </TableCell>
            <TableCell className="text-base " align="center">
              Quantity
            </TableCell>
            <TableCell className="text-base " align="center">
              Edit
            </TableCell>
            <TableCell className="text-base " align="center">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedProduct &&
            selectedProduct.map((product) => {
              return (
                <TableRow key={product._id} className="">
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell className="underline" align="center">
                    {product.category}
                  </TableCell>
                  <TableCell align="center">₹ {product.price}</TableCell>
                  <TableCell align="center">NA</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
