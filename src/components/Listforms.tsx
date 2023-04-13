import { useAppSelector } from '../hooks/redux';
import React from 'react';
import { RootState } from 'store/store';
import { CustomElementType } from '../pages/Form';
import Formrender from './Formrender';

function Listform() {
  const { form } = useAppSelector((state: RootState) => state);
  const listItems = form.map((el: CustomElementType) => (
    <li key={el.id} className="item-form">
      <Formrender num={el} />
    </li>
  ));
  return <main className="main">{<ul className="list-card-form">{listItems}</ul>}</main>;
}

export default Listform;
