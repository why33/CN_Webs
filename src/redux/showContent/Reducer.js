import Type from "./Type";

const initialState={
    contentsList:[],//资讯列表
    contentDetailHTML:"",//资讯详情
    contentSelected:null,//选中资讯 
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.SHOW_CONTENTS:
        return {
            ...state,
            contentsList:action.data
        } 
        case Type.SHOW_HTML_CONTENT:
             return {
                ...state,
                contentDetailHTML:action.data1,
                contentSelected:action.data2
             }    
        default:
            return state   
    }
}
export default getNewState;