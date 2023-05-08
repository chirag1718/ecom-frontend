// import {
//   Badge,
//   Box,
//   Card,
//   CardMedia,
//   Divider,
//   Drawer,
//   Icon,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import React, { useEffect, useState } from "react";
// import EcomAPI from "../../apis/EcomAPI";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";

// const Cart = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const user = localStorage.getItem("user");
//   const userId = JSON.parse(user);
//   // console.log(userId._id, "userId cart component");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await EcomAPI.post("/cart/get-all-items", {
//           userId: userId._id,
//         });
//         setSelectedItems(response.data);
//         // console.log(selectedItems, "This is seletedItems");
//         console.log(response.data, "This is cart items");
//       } catch (err) {
//         console.log(err, "Error: This is Cart component Error");
//       }
//     };
//     fetchData();
//   }, []);
//   function cartTotal() {
//     const total = selectedItems.reduce(
//       (acc, curr) => acc + curr.productId.price * curr.quantity,
//       0
//     );
//     console.log(total, "This is total amount of cart");
//     return total;
//   }
//   const handleRemoveItem = () => {
//     //
//   };
//   const handleAddItem = () => {
//     //
//   };
//   return (
//     <>
//       <IconButton
//         size="small"
//         edge="start"
//         onClick={() => setIsDrawerOpen(true)}
//       >
//         <Badge badgeContent={selectedItems.length} color="secondary">
//           <LocalMallOutlinedIcon htmlColor="#fff" />
//         </Badge>
//       </IconButton>
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         sx={{
//           backgroundColor: "",
//         }}
//       >
//         <Box
//           p={1.6}
//           width="500px"
//           textAlign="center"
//           role="presentation"
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <Typography variant="h5" component="span" align="center">
//             Cart
//           </Typography>
//           <IconButton disableRipple sx={{ cursor: "default" }}>
//             <LocalMallOutlinedIcon
//               sx={{
//                 fontSize: "25px",
//                 color: "black",
//               }}
//             />
//           </IconButton>
//         </Box>
//         <Divider light />
//         {selectedItems &&
//           selectedItems.map((cartItem) => {
//             return (
//               <Box
//                 key={cartItem._id}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "flex-end",
//                   marginX: "15px",
//                 }}
//               >
//                 <Card
//                   sx={{
//                     height: "150px",
//                     width: "150px",
//                     display: "flex",
//                     marginY: "10px",
//                   }}
//                 >
//                   <CardMedia
//                     image={cartItem.productId.image}
//                     sx={{
//                       height: "150px",
//                       width: "150px",
//                     }}
//                   />
//                 </Card>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "end",
//                   }}
//                 >
//                   <Typography variant="h6" component="span">
//                     {cartItem.productId.name}
//                   </Typography>
//                   <Typography variant="h5" component="span">
//                     ₹ {cartItem.productId.price}
//                   </Typography>
//                   <Box
//                     sx={{
//                       flexDirection: "row",
//                       marginY: "10px",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <IconButton onClick={handleRemoveItem}>
//                       <RemoveIcon htmlColor="#000" />
//                     </IconButton>
//                     <Typography
//                       variant="h6"
//                       component="span"
//                       sx={{ marginX: "2px" }}
//                     >
//                       {cartItem.quantity}
//                     </Typography>
//                     <IconButton onClick={handleAddItem}>
//                       <AddIcon htmlColor="#000" />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </Box>
//             );
//           })}
//         <Divider light />
//         <Box
//           p={1.6}
//           width="500px"
//           textAlign="center"
//           role="presentation"
//           sx={{
//             display: "flex",
//             justifyContent: "end",
//             // alignItems: "end",
//             bottom: "20px",
//             position: "absolute",
//           }}
//         >
//           <Typography
//             variant="h5"
//             component="span"
//             // align="center"
//             color="black"
//           >
//             ₹ {cartTotal()}
//           </Typography>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Cart;

// MOVE THIS CART COMPONENT TO CHECKOUT FOLDER AND DON'T FORGET TO CHANGE IMPORT STATEMENTS

import {
  Badge,
  Box,
  Card,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import "../../index.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React, { useEffect, useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Cart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.post("/cart/get-all-items", {
          userId: userId._id,
        });
        setSelectedItems(response.data);
        // console.log(selectedItems, "This is seletedItems");
        console.log(response.data, "This is cart items");
      } catch (err) {
        console.log(err, "Error: This is Cart component Error");
      }
    };
    fetchData();
  }, []);
  function cartTotal() {
    const total = selectedItems.reduce(
      (acc, curr) => acc + curr.productId.price * curr.quantity,
      0
    );
    console.log(total, "This is total amount of cart");
    return total;
  }
  const handleRemoveItem = () => {
    //
  };
  const handleAddItem = () => {
    //
  };
  return (
    <div>
      <IconButton
        size="small"
        edge="start"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Badge badgeContent={selectedItems.length} color="secondary">
          <LocalMallOutlinedIcon htmlColor="#fff" />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{}}
      >
        <Box
          p={1.6}
          width="500px"
          textAlign="center"
          role="presentation"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            boxShadow: "0px 1px 8px -6px",
          }}
        >
          <Typography variant="h5" component="span" align="center">
            Cart
          </Typography>
          <IconButton disableRipple sx={{ cursor: "default" }}>
            <LocalMallOutlinedIcon
              sx={{
                fontSize: "25px",
                color: "black",
              }}
            />
          </IconButton>
        </Box>
        <Divider />
        <div>
          {selectedItems &&
            selectedItems.map((cartItem) => {
              return (
                <div
                  key={cartItem._id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Card
                      sx={{
                        height: "100px",
                        width: "100px",
                        display: "flex",
                      }}
                    >
                      <CardMedia
                        image={cartItem.productId.image}
                        sx={{
                          height: "100px",
                          width: "100px",
                        }}
                      />
                    </Card>
                  </Box>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h6" component="span">
                      {cartItem.productId.name}
                    </Typography>
                    <Typography variant="h5" component="span">
                      ₹ {cartItem.productId.price}
                    </Typography>
                    <div style={{ flexDirection: "row" }}>
                      <IconButton>
                        <RemoveIcon />
                      </IconButton>
                      <span>{cartItem.quantity}</span>
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
            // boxShadow: "0px 1px 8px -6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              paddingTop: "10px",
              paddingRight: "17px",
              boxShadow: "0px -1px 5px -3px",
            }}
          >
            <Typography sx={{ fontSize: "25px" }} component="span">
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                color: "red",
              }}
              component="span"
            >
              <CurrencyRupeeIcon sx={{ fontSize: "35px" }} />
              {cartTotal()}
            </Typography>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
export default Cart;
