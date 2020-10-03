import React from 'react';
import Logo from './assets/images/logo.png';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export const NavBar = (color) => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center  header-transparent "
      >
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="font-pattaya">
              <Link to="\">
                <img src={Logo} alt="Logo" />
              </Link>
            </h1>
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link href="\">Home</Link>
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
                <Link to="/cart">
                  <Icon>shopping_cart</Icon>
                </Link>
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
