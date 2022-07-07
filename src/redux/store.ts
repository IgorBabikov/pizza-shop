import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import pizzasSlice from "./pizzas/slice";
import sortSlice from "./sort/slice";
import cartSlice from "./cart/slice";
import formSlice from './form/slice';

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