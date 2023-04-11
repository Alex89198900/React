import React from 'react';
import Card from './Card';
import { CardType } from '../model';

export interface CardForm {
  elem: Array<CardType>;
  find?: boolean;
}
function List(props: CardForm) {
  const not = props.elem.length === 0 && props.find === true ? 'Not found' : '';
  const listItems = props.elem.map((el: CardType) => (
    <li key={el.id} className="item-card">
      <Card num={el} />
    </li>
  ));
  return (
    <main className="main">
      <h1>{not}</h1>
      <ul className="list-cards">{listItems}</ul>
    </main>
  );
}

export default List;
