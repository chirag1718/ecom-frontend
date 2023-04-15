import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// Api import
import EcomAPI from "../../../apis/EcomAPI";

const ProductTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [deleteProduct, setDeleteProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/product/get-all-products");
        setSelectedProduct(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id, e) => {
    e.stopPropagation();
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    // console.log(selectedProduct);
    try {
      const response = await EcomAPI.delete(`/product/delete/${id}`);
      setSelectedProduct(selectedProduct.filter((a) => a._id !== id));
      console.log(response, "product deleted succesfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <TableContainer className="inline-flex h-[600px] scroll-smooth border-2 rounded-lg w-[1300px] scrollbar-hide overflow-scroll">
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
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProduct &&
              selectedProduct.map((product) => {
                return (
                  <TableRow key={product._id} className="">
                    <TableCell align="center">
                      {/* <Tooltip placement="right" title={product.name}> */}
                      <img
                        className="h-28 w-28 justify-center m-auto shadow-lg"
                        src={product.image.url}
                        alt=""
                      />
                      {/* </Tooltip> */}
                    </TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">₹ {product.price}</TableCell>
                    <TableCell align="center">NA</TableCell>
                    <TableCell align="center" className="space-x-3">
                      {/* Edit */}
                      <Tooltip title="Edit" arrow>
                        <Button onClick={(e) => handleEdit(product._id, e)}>
                          <EditIcon className="" />
                        </Button>
                      </Tooltip>
                      {/* Delete */}
                      <Tooltip title="Delete" arrow>
                        <Button
                          color="error"
                          onClick={(e) => handleDelete(product._id, e)}
                        >
                          <DeleteIcon />
                        </Button>
                      </Tooltip>
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
