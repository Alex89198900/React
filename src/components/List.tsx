import React from 'react';
import Card from './Card';
import { CardType } from '../model';

interface CardForm {
  elem: Array<CardType>;
}
function List(props: CardForm) {
  console.log(props);
  const listItems = props.elem.map((el: CardType) => (
    <li key={el.id} className="item-card">
      <Card num={el} />
    </li>
  ));
  return (
    <main className="main">
      <ul className="list-cards">{listItems}</ul>
    </main>
  );
}

export default List;
