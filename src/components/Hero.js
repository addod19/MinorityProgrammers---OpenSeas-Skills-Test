import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, style }) => (
  <div className={style}>
    {children}
  </div>
);

Hero.defaultProps = {
  children: 'defaultHero',
};

Hero.propTypes = {
  children: PropTypes.string,
  style: PropTypes.string.isRequired,
};

export default Hero;
