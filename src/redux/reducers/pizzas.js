const initialState = {
   loaded: false,
   pizzas: []
}

const pizzas = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_LOADED':
         return {
            ...state,
            loaded: action.payload
         }

         case 'SET_PIZZAS':
         return {
            ...state,
            pizzas: action.payload,
            loaded: true
         }

      default: return state
   }
}


export default pizzas