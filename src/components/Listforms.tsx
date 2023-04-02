import React from 'react';
import { CustomElementType } from '../pages/Form';
import Formrender from './Formrender';

interface CardForm {
  elem: Array<CustomElementType>;
}

function Listform(props: CardForm) {
  const listItems = props.elem.map((el: CustomElementType) => (
    <li key={el.id} className="item-form">
      <Formrender num={el} />
    </li>
  ));
  return <main className="main">{<ul className="list-card-form">{listItems}</ul>}</main>;
}

export default Listform;
