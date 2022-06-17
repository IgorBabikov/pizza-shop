const initialState = {
   category: 'all',
   sortBy: 0
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

      default: return state
   }
}


export default sort