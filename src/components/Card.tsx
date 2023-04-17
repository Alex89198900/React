import React, { useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import Modal from './Modal';
import { CardType } from '../model';
import Sppiner from './Spinner';
import { useLazyGetStoreDataQuery } from '../store/redusers/apireduser';
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
  const [fetchTrigger, { data, isLoading }] = useLazyGetStoreDataQuery();
  const idToModal = String(props.num.id);
  const ref = useRef(null);
  function modalOff() {
    setNum([]);
  }

  const handleClickOutside = () => {
    setNum([]);
  };

  const handleClickInside = () => {
    setparamSpin(true);
    if (data) {
    }
    setparamSpin(true);
  };
  useEffect(() => {
    async function fetchData() {
      if (paramSpin) fetchTrigger(idToModal);
      if (data) {
        setNum([data]);
      }
    }
    setparamSpin(false);
    fetchData();
  }, [data, fetchTrigger, idToModal, paramSpin]);

  useOnClickOutside(ref, handleClickOutside);

  const buttonClick = num[0] ? 'X' : '';
  const className = num[0] ? 'modal-active' : '';
  return (
    <div className="block-container">
      <div className={className}></div>
      <div onClick={modalOff} className="btn-off">
        {buttonClick}
      </div>
      <div className="block-card" ref={ref} onClick={handleClickInside}>
        <div>
          <div ref={ref} onClick={handleClickInside}>
            <Modal elem1={num} />
          </div>
        </div>
        {isLoading && <Sppiner />}
        <div>
          <img src={`${props.num.thumbnail}`} className="img-card"></img>
          <h3 className="title-card">{props.num.title}</h3>
          <div className="price">Price:{props.num.price}$</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
