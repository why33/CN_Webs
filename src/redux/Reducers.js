import { combineReducers } from 'redux';
import index from './index/Reducer';
import showContent from './showContent/Reducer';
import music from './music/Reducer';

const reduces={
    index,
    showContent,
    music,
}
export default combineReducers(reduces);