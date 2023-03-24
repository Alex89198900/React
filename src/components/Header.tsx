import React from 'react';
import { Link } from 'react-router-dom';

type page = {
  title: string;
};
class Header extends React.Component<page> {
  constructor(props: page) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <header className="header">
          <span className="title-header">Page: {this.props.title}</span>
          <Link to="/">Main</Link>
          <Link to="/about">About Us</Link>
          <Link to="/form">Form</Link>
        </header>
      </div>
    );
  }
}

export default Header;
