import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0
    },
    reducers: {

        addItem: (state, action) => {
            let item = action.payload
            if (state.products.some(element => element.productId === item.productId)) {
                state.products.map(element => {
                    if (element.productId === item.productId) {
                        element.amountInCart += 1
                        state.totalPrice += item.cost;
                    }
                })
            } else {
                state.products.push(item);
                state.totalPrice += item.cost;
            }
        },

        removeItem: (state, action) => {
            const item = action.payload
            if (state.products.some(element => element.productId === item.productId)) {
                state.products.map((element, index) => {
                    if (element.productId === item.productId) {
                        console.log('item to remove: ', element);
                        (element.amountInCart > 1) ? element.amountInCart -= 1 : state.products.splice(index, 1)
                        console.log('item removed')
                        state.totalPrice -= element.cost
                    }
                })
            }
            else {
                alert('No such product in your cart yet!')
            }
        },

        clearCart: (state) => {
            if (state.products.length !== 0) {
            state.products = [];
            state.totalPrice = 0;}
            else {
                alert('Your cart is empty yet....')
            }
        },

        addItemFromCart: (state, action) => {
            let itemId = action.payload
            state.products.map(element => {
                if (element.productId === itemId) {
                    element.amountInCart += 1
                    state.totalPrice += element.cost;
                }
            })
        },

        removeItemFromCart: (state, action) => {
            let itemId = action.payload
            let removeIndex = undefined;
            state.products.map((element, idx) => {
                if (element.productId === itemId) {
                    if (element.amountInCart > 1) {
                        element.amountInCart -= 1
                        state.totalPrice -= element.cost;
                    }
                    else { removeIndex = idx; }
                }})
                if (removeIndex !== undefined) {
                    state.totalPrice -= state.products[removeIndex].cost;
                    state.products.splice(removeIndex, 1)
                }
        }
    }
})


export const { addItem, removeItem, getAmountInCart, clearCart, addItemFromCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;