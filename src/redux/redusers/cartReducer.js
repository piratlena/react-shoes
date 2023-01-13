import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemInCart: [],
    cartTotalCost: 0,
    cartTotalQuantity: 0
}

const sliceCartName = "cart"
const cartSlice = createSlice({
    name: sliceCartName,
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.itemInCart.find((item) => item.id === action.payload.id);
            if(cartItem) {
                cartItem.total++;
            } else {
                state.itemInCart.push(action.payload)
            }
        }
    }
})
export default cartSlice;