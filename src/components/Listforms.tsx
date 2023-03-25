import React from 'react';
import { CustomElementType } from '../pages/Form';
import Formrender from './Formrender';

interface CardForm {
  elem: {
    arr: Array<CustomElementType>;
  };
}

class Listform extends React.Component<CardForm> {
  constructor(props: CardForm) {
    super(props);
  }
  render() {
    console.log(this.props.elem.arr);
    const listItems = this.props.elem.arr.map((el: CustomElementType) => (
      <li key={el.id} className="item-form">
        <Formrender num={el} />
      </li>
    ));
    return (
      <main className="main">
        <ul className="list-card-form">{listItems}</ul>
      </main>
    );
  }
}

export default Listform;
