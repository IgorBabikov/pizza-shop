import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store'

type Sort = {
   name: string;
   type: string;
}

export interface FilterSliceState {
   categoryId: number ;
   sortBy: Sort;
   search: string;
   currentPage: number;
}

 const initialState: FilterSliceState = {
   categoryId: 0,
   sortBy: {
      name: 'популярности (DESC)',
      type: 'rating'
   },
   search: '',
   currentPage: 1
}

const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      setSortCategory(state, action: PayloadAction<number>) {
         state.categoryId = action.payload
      },
      setSortBy(state, action: PayloadAction<Sort>) {
         state.sortBy = action.payload
      },
      setSearch(state, action: PayloadAction<string>) {
         state.search = action.payload
      },
      setPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload
      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
         state.categoryId = action.payload.categoryId
         state.currentPage = action.payload.currentPage
         state.sortBy = action.payload.sortBy
      }
   }
})

export const {
   setSortCategory,
   setSortBy,
   setSearch,
   setPage,
   setFilters

} = sortSlice.actions;

export const selectSort = (state: RootState) => state.sortSlice

export default sortSlice.reducer