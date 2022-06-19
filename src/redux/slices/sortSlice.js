import { createSlice} from '@reduxjs/toolkit'

const initialState = {
   category: 0,
   sortBy: 'rating',
   search: '',
   currentPage: 1
}

const sortSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setSortCategory(state, action) {
         state.category = action.payload
      },
      setSortBy(state, action) {
         state.sortBy = action.payload
      },
      setSearch(state, action) {
         state.search = action.payload
      },
      setPage(state, action) {
         state.currentPage = action.payload
      }
   }
})

export const {
   setSortCategory,
   setSortBy,
   setSearch,
   setPage
} = sortSlice.actions;

export default sortSlice.reducer