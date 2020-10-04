import React, { useState } from 'react';

export const CartProduct = () => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-5 col-lg-3 col-xl-3">
          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img
              className="img-fluid w-100"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
              alt="Sample"
            />
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
                <p className="mb-3 text-muted text-uppercase small">Size: M</p>
              </div>
              <div>
                <div className="def-number-input number-input safari_only mb-0 w-100">
                  <div className="form-inline form-group">
                    <label htmlFor="productQuantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control ml-2"
                      id="productQuantity"
                      aria-describedby="Product Quantity"
                      min="1"
                      max="5"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(
                          Number(e.target.value) ? Number(e.target.value) : 1
                        )
                      }
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
                  <i className="fas fa-trash-alt mr-1"></i> Remove item{' '}
                </a>
              </div>
              <p className="mb-0">
                <span>
                  <strong>${(quantity * 17.99).toFixed(2)}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4" />
    </div>
  );
};
