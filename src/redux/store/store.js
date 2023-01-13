import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from '../redusers/cartReducer'


export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

