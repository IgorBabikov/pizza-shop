import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios"
const key = process.env.REACT_APP_KEY

export const fetchPizzas = createAsyncThunk( 'pizzas/fetchPizzas', async (params) => {
   const {currentPage, categories, sorting, order} = params
    const {data} = await axios.get(`https://${key}.mockapi.io/pizzas-list/?limit=4&page=${currentPage}&category=${categories}&sortBy=${sorting}&order=${order}`)
     return data
   }
 )


const initialState = {
   pizzas: [],
   status: 'loading'
}

const cartSlice = createSlice({
   name: 'pizzas',
   initialState,

   extraReducers: {
      [fetchPizzas.pending]:(state) => {
         state.status = 'loading'
         state.pizzas = []
      },

      [fetchPizzas.fulfilled]:(state, action) => {
         state.pizzas = action.payload
         state.status = 'success'
      },

      [fetchPizzas.rejected]:(state) => {
         state.status = 'error'
         state.pizzas = []
      },
   }
})

export const {setPizzas} = cartSlice.actions

export default cartSlice.reducer