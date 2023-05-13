import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../reducers/userReducer";
import cartSlice from "../reducers/cartSlice";

export default configureStore({
  reducer: {
    authUser: authUserReducer,
    cart: cartSlice.reducer,
  },
});
