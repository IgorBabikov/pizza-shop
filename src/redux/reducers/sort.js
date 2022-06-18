const initialState = {
   category: 0,
   sortBy: 'rating',
   search: '',
   currentPage: 1
}

const sort = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_CATEGORY':
         return {
            ...state,
            category: action.payload
         }

       case 'SET_SORTBY':
         return {
            ...state,
            sortBy: action.payload,
         }

       case 'SET_SEARCH':
         return {
            ...state,
            search: action.payload,
         }

       case 'SET_PAGE':
         return {
            ...state,
            currentPage: action.payload,
         }

      default: return state
   }
}


export default sort