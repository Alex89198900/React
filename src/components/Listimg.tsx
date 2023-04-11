import React from 'react';

export interface CardForm {
  elem: Array<string>;
  callback: (arg: string) => void;
}
function Listimg(props: CardForm) {
  let key = 1;
  const setData = (param: string) => {
    props.callback(param);
  };

  const listItems = props.elem?.map((el: string) => (
    <li key={key++} className="item-img" onClick={() => setData(el)}>
      <img src={el} alt="" className="img-icon" />
    </li>
  ));
  return (
    <div className="img-cont">
      <ul className="list-img">{listItems}</ul>
    </div>
  );
}

export default Listimg;
