import { configureStore } from '@reduxjs/toolkit'

import pizzas from "./slices/pizzas";
import sortSlice from "./slices/sortSlice";

const store = configureStore({
  reducer: {
    pizzas,
    sortSlice
  }
})

export default store