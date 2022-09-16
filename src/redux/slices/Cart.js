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

            console.log('item add ->', item)
            if (state.products.some(element => element.productId === item.productId)) {
                state.products.map(element => {
                    if (element.productId === item.productId) {
                        element.amountInCart += 1
                        state.totalPrice += item.cost;
                    }
                })                
            } else {
                state.products.push(item);
                state.totalPrice += item.cost;}
        },
        removeItem: (state, action) => {
            const item = action.payload
            console.log('item remove ->', item)
            if (state.products.some(element => element.productId === item.productId)) {
                state.products.map((element, index) => {
                    if (element.productId === item.productId) {
                        console.log('item to remove: ', element);
                        (element.amountInCart > 1)  ? element.amountInCart -= 1 : state.products.splice(index, 1)
                        console.log('item removed')
                        state.totalPrice -= element.cost
                    }})
                }
            else {
                alert('No such product in your cart yet!')
            }
        },
        getAmountInCart: (state, action) => {
            const item = action.payload
            console.log('return AmountInCart', item)
            if (state.products.some(element => element.productId === item.productId)) {
                    state.products.map((element) => {
                    if (element.productId === item.productId) {
                        console.log('itemAmount to get from: ', element);
                        return element.amountInCart;
                    }
                })
             } }
}})

export const { addItem, removeItem, getAmountInCart } = cartSlice.actions;
export default cartSlice.reducer;