import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import pizzasSlice from "./slices/pizzasSlice";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";
import formSlice from './slices/formSlice';

const store = configureStore({
  reducer: {
    pizzasSlice,
    sortSlice,
    cartSlice,
    formSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store