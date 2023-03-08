import React from 'react';
import { useRouteError } from 'react-router-dom';

function Notfound() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="App">
      <h1> Ops 404</h1>
    </div>
  );
}

export { Notfound };
