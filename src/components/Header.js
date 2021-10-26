import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/Header.css';

const Header = () => (
  <header className="header">
    <span className="music-swap-logo">Music Swap Logo</span>
    <div className="top-right-pos">
      <span>MPA logo</span>
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
