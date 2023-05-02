import React from 'react';
import Header from '../components/Header';

const contStyle = {
  color: 'red',
};
function About() {
  return (
    <div className="about">
      <Header title="about" />
      <h1 style={contStyle} className="title-about">
        About page
      </h1>
    </div>
  );
}

export default About;
