import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    itemInCart: [],
    orderSummary: 0,
    orderTotal: 0,
    tax: 0,
}

const sliceCartName = "cart"
const cartSlice = createSlice({
    name: sliceCartName,
    initialState: initialState,
    reducers: {
        addOneToCart: (state, action) => {
            const findItem = state.itemInCart.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.quantity++
            } else {
                state.itemInCart.push({...action.payload, quantity: 1})
            }
           state.orderSummary = state.itemInCart.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
        },
        removeOneFromCart(state, action) {
            state.itemInCart = state.itemInCart.filter(item => item.id !== action.payload)
        },
        claerCart (state) {
            state.itemInCart = []
        },
        plusItem (state, action) {
            const findItem = state.itemInCart.find(obj => obj.id === action.payload)
            
            if (findItem) {
                findItem.quantity++
            }
        },
        minusItem (state, action) {
            const findItem = state.itemInCart.find(obj => obj.id === action.payload)
            
            if (findItem) {
                findItem.quantity--
                if (findItem.quantity < 0) {
                    findItem.quantity = 0
                }
            }
        }
    }
    
})
export const {addOneToCart, removeOneFromCart, claerCart, plusItem, minusItem} = cartSlice.actions
export default cartSlice.reducer;