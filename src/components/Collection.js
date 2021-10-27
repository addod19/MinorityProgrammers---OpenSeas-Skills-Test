import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Collection.css';

const Collection = ({
  header, floorPrice, volPrice,
}) => (
  <section className="collection">
    <div className="row1">
      <h3 className="myTil">{header}</h3>
      {/* <img src={image} alt="text" className="img" /> */}
    </div>
    <hr className="white" />
    <div className="row2">
      <div className="floor-price">
        <h4 className="flor">Floor Price</h4>
        <span className="text-green">
          $
          {floorPrice}
        </span>
      </div>
      <div className="vol-price">
        <h4 className="vol">Volume</h4>
        <span className="text-white">
          $
          {volPrice}
        </span>
      </div>
    </div>
  </section>
);

Collection.propTypes = {
  // image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  floorPrice: PropTypes.string.isRequired,
  volPrice: PropTypes.string.isRequired,
};

export default Collection;
