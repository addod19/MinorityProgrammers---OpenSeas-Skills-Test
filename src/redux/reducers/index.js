import { combineReducers } from 'redux';
import filter from './filter';
import assets from './assets';
import collection from './collection';

export default combineReducers({ assets, filter, collection });
