import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemInWishlist: [],
  isWishlist: false,
};

const sliceCartName = "wishlist";
const wishlistSlice = createSlice({
  name: sliceCartName,
  initialState: initialState,
  reducers: {
    addOneToWishList: (state, action) => {
      const wishlistItem = state.itemInWishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!wishlistItem) {
        state.itemInWishlist.push({ ...action.payload, status: true });
      } else {
        wishlistItem.status = false;
      }
    },
    removeOneFromWishlist(state, action) {
      state.itemInWishlist = state.itemInWishlist.filter(
        (item) => item.id !== action.payload
      );
      state.itemInWishlist.status = false;
    },
    claerWishlist(state) {
      state.itemInWishlist = [];
      state.itemInWishlist.status = false;
    },
  },
});
export const { addOneToWishList, removeOneFromWishlist, claerWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
