import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { calcTotalPricePlus, calcTotalPriceMinus } from '../../utils/calcTotalPrice';
import { getCartLC } from '../../utils/getCartLC';
import { CartItem, CartSliceState } from '../cart/types';


const initialState: CartSliceState = getCartLC()


const cartSlice = createSlice({
   name: 'cart',
   initialState,

   reducers: {
      setAddPizzas(state, action: PayloadAction<CartItem>) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload.id)

         findObj ? findObj.count++ : state.pizzasCart.push({...action.payload, count: 1})

         state.totalPrice = calcTotalPricePlus(state.pizzasCart)
      },

      setCountMinus(state, action: PayloadAction<string>) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload)

         state.totalPrice = calcTotalPriceMinus(state.pizzasCart, state.totalPrice)

         if (findObj && findObj.count !== 0) {
           findObj.count--
         }
      },

      setRemovePizzas(state, action: PayloadAction<string>) {
         state.pizzasCart = state.pizzasCart.filter(obj => obj.id !== action.payload)

      },

      setClearPizzas(state) {
         state.pizzasCart = []
      }
   }
})



export const {setAddPizzas, setCountMinus, setRemovePizzas, setClearPizzas} = cartSlice.actions

export default cartSlice.reducer