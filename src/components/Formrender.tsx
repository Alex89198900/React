import React from 'react';

interface CardForm {
  num: {
    id: string;
    name: string;
    photo: string;
    date: string;
    cars: string;
  };
}

class FormRender extends React.Component<CardForm> {
  constructor(props: CardForm) {
    super(props);
  }
  render() {
    return (
      <>
        <img src={this.props.num.photo} alt="" />
        <h3 className="title-card">{this.props.num.name}</h3>
        <div>Date:{this.props.num.date}</div>
        <div>Car:{this.props.num.cars}</div>
      </>
    );
  }
}

export default FormRender;
