import React from 'react';
import { CustomElementType } from './Form';
import FormRender from './Formrender';

interface CardForm {
  elem: {
    arr: Array<CustomElementType>;
  };
}

class ListFormRender extends React.Component<CardForm> {
  constructor(props: CardForm) {
    super(props);
  }
  render() {
    console.log(this.props.elem.arr);
    const listItems = this.props.elem.arr.map((el: CustomElementType) => (
      <li key={el.id} className="iuuuu">
        <FormRender num={el} />
      </li>
    ));
    return (
      <main className="main">
        <ul className="kkkkk">{listItems}</ul>
      </main>
    );
  }
}

export default ListFormRender;
