 import {getPizzas} from '../../services/getPizzas'

 export const setFetchPizzas = (categories) => dispatch => {
   getPizzas(categories)
   .then((data) => dispatch(setPizzas(data)))
   dispatch(setLoaded(false))
 }

export const setLoaded = (loaded) => ({
   type: 'SET_LOADED',
   payload: loaded
})


export const setPizzas = (pizzas) => ({
   type: 'SET_PIZZAS',
   payload: pizzas
})