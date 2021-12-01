import axios from 'axios';

import {
  CHANGE_FILTER, GET_ASSETS, GET_COLLECTIONS,
} from '../../constants/actionTypes';

const GETASSETS = () => (dispatch) => {
  const assets = [];

  axios
    .get('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
    .then((res) => {
      assets.push(res.data);
    })
    .then(() => {
      dispatch({
        type: GET_ASSETS,
        payload: assets,
      });
    })
    .then((error) => error);
};

const GETCOLLECTIONS = () => (dispatch) => {
  const collections = [];

  axios
    .get('https://api.opensea.io/api/v1/collections?offset=0&limit=300')
    .then((res) => {
      // console.log(res.data.collections);
      collections.push(res.data);
    })
    .then(() => {
      dispatch({
        type: GET_COLLECTIONS,
        payload: collections,
      });
    })
    .then((error) => error);
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export { changeFilter, GETASSETS, GETCOLLECTIONS };
