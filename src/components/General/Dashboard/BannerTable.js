import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  IconButton,
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
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
// Api import
import EcomAPI from "../../../apis/EcomAPI";
const BannerTable = () => {
  let navigate = useNavigate();
  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/banner/get-all-banner");
        setSelectedBanner(response.data);
      } catch (err) {
        console.log(err, "Error: BannerTable get-all-banner");
      }
    };
    fetchData();
  });

  const handleEdit = (id, e) => {
    e.stopPropagation();
    navigate(`/edit-banner/${id}`);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    try {
      const response = await EcomAPI.delete(`/banner/delete/${id}`);
      setSelectedBanner(selectedBanner.filter((a) => a._id !== id));
      console.log(response, "Banner deleted succesfully");
    } catch (err) {
      console.log(err, "Error: Banner delete");
    }
  };
  return (
    <div className="">
      <TableContainer
        className="inline-flex h-[600px] scroll-smooth border-2 rounded-lg w-[1300px]
    scrollbar-hide overflow-scroll">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="text-base font-poppins" align="center">
                Image
              </TableCell>
              <TableCell className="text-base font-poppins" align="center">
                Name
              </TableCell>
              <TableCell className="text-base font-poppins" align="center">
                Source
              </TableCell>
              <TableCell className="text-base font-poppins" align="center">
                Hero Banner
              </TableCell>
              <TableCell className="text-base font-poppins" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedBanner &&
              selectedBanner.map((banner) => {
                return (
                  <TableRow key={banner._id}>
                    <TableCell align="center">
                      <Card className="w-60 h-32 m-auto shadow-lg">
                        <div className="overflow-hidden">
                          <CardMedia
                            component="img"
                            image={banner.image.url}
                            className="w-60 h-32"
                          />
                        </div>
                      </Card>
                    </TableCell>
                    <TableCell align="center" className="font-poppins">{banner.name}</TableCell>
                    <TableCell align="center" className="font-poppins">{banner.source}</TableCell>

                    <TableCell align="center">
                      {banner.isHero ? (
                        <CheckIcon color="success" />
                      ) : (
                        <CloseIcon color="error" />
                      )}
                    </TableCell>
                    {/* Actions */}
                    <TableCell align="center" className="space-x-3">
                      <Tooltip title="Edit" arrow>
                        <IconButton
                          color="primary"
                          onClick={(e) => handleEdit(banner._id, e)}
                        >
                          <EditIcon className="" />
                        </IconButton>
                      </Tooltip>
                      {/* Delete */}
                      <Tooltip title="Delete" arrow>
                        <IconButton
                          color="error"
                          onClick={(e) => handleDelete(banner._id, e)}
                        >
                          <DeleteIcon />
                        </IconButton>
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

export default BannerTable;
