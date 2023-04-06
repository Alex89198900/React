import React from 'react';
import Modal from './Modal';
import { CardType, setStupidData } from '../model';
export interface Product {
  num: {
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
  };
}

function Card(props: Product) {
  const [num, setNum] = React.useState<CardType[]>([]);
  const idToModal = String(props.num.id);
  function modal() {
    setStupidData(setNum, idToModal);
  }
  function modalOff() {
    setNum([]);
  }
  const buttonClick = num[0] ? 'knopka' : '';
  return (
    <div>
      <div onClick={modalOff}>{buttonClick}</div>
      <div onClick={modal} className="block-card">
        <Modal elem1={num} />
        <div>
          <img src={`${props.num.thumbnail}`} className="img-card"></img>
          <h3 className="title-card">{props.num.title}</h3>
          <div className="container-info-one">
            <div>{props.num.brand}</div>
            <div>{props.num.category}</div>
          </div>
          <div className="desc">{props.num.description}</div>
          <div className="price">Price:{props.num.price}$</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
