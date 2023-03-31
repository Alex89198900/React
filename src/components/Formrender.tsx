import React from 'react';

interface CardForm {
  num: {
    id: string;
    name: string | undefined;
    photo: string;
    date: string | undefined;
    frame: string | undefined;
    conf: boolean | undefined;
    radio: string;
  };
}

function Formrender(props: CardForm) {
  return (
    <div className="card-form">
      <img src={props.num.photo} alt="" className="img-card" />
      <h3 className="title-card">{props.num.name}</h3>
      <div className="info-card">Date:{props.num.date}</div>
      <div className="info-card">Framework:{props.num.frame}</div>
      <div className="info-card">Language:{props.num.radio}</div>
    </div>
  );
}

export default Formrender;
