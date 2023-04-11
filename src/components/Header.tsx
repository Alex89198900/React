import React from 'react';
import { Link } from 'react-router-dom';

type page = {
  title: string;
};
function Header(props: page) {
  return (
    <div className="about">
      <header className="header">
        <span className="title-header">Page: {props.title}</span>
        <Link to="/">Main</Link>
        <Link to="/about">About Us</Link>
        <Link to="/form">Form</Link>
      </header>
    </div>
  );
}

export default Header;
