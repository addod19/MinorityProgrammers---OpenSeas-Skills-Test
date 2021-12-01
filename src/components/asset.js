import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Asset = ({ asset }) => {
  const {
    id, imageUrl, name, collection,
  } = asset;

  return (
    <>
      <div key={id} className="nft">
        <img src={imageUrl} alt="some asset" className="img-style" />
        <h3>{name}</h3>
        <h2>
          Collection:
          {collection.name}
        </h2>
      </div>
    </>
  );
};

Asset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    asset_contract: PropTypes.shape({}),
    creator: PropTypes.shape({}),
    imageUrl: PropTypes.string,
    collection: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Asset;
