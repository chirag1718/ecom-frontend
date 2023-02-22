// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// let token = localStorage.getItem("auth-token");
// const Router = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={"Hello this is Home Page"} />
//       {token ? (
//         <>
//           {/* Login */}
//           <Route exact path="/login" element={<Navigate to="/" />} />

//           {/* SignUp */}
//           <Route exact path="/signup" element={<Navigate to="/" />} />
//         </>
//       ) : (
//         <>

//         </>
//       )}
//     </Routes>
//   );
// };

// export default Router;
// 