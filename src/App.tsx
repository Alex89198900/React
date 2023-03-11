import './App.scss';
import React from 'react';
import Header from './components/Header';
import { HashRouter } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
        </HashRouter>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="header">
//         <Link to="/">Home</Link>
//         <Link to="/about">About Us</Link>
//       </header>
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
