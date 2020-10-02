import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel, NavBar, Main, Footer } from './Sections';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
