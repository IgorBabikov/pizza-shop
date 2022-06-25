import { configureStore } from '@reduxjs/toolkit'

import pizzasSlice from "./slices/pizzasSlice";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    pizzasSlice,
    sortSlice,
    cartSlice
  }
})

export default store