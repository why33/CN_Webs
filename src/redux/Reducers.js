import { combineReducers } from 'redux';
import index from './index/Reducer';
import showContent from './showContent/Reducer';

const reduces={
    index,
    showContent,
}
export default combineReducers(reduces);