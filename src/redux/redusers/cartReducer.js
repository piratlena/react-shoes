import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemInCart: [],
    orderSummary: 0,
    orderTotal: 0,
   
}

const sliceCartName = "cart"
const cartSlice = createSlice({
    name: sliceCartName,
    initialState: initialState,
    reducers: {
        addOneToCart: (state, action) => {
            const cartItem = state.itemInCart.find((item) => item.id === action.payload.id);
            if(cartItem) {
                cartItem.quantity++;
            } else {
                state.itemInCart.push({
                    ...action.payload,
                quantity: 1
            })
            }
            state.orderTotal = state.itemInCart.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
        },
        removeOneFromCart(state, action) {
            state.itemInCart = state.itemInCart.filter(item => item.id !== action.payload)
        },
        claerCart (state) {
            state.itemInCart = []
        }
    }
    
})
export const {addOneToCart, removeOneFromCart, claerCart} = cartSlice.actions
export default cartSlice.reducer;