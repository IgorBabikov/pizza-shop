import axios from "axios"

const key = process.env.REACT_APP_KEY

 export const getPizzas = async (category, sortBy) => {
   const categories = category > 0 ? category : '';
   const sorting = sortBy.replace('-', '')
   const order = sortBy.includes('-') ? 'asc' : 'desc'


   const res = await axios.get(`https://${key}.mockapi.io/pizzas-list/?category=${categories}&sortBy=${sorting}&order=${order}`)
   return res.data
}



