import { createSlice} from '@reduxjs/toolkit'

const initialState = {
   category: 0,
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
      },
      setFilters(state, action) { 
         state.category = Number(action.payload.category)
         state.currentPage = Number(action.payload.currentPage)
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

export default sortSlice.reducer