const initialState = {
   loading: true,
   pizzas: []
}

const pizzas = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_LOADING':
         return {
            ...state,
            loading: action.payload
         }

         case 'SET_PIZZAS':
         return {
            ...state,
            pizzas: action.payload,
            loading: false
         }

      default: return state
   }
}


export default pizzas