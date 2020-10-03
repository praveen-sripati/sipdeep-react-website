import React from 'react';
import Logo from './assets/images/logo.png';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
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

                  <div className="row mb-4">
                    <div className="col-md-5 col-lg-3 col-xl-3">
                      <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img
                          className="img-fluid w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                          alt="Sample"
                        />
                        {/* <a href="#!">
                          <div className="mask waves-effect waves-light">
                            <img
                              className="img-fluid w-100"
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                            />
                            <div className="mask rgba-black-slight waves-effect waves-light"></div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Blue denim shirt</h5>
                            <p className="mb-3 text-muted text-uppercase small">
                              Shirt - blue
                            </p>
                            <p className="mb-2 text-muted text-uppercase small">
                              Color: blue
                            </p>
                            <p className="mb-3 text-muted text-uppercase small">
                              Size: M
                            </p>
                          </div>
                          <div>
                            <div className="def-number-input number-input safari_only mb-0 w-100">
                              <div className="form-inline form-group">
                                <label htmlFor="productQuantity">
                                  Quantity
                                </label>
                                <input
                                  type="number"
                                  className="form-control ml-2"
                                  id="productQuantity"
                                  aria-describedby="Product Quantity"
                                  min="1"
                                  max="5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase mr-3"
                            >
                              <i className="fas fa-trash-alt mr-1"></i> Remove
                              item{' '}
                            </a>
                          </div>
                          <p className="mb-0">
                            <span>
                              <strong>$17.99</strong>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row mb-4">
                    <div className="col-md-5 col-lg-3 col-xl-3">
                      <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img
                          className="img-fluid w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                          alt="Sample"
                        />
                        {/* <a href="#!">
                          <div className="mask waves-effect waves-light">
                            <img
                              className="img-fluid w-100"
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                            />
                            <div className="mask rgba-black-slight waves-effect waves-light"></div>
                          </div>
                        </a> */}
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Red hoodie</h5>
                            <p className="mb-3 text-muted text-uppercase small">
                              Shirt - red
                            </p>
                            <p className="mb-2 text-muted text-uppercase small">
                              Color: red
                            </p>
                            <p className="mb-3 text-muted text-uppercase small">
                              Size: M
                            </p>
                          </div>
                          <div>
                            <div className="def-number-input number-input safari_only mb-0 w-100">
                              <div className="form-inline form-group">
                                <label htmlFor="productQuantity">
                                  Quantity
                                </label>
                                <input
                                  type="number"
                                  className="form-control ml-2"
                                  id="productQuantity"
                                  aria-describedby="Product Quantity"
                                  min="1"
                                  max="5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase mr-3"
                            >
                              <i className="fas fa-trash-alt mr-1"></i> Remove
                              item{' '}
                            </a>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase"
                            ></a>
                          </div>
                          <p className="mb-0">
                            <span>
                              <strong id="summary">$35.99</strong>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-primary mb-0">
                    <i className="fas fa-info-circle mr-1"></i> Do not delay the
                    purchase, adding items to your cart does not mean booking
                    them.
                  </p>
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
                    go to checkout
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
