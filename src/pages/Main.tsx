import React from 'react';
import Searchbar from '../components/Searchbar';
import List from '../components/List';
import Header from '../components/Header';
function Main() {
  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      <Searchbar />
      <List />
    </div>
  );
}

export default Main;
