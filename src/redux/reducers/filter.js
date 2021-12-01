import { CHANGE_FILTER } from '../../constants/actionTypes';

const changeFilter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default changeFilter;
