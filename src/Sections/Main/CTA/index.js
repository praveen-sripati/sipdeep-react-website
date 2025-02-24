import React from 'react';

export const CTA = () => {
  return (
    <div>
      <section id="cta" className="cta">
        <div className="container">
          <div className="row" data-aos="zoom-out">
            <div className="col-lg-9 text-center text-lg-left">
              <h3>Call To Action</h3>
              <p>
                {' '}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
