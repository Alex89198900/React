import React, { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import Modal from './Modal';
import { CardType, setStupidData } from '../model';
import Sppiner from './Spinner';
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
  const [paramSpin, setparamSpin] = React.useState(false);
  const idToModal = String(props.num.id);
  const ref = useRef(null);
  function modalOff() {
    setNum([]);
    setparamSpin(false);
  }
  const handleClickOutside = () => {
    setNum([]);
    setparamSpin(false);
  };

  const handleClickInside = () => {
    setStupidData(setNum, idToModal);
    setparamSpin(true);
  };

  useOnClickOutside(ref, handleClickOutside);

  const buttonClick = num[0] ? 'knopka' : '';
  return (
    <div ref={ref} onClick={handleClickInside}>
      <div onClick={modalOff}>{buttonClick}</div>
      <div className="block-card">
        <Modal elem1={num} />
        {num.length === 0 && paramSpin === true && <Sppiner />}
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
