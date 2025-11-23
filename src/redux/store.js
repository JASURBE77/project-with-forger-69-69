import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slice/productsSlice"

export const store = configureStore({
    reducer: {
        server: movieSlice
    }
})