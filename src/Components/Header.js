/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import useOnClickOutside from '../hooks';
import Menu from './Menu/menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>
      <nav
        className="container-fluid navbar-expand-md fixed-top"
        id="nav"
      >
        <div className="container" id="header-container">
          <div className="row">
            <div
              className="col-12 d-flex justify-content-around px-0"
              id="logo-button"
            >
              <div className="button-wrap" ref={node}>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setOpen(!open)}
                >
                  <div className="bar_1" />
                  <div className="bar_2" />
                  <div className="bar_3" />
                </button>
              </div>

              <a className="d-inline-block brand" href="company.org">
                <span className="company">COMPANY</span>
                {' '}
                <span className="logo">LOGO</span>
              </a>

              <div className="collapse navbar-collapse d-flex justify-content-md-end" id="collapsibleNavbar">
                <ul className="navbar-nav sub-container">
                  <li className="nav-item">
                    <a className="nav-link about" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link services" href="/services">
                      Services
                      {' '}
                    </a>
                  </li>
                  <li className="nav-item solutions">
                    <a className="nav-link" href="/solutions">
                      Solutions
                    </a>
                  </li>
                  <li className="nav-item blog">
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
                    <span className="d-inline-block">Get In Touch</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
