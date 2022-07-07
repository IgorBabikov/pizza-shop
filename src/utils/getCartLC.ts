import { calcTotalPricePlus } from "./calcTotalPrice"

 export const getCartLC = () => {
   const data = localStorage.getItem('pizzasCart')
   const pizzasCart = data ? JSON.parse(data) : []
   const totalPrice = calcTotalPricePlus(pizzasCart)

   return {
      pizzasCart,
      totalPrice
   }
}