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

async function getData(param = '') {
  const response = await fetch(`https://dummyjson.com/products/${param}`);
  const data = await response.json();
  return data;
}

export async function setData(callback: (arg: CardType[]) => void, param = ''): Promise<void> {
  const paramFilt = await filterData(param);
  const res = await getData(paramFilt);
  callback(res.products ?? []);
}
export async function setStupidData(
  callback: (arg: CardType[]) => void,
  param = ''
): Promise<void> {
  const res = await getData(param);
  callback([res]);
}
export async function filterData(cof: string) {
  const arrProd = await getData();
  let hostPar = '`search?q=smartphones`';
  arrProd.products.forEach((el: CardType) => {
    if (el.category.toLocaleLowerCase() === cof.toLocaleLowerCase()) {
      hostPar = `category/${cof.toLocaleLowerCase()}`;
    } else if (el.title.toLocaleLowerCase().includes(cof.toLocaleLowerCase())) {
      hostPar = `search?q=${cof.toLocaleLowerCase()}`;
    }
  });
  console.log(hostPar);
  return hostPar;
}
