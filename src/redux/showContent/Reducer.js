import Type from "./Type";

const initialState={
    contentsList:[],//资讯列表
    contentDetailHTML:"",//资讯详情
    contentSelected:null,//选中资讯 
    current:[1,1],//web页码,文章页码
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
                contentDetailHTML:action.data[0],
                contentSelected:action.data[1]
             } 
        case Type.CHANGE_CURRENT:
                return {
                    ...state,
                    current:action.data
                }
        default:
            return state   
    }
}
export default getNewState;