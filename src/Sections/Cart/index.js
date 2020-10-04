import React, { useState } from 'react';
import Logo from './assets/images/logo.png';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { CartProduct } from './components';
import './styles.css';

export const Cart = () => {

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
              <li className="active">
                <Link to="/cart">
                  <Icon>shopping_cart</Icon>
                </Link>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="container">
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-3">
                <div className="pt-4 wish-list">
                  <h5 className="mb-4">
                    Cart (<span>2</span> items)
                  </h5>
                  <CartProduct />
                  <CartProduct />
                </div>
              </div>

              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-4">Expected shipping delivery</h5>
                  <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-4">We accept</h5>

                  <img
                    className="mr-2"
                    width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="mr-2"
                    width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="mr-2"
                    width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="mr-2"
                    width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-3">The total amount of</h5>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Temporary amount
                      <span id="basic-example-price">$53,98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>The total amount of</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong id="basic-example-total">$53,98</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-color btn-block waves-effect waves-light"
                  >
                    Checkout
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <div className="pt-4">
                  <a
                    className="dark-grey-text d-flex justify-content-between"
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Add a discount code (optional)
                    <span>
                      <i className="fas fa-chevron-down pt-1"></i>
                    </span>
                  </a>

                  <div className="collapse" id="collapseExample">
                    <div className="mt-3">
                      <div className="md-form md-outline mb-0">
                        <input
                          type="text"
                          id="discount-code"
                          className="form-control font-weight-light"
                          placeholder="Enter discount code"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
