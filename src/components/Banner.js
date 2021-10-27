import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Banner.css';

const Banner = ({ title, subtitle }) => (
  <section className="banner">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Banner;
