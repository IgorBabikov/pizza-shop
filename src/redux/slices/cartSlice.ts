import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store';

export type CartItem = {
   id: string;
   imageUrl: string;
   title: string;
   price: number;
   type: string;
   size: number;
   count: number;
}

interface CartSliceState {
   totalPrice: number;
   pizzasCart: CartItem[];
}

const initialState: CartSliceState = {
   totalPrice: 0,
   pizzasCart: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,

   reducers: {
      setAddPizzas(state, action: PayloadAction<CartItem>) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload.id)

         findObj ? findObj.count++ : state.pizzasCart.push({...action.payload, count: 1})
         state.totalPrice = state.pizzasCart.reduce((prev, obj) => prev + (obj.price * obj.count), 0)
      },

      setCountMinus(state, action: PayloadAction<string>) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload)

         findObj && findObj.count !== 0 ? findObj.count--: null

         state.totalPrice = state.pizzasCart.reduce((prev, obj) => prev - obj.price, state.totalPrice)
      },

      setRemovePizzas(state, action: PayloadAction<string>) {
         state.pizzasCart = state.pizzasCart.filter(obj => obj.id !== action.payload)

      },

      setClearPizzas(state) {
         state.pizzasCart = []
      }
   }
})


export const selectCart = (state: RootState) => state.cartSlice
export const selectCartById = (id: string) => (state: RootState) => state.cartSlice.pizzasCart.find(obj => obj.id === id)

export const {setAddPizzas, setCountMinus, setRemovePizzas, setClearPizzas} = cartSlice.actions

export default cartSlice.reducer