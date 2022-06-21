import { configureStore } from '@reduxjs/toolkit'

import pizzas from "./slices/pizzas";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    pizzas,
    sortSlice,
    cartSlice
  }
})

export default store