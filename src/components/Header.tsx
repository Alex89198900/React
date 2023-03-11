import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/Aboutus';
import Notfound from '../pages/Notfoundpage';
import { Main } from '../pages/Main';
class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    );
  }
}

export default Header;
