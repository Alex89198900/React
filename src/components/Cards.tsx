import React from 'react';
import { data } from '../data';

class Cards extends React.Component {
  render() {
    const listItems = data.map((el) => (
      <li key={el.id.toString()} className="item-card">
        <img src={`${el.thumbnail}`} className="img-card"></img>
        <h3 className="title-card">{el.title}</h3>
        <div className="container-info-one">
          <div>{el.brand}</div>
          <div>{el.category}</div>
        </div>
        <div className="desc">{el.description}</div>
        <div className="price">Price:{el.price}$</div>
      </li>
    ));
    return (
      <main className="main">
        <ul className="list-cards">{listItems}</ul>
      </main>
    );
  }
}

export default Cards;
