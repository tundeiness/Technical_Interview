/* eslint-disable no-unused-vars */
import React from 'react';

const data = [{
  id: 0,
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed nulla eget quam varius fermentum sed vitae felis.',
  name: 'Client Name',
  position: 'position, ORG',
  img: 'https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png',
},
{
  id: 1,
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean sed nulla eget quam varius fermentum sed vitae felis.Vivamus lacus purus, malesuada a malesuada in, rutrum et lectus.',
  name: 'Client Name',
  position: 'position, ORG',
  img: 'https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png',
},
{
  id: 2,
  message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed nulla eget quam varius fermentum sed vitae felis. ',
  name: 'Client Name',
  position: 'position, ORG',
  img: 'https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png',
}];

const Testimonial = () => {
  const userTestimonial = data.map(d => (
    <div key={d.id} className="col-lg-4 col-12">
      <div className="d-flex flex-column talk-bubble tri-right btm-right">
        <div className="talktext ">
          <i className="lni lni-quotation lni-rotate-180 quotation" />
          <p className="d-inline">{d.message}</p>
        </div>
      </div>

      <div className="card d-flex flex-row ml-1 mr-1 testee_wrapper">
        <div className=" summary-img">
          <img
            src={d.img}
            className="card-img img-fluid"
            alt="image_name"
          />
        </div>
        <div className=" summary-content">
          <div className="content-card">
            <span className="card-title ">{d.name}</span>
            <p className="position">{d.position}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container-fluid" id="testimonial_section">
      <div className="row">
        <div className="col-12 d-flex flex-row justify-content-center wrap">
          <p className="d-inline testimonial_heading">Testimonials</p>
        </div>
        <div className="col-12 testimonial_content">
          <div className="row flex-column flex-md-row justify-content-lg-center">
            <div className="content-wrapper">
              <div className="d-flex flex-column justify-content-lg-center talk-bubble tri-right btm-right">
                <div className="talktext ">
                  <i className="lni lni-quotation lni-rotate-180 quotation" />
                  <span className="d-inline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sed nulla eget quam varius fermentum sed vitae felis.
                  </span>
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

            <div className="content-wrapper d-none d-md-block">
              <div className="d-flex justify-content-lg-center talk-bubble tri-right btm-right">
                <div className="talktext">
                  <i className="lni lni-quotation lni-rotate-180 quotation" />
                  <span className="d-inline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sed nulla eget quam varius fermentum sed vitae felis.
                    Vivamus lacus purus, malesuada a malesuada in, rutrum et
                    lectus.
                  </span>
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

            <div className="content-wrapper d-none d-md-block">
              <div className="d-flex justify-content-lg-center talk-bubble tri-right btm-right">
                <div className="talktext ">
                  <i className="lni lni-quotation lni-rotate-180 quotation" />
                  <span className="d-inline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sed nulla eget quam varius fermentum sed vitae felis.
                  </span>
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
};

export default Testimonial;
