import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Collectible.css';

const Collectible = ({ background, title, author }) => (
  <section className="collectible">
    <div className="container">
      <img src={background} alt="bg" className="first-row" />
      <span className="price-tag">$600</span>
      <div className="second-row">
        <div className="title-row">
          <p className="Name">{title}</p>
          <small className="author">
            by
            {author}
          </small>
        </div>
        <hr className="divider" />
        <div className="time-cash">
          <div className="time">
            <p className="time-text">
              Drops in
              <br />
              2d 1h 23m 1s
            </p>
          </div>
          <div className="cash">
            <p className="cash-text">
              Mint Amount
              <br />
              10,000
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Collectible.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Collectible;
