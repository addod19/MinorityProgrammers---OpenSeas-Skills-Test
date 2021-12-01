import { GET_ASSETS, GET_ASSET } from '../../constants/actionTypes';

const initialState = {
  assets: [],
  asset: {},
  loading: true,
};

const assets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
      };
    case GET_ASSET:
      return {
        ...state,
        asset: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default assets;
