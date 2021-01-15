import React from 'react';

const Hero = () => (
  <>
    <div className="container-fluid px-0" id="landing_section">
      <div className="row hero_matter ele">
        <div className="col-12 hero_words">
          <div />
          <div className="word_wrapper">
            <p className="foreword">
              Integer bibendum sit amet
              {' '}
              <br />
              {' '}
              arcu vel egestas.
            </p>
          </div>
          <div />
        </div>
        <div className="col-12 hero_icons">
          <div className="row flex-md-row flex-lg-row">
            <div className="col-2 col-lg-3" />
            <div className="icon_wrapper col-8 col-lg-6 d-flex flex-column flex-md-row justify-content-lg-center">
              <div className="d-flex flex-lg-column flex-row mr-lg-4 consulting_wrapper">
                <i className="lni lni-consulting consulting " />
                <span className="d-inline-block"> Service Name</span>
              </div>
              <div className="d-flex flex-lg-column flex-sm-row mr-lg-4 cogs_wrapper">
                <i className="lni lni-cogs cogs " />
                <span className="d-inline-block"> Service Name</span>
              </div>
              <div className="d-flex flex-lg-column flex-sm-row folder_wrapper">
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
