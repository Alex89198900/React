import React from 'react';
import Cards from '../components/Cards';
import Searchbar from '../components/Searchbar';
class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Main</h1>
        <Searchbar />
        <Cards />
      </div>
    );
  }
}

export default Main;
