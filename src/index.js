import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carousel, NavBar, Main, Footer, Cart, Login } from './Sections';
import './index.css';

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
        <Route exact path="/login">
          <Login />
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
