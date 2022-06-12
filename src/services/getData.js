import axios from "axios"

const key = process.env.REACT_APP_KEY

export const getPizzas = async () => {
   try {
     const res = await axios.get(`https://${key}.mockapi.io/pizzas-list`)
     return res.data
   } catch(e) {
      throw e
   }
}