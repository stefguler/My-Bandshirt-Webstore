import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../redux/slices/Shop"
import cartReducer from "../redux/slices/Cart"
import authReducer from "../redux/slices/Auth"

export default configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        token: authReducer,
    }
});