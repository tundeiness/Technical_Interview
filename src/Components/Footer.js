import React from 'react';

const Footer = () => (
  <div className="container-fluid footer_wrapper">
    <div className="container" id="footer">
      <div className="row flex-column align-items-md-center align-items-lg-center flex-md-row">
        <div className="col-12 d-flex justify-content-center justify-content-lg-start col-md-6 copyright">
          {' '}
          <span>&copy; 2021 Company. All Rights Reserved.</span>
        </div>
        <div className="col-md-6 col-12 d-flex flex-row justify-content-center justify-content-lg-end socials">
          <div className="socials_text_wrapper mr-lg-0">
            <span className="social_text d-inline ">Follow us on:</span>
            <i className="lni lni-facebook-original facebook" />
            <i className="lni lni-linkedin-original linkedin" />
            <i className="lni lni-twitter-original twitter" />
            <i className="lni lni-envelope envelope" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
