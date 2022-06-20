import axios from "axios"

const key = process.env.REACT_APP_KEY

 export const getPizzas = async (category, sortBy, currentPage) => {
   const categories = category > 0 ? category : '';
   const sorting = sortBy.type.replace('-', '')
   const order = sortBy.type.includes('-') ? 'asc' : 'desc'


   const res = await axios.get(`https://${key}.mockapi.io/pizzas-list/?limit=4&page=${currentPage}&category=${categories}&sortBy=${sorting}&order=${order}`)
   return res.data
}



