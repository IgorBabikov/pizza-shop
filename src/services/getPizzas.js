import axios from "axios"

const key = process.env.REACT_APP_KEY

 export const getPizzas = async (category) => {
   const res = await axios.get(`https://${key}.mockapi.io/pizzas-list/?category=${category > 0 ? category : ''}`)
   return res.data
}



