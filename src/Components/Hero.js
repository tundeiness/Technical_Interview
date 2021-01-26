import React from 'react';

const Hero = () => (
  <>
    <div className="container-fluid px-0" id="landing_section">
      <div className="row hero_matter ele">
        <div className="col-12 hero_words">
          <div />
          <div className="word_wrapper">
            <p className="foreword d-lg-none d-md-none d-xl-none">
              Integer bibendum
              {' '}
              <br />
              sit amet
              arcu vel
              {' '}
              <br />
              {' '}
              egestas.
            </p>
            <p className="foreword d-none d-md-block foreword-large">
              Integer bibendum sit amet
              {' '}
              <br />
              arcu vel egestas.
            </p>
          </div>
          <div />
        </div>
        <div className="col-12 hero_icons">
          <div className="row flex-column flex-md-row flex-lg-row align-items-center">
            <div className="col-2 col-lg-3" />
            <div className="icon_wrapper col-12 col-lg-6 d-flex flex-column flex-md-row justify-content-md-center justify-content-lg-center">
              <div className="d-flex flex-lg-column flex-md-column flex-row mr-lg-4 mr-md-4 align-items-lg-center align-items-md-center consulting_wrapper">
                <i className="lni lni-consulting consulting " />
                <span className="d-inline-block"> Service Name</span>
              </div>
              <div className="d-flex flex-lg-column flex-md-column flex-row mr-lg-4 mr-md-4 align-items-lg-center align-items-md-center cogs_wrapper">
                <i className="lni lni-cogs cogs " />
                <span className="d-inline-block"> Service Name</span>
              </div>
              <div className="d-flex flex-lg-column flex-md-column flex-row align-items-lg-center align-items-md-center folder_wrapper">
                <i className="lni lni-folder folder" />
                <span className="d-inline-block"> Service Name</span>
              </div>
            </div>
            <div className="col-2 col-lg-3" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
