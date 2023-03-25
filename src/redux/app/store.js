import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../reducers/userReducer";

export default configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});
