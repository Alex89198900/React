import React from 'react';

interface CardForm {
  num: {
    id: string;
    name: string;
    photo: string;
    date: string;
    frame: string;
    radio: string;
  };
}

class Formrender extends React.Component<CardForm> {
  constructor(props: CardForm) {
    super(props);
  }
  render() {
    return (
      <div className="card-form">
        <img src={this.props.num.photo} alt="" className="img-card" />
        <h3 className="title-card">{this.props.num.name}</h3>
        <div className="info-card">Date:{this.props.num.date}</div>
        <div className="info-card">Framework:{this.props.num.frame}</div>
        <div className="info-card">Language:{this.props.num.radio}</div>
      </div>
    );
  }
}

export default Formrender;
