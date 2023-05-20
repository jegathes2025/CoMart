import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "../slice/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
