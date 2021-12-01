import React from 'react';
import PropTypes from 'prop-types';

const Collection = ({ collection }) => {
  const {
    id, imageUrl, name, collect,
  } = collection;
  // console.log(collection);
  return (
    <>
      <div key={id}>
        <img src={imageUrl} alt="some asset" />
        <h3>{name}</h3>
        <h2>
          Collection:
          {collect.name}
        </h2>
      </div>
      <h1>collectibles</h1>
    </>
  );
};

Collection.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    asset_contract: PropTypes.shape({}),
    creator: PropTypes.shape({}),
    imageUrl: PropTypes.string,
    collect: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Collection;
