import React from 'react';

export const Carousel = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-end align-items-center"
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">
                Welcome to <span>Selecao</span>
              </h2>
              <p className="animated fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className="btn-get-started animated fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
              <p className="animated fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className="btn-get-started animated fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p className="animated fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className="btn-get-started animated fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <svg
          className="hero-waves"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
    </div>
  );
};
