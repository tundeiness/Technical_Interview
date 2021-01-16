import React from 'react';

const Testimonial = () => (
  <div className="container-fluid" id="testimonial_section">
    <div className="row">
      <div className="col-12 d-flex flex-row justify-content-center wrap">
        <p className="d-inline testimonial_heading">Testimonials</p>
      </div>
      <div className="col-12 testimonial_content">
        <div className="row flex-column flex-md-row">
          <div className="col-lg-4 col-12">
            <div className="d-flex flex-column talk-bubble tri-right btm-right">
              <div className="talktext ">
                <i className="lni lni-quotation lni-rotate-180 quotation" />
                <p className="d-inline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed nulla eget quam varius fermentum sed vitae felis.
                  Vivamus lacus purus, malesuada a malesuada in, rutrum et
                  lectus.
                </p>
              </div>
            </div>

            <div className="card d-flex flex-row ml-1 mr-1 testee_wrapper">
              <div className=" summary-img">
                <img
                  src="https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png"
                  className="card-img img-fluid"
                  alt="image_name"
                />
              </div>
              <div className=" summary-content">
                <div className="content-card">
                  <span className="card-title ">CLIENT NAME</span>
                  <p className="position">Position, ORG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-none d-md-block">
            <div className="d-flex w-75 talk-bubble tri-right btm-right">
              <div className="talktext">
                <i className="lni lni-quotation lni-rotate-180 quotation" />
                <p className="d-inline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed nulla eget quam varius fermentum sed vitae felis.
                  Vivamus lacus purus, malesuada a malesuada in, rutrum et
                  lectus. Vivamus lacus purus, malesuada a malesuada in, rutrum
                  et lectus
                </p>
              </div>
            </div>

            <div className="card d-flex flex-row ml-1 mr-1 testee_wrapper">
              <div className=" summary-img">
                <img
                  src="https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png"
                  className="card-img img-fluid"
                  alt="image_name"
                />
              </div>
              <div className=" summary-content">
                <div className="content-card">
                  <span className="card-title ">CLIENT NAME</span>
                  <p className="position">Position, ORG</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 d-none d-md-block">
            <div className="d-flex w-75 talk-bubble tri-right btm-right">
              <div className="talktext ">
                <i className="lni lni-quotation lni-rotate-180 quotation" />
                <p className="d-inline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed nulla eget quam varius fermentum sed vitae felis.
                  Vivamus lacus purus, malesuada a malesuada in, rutrum et
                  lectus. Vivamus lacus purus, malesuada a malesuada in, rutrum
                  et lectus
                </p>
              </div>
            </div>

            <div className="card d-flex flex-row ml-1 mr-1 testee_wrapper">
              <div className=" summary-img">
                <img
                  src="https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png"
                  className="card-img img-fluid"
                  alt="image_name"
                />
              </div>
              <div className=" summary-content">
                <div className="content-card">
                  <span className="card-title ">CLIENT NAME</span>
                  <p className="position">Position, ORG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
