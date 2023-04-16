import fetch from 'cross-fetch';

export interface CardType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export async function getData(param = '') {
  const response = await fetch(`https://dummyjson.com/products/${param}`);
  const data = await response.json();
  return data;
}
