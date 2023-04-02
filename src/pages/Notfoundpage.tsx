import React from 'react';
import Header from '../components/Header';
function Notfound() {
  return (
    <div className="error">
      <Header title="404" />
      <h1>ops 404</h1>
    </div>
  );
}

export default Notfound;
