import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   pizzasCart: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,

   reducers: {
      setAddPizzas(state, action) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload.id)

         findObj ? findObj.count++ : state.pizzasCart.push({...action.payload, count: 1})
         state.totalPrice = state.pizzasCart.reduce((prev, obj) => prev + (obj.price * obj.count), 0)
      },

      setCountMinus(state, action) {
         const findObj = state.pizzasCart.find(obj => obj.id === action.payload)
         if ( findObj.count !== 0) {
            findObj.count--
         }


         state.totalPrice = state.pizzasCart.reduce((prev, obj) => prev - obj.price, state.totalPrice)
      },

      setRemovePizzas(state, action) {
         state.pizzasCart = state.pizzasCart.filter(obj => obj.id !== action.payload)

      },

      setClearPizzas(state) {
         state.pizzasCart = []
      }
   }
})


export const selectCart = state => state.cartSlice
export const selectCartById = id => state => state.cartSlice.pizzasCart.find(obj => obj.id === id)

export const {setAddPizzas, setCountMinus, setRemovePizzas, setClearPizzas} = cartSlice.actions

export default cartSlice.reducer