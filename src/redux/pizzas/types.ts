export type Pizza = {
   id: string;
   imageUrl: string;
   title: string;
   price: number;
   types: number[];
   sizes: number[];
 };

 export type fetchPizzasArgs = {
    currentPage: number;
    category: string;
    sorting: string;
    order: string;
  };

 export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
 }

 export interface PizzaSliceState {
   pizzas: Pizza[];
   status: Status;
 }
