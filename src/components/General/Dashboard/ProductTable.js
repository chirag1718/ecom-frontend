import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
    <div className="">
      <TableContainer className="inline-flex h-[500px] scroll-smooth border-2 rounded-lg w-[1300px] scrollbar-hide overflow-scroll mt-20 ">
        <Table stickyHeader>
          <TableHead className="">
            <TableRow>
              <TableCell className="text-base " align="center">
                Image
              </TableCell>
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
                    <TableCell align="center">
                      <img
                        className="h-28 w-28 justify-center m-auto shadow-lg"
                        src={product.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">₹ {product.price}</TableCell>
                    <TableCell align="center">NA</TableCell>
                    <TableCell align="center">
                      <Button>
                        <EditIcon className="" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button color="error">
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
