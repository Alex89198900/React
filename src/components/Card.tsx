import React from 'react';

interface Product {
  num: {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    thumbnail: string;
  };
}

class Card extends React.Component<Product> {
  constructor(props: Product) {
    super(props);
  }
  render() {
    return (
      <>
        <img src={`${this.props.num.thumbnail}`} className="img-card"></img>
        <h3 className="title-card">{this.props.num.title}</h3>
        <div className="container-info-one">
          <div>{this.props.num.brand}</div>
          <div>{this.props.num.category}</div>
        </div>
        <div className="desc">{this.props.num.description}</div>
        <div className="price">Price:{this.props.num.price}$</div>
      </>
    );
  }
}

export default Card;
