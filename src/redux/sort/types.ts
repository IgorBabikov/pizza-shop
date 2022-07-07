export type Sort = {
   name: string;
   type: string;
}

export interface FilterSliceState {
   categoryId: number;
   sortBy: Sort;
   search: string;
   currentPage: number;
}