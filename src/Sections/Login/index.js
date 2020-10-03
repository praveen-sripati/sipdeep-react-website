import React from 'react';
import Logo from './assets/images/logo.png';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import './styles.css'

export const Login = () => {
  return (
    <div>
      <header
        id="header"
        style={{ background: 'rgba(42, 44, 57, 0.9)' }}
        className="fixed-top d-flex align-items-center  header-transparent "
      >
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <h1 className="font-pattaya">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </h1>
          </div>
          <nav className="nav-menu d-lg-block">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">
                  <Icon>shopping_cart</Icon>
                </Link>
              </li>
              <li className="active">
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h3 className="card-title font-weight-bold text-center">Log in to SipDeep</h3>
            <div className="card-text">
              {/* <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                Incorrect username or password.
              </div> */}
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <a href="#" style={{ float: 'right', fontSize: '12px' }}>
                    Forgot password?
                  </a>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-color btn-block">
                  Sign in
                </button>

                <div className="sign-up">
                  Don't have an account? <a href="#">Create One</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
