import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from '../redusers/cartReducer';
import wishlistSlice from '../redusers/wishlistReducer';


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
})

