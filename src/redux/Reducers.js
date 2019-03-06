import { combineReducers } from 'redux';
import index from './index/Reducer';
import showContent from './showContent/Reducer';
import music from './music/Reducer';
import picture from './picture/Reducer';

const reduces={
    index,
    showContent,
    music,
    picture,
}
export default combineReducers(reduces);