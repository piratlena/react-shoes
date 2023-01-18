import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemInWishlist: [],  
}

const sliceCartName = "wishlist"
const wishlistSlice = createSlice({
    name: sliceCartName,
    initialState: initialState,
    reducers: {
        addOneToWishList: (state, action) => {
            const wishlistItem = state.itemInWishlist.find((item) => item.id === action.payload.id);
            if(wishlistItem) {
                wishlistItem.quantity++;
            } else {
                state.itemInCart.push({
                    ...action.payload,
                quantity: 1
            })
            }
            state.orderTotal = state.itemInWishlist.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
        },
        removeOneFromWishlist(state, action) {
            state.itemInCart = state.itemInWishlist.filter(item => item.id !== action.payload)
        },
        claerWishlist (state) {
            state.itemInWishlist = []
        }
    }
    
})
export const {addOneToWishList, removeOneFromWishlist, claerWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer;