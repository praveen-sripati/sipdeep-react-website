import React from 'react';

export const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>SipDeep</h3>
          <p>
            The best way to stay hydrated. Some people claim that alkaline water
            is better than anything you could get from the tap.
          </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>SipDeep</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
};
