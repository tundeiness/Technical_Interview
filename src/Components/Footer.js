import React from 'react';

const Footer = () => (
  <div className="container-fluid footer_wrapper">
    <div className="container" id="footer">
      <div className="row flex-column align-items-lg-center flex-md-row mt-lg-4">
        <div className="col-12 col-md-6 copyright">
          {' '}
          <p>&copy; 2021 Company. All Rights Reserved</p>
        </div>
        <div className="col-md-6 col-12 d-flex flex-row justify-content-lg-end socials">
          <div className="socials_text_wrapper mr-lg-0">
            <p className="social_text d-inline ">Follow us on:</p>
            <i className="lni lni-facebook-original facebook" />
            <i className="lni lni-linkedin-original linkedin" />
            <i className="lni lni-twitter-original twitter" />
            <i className="lni lni-envelope envelope" />
          </div>
          <div className="d-inline social_icon_wrapper" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
