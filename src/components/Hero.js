import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Hero.css';

const Hero = ({children}) => {
  return ( 
    <div className='hero'>
      {children}
    </div>
  );
}

Hero.defaultProps = {
    hero: 'defaultHero',
};

Hero.propTypes = {
    hero: PropTypes.string
}

export default Hero;