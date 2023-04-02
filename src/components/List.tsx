import React from 'react';
import { data } from '../data';
import Card from './Card';
function List() {
  const listItems = data.map((el) => (
    <li key={el.id.toString()} className="item-card">
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
