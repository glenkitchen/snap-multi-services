export interface Product {
  Category: string;
  Item: string;
  'Price (ZAR)': number | string;
}

export interface ProductWithId extends Product {
  id: string;
}