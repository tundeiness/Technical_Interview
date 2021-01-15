import React from 'react';

const Contact = () => (
  <div className="container-fluid" id="contact_section">
    <div className="row">
      <div className="col-12 d-flex flex-column justify-content-center contact_heading_wrapper">
        <h1 className="d-inline contact_heading">Convinced to work with us?</h1>
        <h4 className="d-inline contact_subheading">
          Company has helped agencies keep their promises to clients since 2005
        </h4>
      </div>
      <div className="col-12 contact_content">
        <div className="row">
          <div className="col-md-3 col-12" />
          <div className="col-md-6 col-12">
            <div className="row g-3  details">
              <div className="col-md-4 col-12 pb-2 pb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fullname"
                  aria-label="Fullname"
                />
              </div>
              <div className="col-md-4 col-12 pb-2 pb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>
              <div className="col-md-4 col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />
              </div>
            </div>
            <div className="row g-3 message">
              <div className="col-12">
                <textarea
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  placeholder="Message in brief"
                  rows="5"
                />
              </div>
            </div>
            <div className="col-auto btn_wrapper">
              <button type="submit" className="btn_submit" id="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-3 col-12" />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
