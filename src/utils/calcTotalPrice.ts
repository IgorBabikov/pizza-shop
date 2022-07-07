import { CartItem } from "../redux/cart/types";

export const calcTotalPricePlus = (pizzasCart: CartItem[]) => {
 return pizzasCart.reduce((prev, obj) => prev + (obj.price * obj.count), 0)
}

export const calcTotalPriceMinus = (pizzasCart: CartItem[], totalPrice: number) => {
   return pizzasCart.reduce((prev, obj) => prev - obj.price, totalPrice)
  }