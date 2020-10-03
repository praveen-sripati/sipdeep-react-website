import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carousel, NavBar, Main, Footer } from './Sections';
import './index.css';
import { Cart } from './Sections';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Carousel />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
