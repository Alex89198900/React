import React from 'react';

import { CardType } from '../model';

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
  const price = props.elem1[0] ? 'Prise:' + props.elem1[0]?.price : '';
  return (
    <div className="modal-guts" style={props.elem1[0] && contStyle}>
      <img
        src={props.elem1[0]?.thumbnail}
        style={props.elem1[0] && imgStyle}
        className="img-modal"
      ></img>
      <h3 className="title-modal">{props.elem1[0]?.title}</h3>
      <div className="container-info-modal">
        <div>{props.elem1[0]?.brand}</div>
        <div>{props.elem1[0]?.category}</div>
      </div>
      <div className="desc-modal">{props.elem1[0]?.description}</div>
      <div className="price-modal">{price}</div>
    </div>
  );
}

export default Modal;
