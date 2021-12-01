import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GETASSETS } from '../redux/actions';
import Asset from '../components/asset';

const AssetList = ({ getAssets, assets }) => {
  useEffect(() => {
    getAssets();
  }, [getAssets]);
  return assets.length === 0 ? <h1>Loading!!!!</h1> : (
    <>
      <h1>Here we can see all our assets</h1>
      <div className="flex-row">
        { assets ? assets[0].assets.map((asset) => (
          // <Link key={asset.id} to={{ pathname: `/$asset.id`, state: asset}}>
          <Asset key={asset.id} asset={asset} />
          // </Link>
        )) : 'no assets'}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  assets: state.assets.assets,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getAssets: () => dispatch(GETASSETS()),
  // changeFilter: filter => dispatch(changeFilter(filter)),
});

AssetList.propTypes = {
  assets: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  getAssets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetList);
