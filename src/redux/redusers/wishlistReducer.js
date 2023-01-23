import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemInWishlist: [], 
    isWishlist: false 
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
                state.isWishlist=true
            } else {
                state.itemInWishlist.push({
                    ...action.payload,
                quantity: 1
            })
            state.isWishlist=true
            }
            state.orderTotal = state.itemInWishlist.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
            state.isWishlist=true
        },
        removeOneFromWishlist(state, action) {
            state.itemInWishlist = state.itemInWishlist.filter(item => item.id !== action.payload)
            state.isWishlist = false
        },
        claerWishlist (state) {
            state.itemInWishlist = []
            state.isWishlist = false
        }
    }
    
})
export const {addOneToWishList, removeOneFromWishlist, claerWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer;