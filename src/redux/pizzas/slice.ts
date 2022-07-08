import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzasArgs, Pizza, PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.LOADING,
};


export const fetchPizzas = createAsyncThunk<Pizza[], fetchPizzasArgs>('pizzas/fetchPizzas', async (params) => {
    const { page, category, sorting, order, search } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://62a54ce7430ba53411c504a9.mockapi.io/pizzas-list/?limit=4${page}${category}&sortBy=${sorting}&order=${order}&search=${search}`,
    );
    return data;
  },
);


const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setAddPizzas(state, action: PayloadAction<Pizza[]>) {
      state.pizzas = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;

    });
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.status = Status.SUCCESS;
      });
      builder.addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.pizzas = [];
      });
  },
});



export const { setAddPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
