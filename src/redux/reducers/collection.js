import { GET_COLLECTIONS, GET_COLLECTION } from '../../constants/actionTypes';

const initialState = {
  collections: [],
  collection: {},
  loading: true,
};

const collections = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    case GET_COLLECTION:
      return {
        ...state,
        collection: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default collections;
