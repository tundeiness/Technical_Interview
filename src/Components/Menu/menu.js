import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Menu = ({ open }) => {
  const move = open ? 'translateY(0)' : 'translateY(-100%)';

  return (
    <div className=" off-canvas fixed-top" open={open} style={{ transform: move }}>
      <span className="d-flex flex-column justify-content-center link-wrapper">
        <a className="menu-link" href="/about">
          About
        </a>

        <a className="menu-link" href="/services">
          Services
          {' '}
        </a>

        <a className="menu-link" href="/solutions">
          Solutions
        </a>

        <a className="menu-link" href="/blog">
          Blog
        </a>
      </span>
    </div>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
