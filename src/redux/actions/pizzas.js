 import {getPizzas} from '../../services/getPizzas'

 export const setFetchPizzas = () => dispatch => {
   getPizzas()
   .then((data) => dispatch(setPizzas(data)))
 }

export const setIsLoading = (loading) => ({
   type: 'SET_LOADING',
   payload: loading
})


export const setPizzas = (pizzas) => ({
   type: 'SET_PIZZAS',
   payload: pizzas
})