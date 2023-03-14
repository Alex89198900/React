import './App.scss';
import React from 'react';
import Header from './components/Header';
import { HashRouter } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Header />
        </HashRouter>
      </div>
    );
  }
}

export default App;
