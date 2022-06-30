import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
const key = process.env.REACT_APP_KEY;


type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

type fetchPizzasArgs = {
   currentPage: number;
   category: string;
   sorting: string;
   order: string;
 };

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  pizzas: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.LOADING,
};


export const fetchPizzas = createAsyncThunk<Pizza[], fetchPizzasArgs>('pizzas/fetchPizzas', async (params) => {
    const { currentPage, category, sorting, order } = params;
    
    const { data } = await axios.get<Pizza[]>(
      `https://${key}.mockapi.io/pizzas-list/?limit=4&page=${currentPage}${category}&sortBy=${sorting}&order=${order}`,
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
      state.pizzas = [];
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


export const selectPizzas = (state: RootState) => state.pizzasSlice;

export const { setAddPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
