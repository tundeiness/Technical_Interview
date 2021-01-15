import React from 'react';

const Header = () => (
  <nav
    className="container-fluid navbar-expand-md navbar-static-top fixed-top"
    id="nav"
  >
    <div className="container" id="header-container">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-around px-0"
          id="logo-button"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <div className="bar_1" />
            <div className="bar_2" />
            <div className="bar_3" />
          </button>

          <a className="d-inline-block brand" href="company.org">
            <span className="company">COMPANY</span>
            {' '}
            <span className="logo">LOGO</span>
          </a>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            {/* <a className="d-inline-block brand" href="company.org">
              <span className="company">COMPANY</span>{" "}
              <span className="logo">LOGO</span>
            </a> */}

            <ul className="navbar-nav sub-container">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                  {' '}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/solutions">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                  {' '}
                </a>
              </li>
            </ul>
          </div>

          <div className="px-0 cta_wrapper">
            <a className="cta" href="/contact">
              <span className="cta-mobile d-lg-none d-md-none">
                <i className="lni lni-popup cta_mobile_lni" />
              </span>
              <span className="cta-desktop d-none d-md-inline-block d-lg-inline-block">
                <i className="lni lni-popup cta_desktop_lni" />
                {' '}
                <p className="d-inline-block">Get In Touch</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
