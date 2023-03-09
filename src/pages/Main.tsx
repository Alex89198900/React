import React from 'react';
import Cards from '../components/Cards';
class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Main</h1>
        <Cards />
      </div>
    );
  }
}

// function Main() {
//   return (
//     <div className="main">
//       <h1>Main</h1>
//     </div>
//   );
// }

export { Main };
