import React, { useEffect } from 'react';

import { CardType } from '../model';
import Listimg from './Listimg';

interface ModalType {
  elem1: Array<CardType>;
}
const imgStyle = {
  width: '400px',
  height: '250px',
};
const contStyle = {
  width: '400px',
  height: '550px',
  background: '#778899',
};

function Modal(props: ModalType) {
  const price = props.elem1[0] ? 'Prise:' + props.elem1[0]?.price + '$' : '';
  const rating = props.elem1[0] ? 'Rating:' + props.elem1[0]?.rating : '';
  const discount = props.elem1[0] ? 'Discount:' + props.elem1[0]?.discountPercentage + '%' : '';
  const initial = props.elem1[0]?.thumbnail;
  const [image, setImage] = React.useState<string>();
  useEffect(() => {
    setImage(initial);
  }, [initial]);
  return (
    <div className="modal-guts" style={props.elem1[0] && contStyle}>
      <img src={image} style={props.elem1[0] && imgStyle} className="img-modal"></img>
      <h3 className="title-modal">{props.elem1[0]?.title}</h3>
      <div className="container-info-modal">
        <div>{props.elem1[0]?.brand}</div>
        <div>{props.elem1[0]?.category}</div>
      </div>
      <div className="desc-modal">{props.elem1[0]?.description}</div>
      <div className="block-modal-info">
        <div className="price-modal">{price}</div>
        <div className="rating-modal">{rating}</div>
        <div className="price-discount">{discount}</div>
      </div>
      <Listimg elem={props.elem1[0]?.images} callback={setImage} />
    </div>
  );
}

export default Modal;
