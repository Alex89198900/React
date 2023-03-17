import './App.scss';
import React from 'react';
import Routeses from './components/Router';
import { HashRouter } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <HashRouter>
            <Routeses />
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
