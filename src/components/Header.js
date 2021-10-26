import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';

const Header = () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="top-right-pos">
      <nav className="menu">
        <ul className="nav-links">
          <li className="links">
            <Link className="link-deco" to="/">Collectibles</Link>
          </li>
          <li className="links">
            <Link className="link-deco" to="/music_heroes">Music Heroes</Link>
          </li>
          <li className="links">
            <Link className="link-deco" to="/muddy_waters">Muddy Waters</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
