import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Setting up the Redux Store.. set the DevTools to be true..

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
    devTools: true
})