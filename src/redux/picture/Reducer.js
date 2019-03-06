import Type from './Type';

const initialState={
    picCurrent:1,
};
const getNewState=function(state=initialState,action){
    switch(action.type){
        case Type.PICTURE_CURRENT:
            return {
                picCurrent:action.data
            }
        default:
            return state;
    }
}
export default getNewState;