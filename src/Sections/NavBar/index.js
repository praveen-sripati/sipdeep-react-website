import React from 'react';
import Logo from './assets/images/logo.png';
import Icon from '@material-ui/core/Icon';

export const NavBar = () => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center  header-transparent "
      >
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="font-pattaya">
              <a href="index.html">
                <img src={Logo} alt="Logo" />
              </a>
            </h1>
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Our Products</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              {/* <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="drop-down">
                <a href="">Drop Down</a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Drop Down 2</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 5</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#cart">
                  <Icon>shopping_cart</Icon>
                </a>
              </li>
              <li>
                <a href="#signIn">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
