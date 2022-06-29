import { configureStore } from '@reduxjs/toolkit'

import pizzasSlice from "./slices/pizzasSlice";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    pizzasSlice,
    sortSlice,
    cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>


type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store