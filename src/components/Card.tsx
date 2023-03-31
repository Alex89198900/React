import React from 'react';

interface Product {
  num: {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    thumbnail: string;
  };
}

function Card(props: Product) {
  return (
    <>
      <img src={`${props.num.thumbnail}`} className="img-card"></img>
      <h3 className="title-card">{props.num.title}</h3>
      <div className="container-info-one">
        <div>{props.num.brand}</div>
        <div>{props.num.category}</div>
      </div>
      <div className="desc">{props.num.description}</div>
      <div className="price">Price:{props.num.price}$</div>
    </>
  );
}

export default Card;
