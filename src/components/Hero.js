import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Hero.css';

const Hero = ({ children }) => (
  <div className="hero">
    {children}
  </div>
);

Hero.defaultProps = {
  children: 'defaultHero',
};

Hero.propTypes = {
  children: PropTypes.string,
};

export default Hero;
