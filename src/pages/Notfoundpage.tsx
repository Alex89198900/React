import React from 'react';

class Notfound extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>ops 404</h1>
      </div>
    );
  }
}

// function Notfound() {
//   const error = useRouteError();
//   console.error(error);
//   return (
//     <div className="App">
//       <h1> Ops 404</h1>
//     </div>
//   );
// }

export { Notfound };
