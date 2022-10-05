import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ children }) => (
  <main>
    <header className="img">
      <nav className="links">
        <NavLink to="/" className="link-item">Rockets</NavLink>
        <NavLink to="/Mission" className="link-item">Mission</NavLink>
        <NavLink to="/profile" className="link-item">Profile</NavLink>
      </nav>
    </header>
    {children}
  </main>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
