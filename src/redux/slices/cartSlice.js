import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   pizzas: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,

   reducers: {
      setAddPizzas(state, action) {
         const findObj = state.pizzas.find(obj => obj.id === action.payload.id)

         findObj ? findObj.count++ : state.pizzas.push({...action.payload, count: 1})
         state.totalPrice = state.pizzas.reduce((prev, obj) => prev + (obj.price * obj.count), 0)
      },

      setCountMinus(state, action) {
         const findObj = state.pizzas.find(obj => obj.id === action.payload)
         if ( findObj.count !== 0) {
            findObj.count--
         }


         state.totalPrice = state.pizzas.reduce((prev, obj) => prev - obj.price, state.totalPrice)
      },

      setRemovePizzas(state, action) {
         state.pizzas = state.pizzas.filter(obj => obj.id !== action.payload)

      },

      setClearPizzas(state) {
         state.pizzas = []
      }
   }
})

export const {setAddPizzas, setCountMinus, setRemovePizzas, setClearPizzas} = cartSlice.actions

export default cartSlice.reducer