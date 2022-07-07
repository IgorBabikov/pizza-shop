export type CartItem = {
   id: string;
   imageUrl: string;
   title: string;
   price: number;
   type: string;
   size: number;
   count: number;
}

export interface CartSliceState {
   totalPrice: number;
   pizzasCart: CartItem[];
}