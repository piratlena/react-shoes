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
            state.orderSummary = state.itemInCart.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
        },
        claerCart (state) {
            state.itemInCart = []
            state.orderSummary = 0
            state.orderTotal = 0
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
                if (findItem.quantity < 1) {
                    findItem.quantity = 1
                }
            }
            state.orderSummary = state.itemInCart.reduce((sum, item) => {
                return (item.price * item.quantity) + sum;
            }, 0)
        }
    }
    
})
export const {addOneToCart, removeOneFromCart, claerCart, plusItem, minusItem} = cartSlice.actions
export default cartSlice.reducer;