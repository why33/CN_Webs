import Type from "./Type";
import LoadingComponent from '@comp/loading';
import Loadable from 'react-loadable'

const LoadableComMain=Loadable({
    loader:()=>import('@module/index/MainPage'),
    loading:LoadingComponent
})
const LoadableComWeb=Loadable({
    loader:()=>import('@module/webs'),
    loading:LoadingComponent
})
const LoadableComJobMarket=Loadable({
    loader:()=>import('@module/jobMarket'),
    loading:LoadingComponent
})
const LoadableComTestPages=Loadable({
    loader:()=>import('@module/testPages'),
    loading:LoadingComponent
})
const LoadableComUser=Loadable({
    loader:()=>import('@module/userInfo'),
    loading:LoadingComponent
})
const LoadableComSearch=Loadable({
    loader:()=>import('@module/search'),
    loading:LoadingComponent
})
const LoadableComDetailShow=Loadable({
    loader:()=>import('@module/index/MainPage'),
    loading:LoadingComponent
})
const paths=[
    {
        key:'0',
        url:'/',
        comp:LoadableComMain
    },
    {
        key:'1',
        url:'/web',
        comp:LoadableComWeb
    },
    {
        key:'2',
        url:'/article',
        comp:LoadableComJobMarket
    },
    {
        key:'3',
        url:'/music',
        comp:LoadableComTestPages
    },
    {
        key:'4',
        url:'/intro',
        comp:LoadableComUser
    },{
        
        key:'5',
        url:'/intro',
        comp:LoadableComUser

    },{
        key:'6',
        url:'/search',
        comp:LoadableComSearch
    },{
        key:'7',
        url:'/detailShow',
        comp:LoadableComDetailShow
    },
]
const initialState={
    paths,
    keySelected:'0',//选中模块的索引
    selectedPath:paths[0],
    indexContentsList:[],
    contentDetailHTML:"",//资讯详情
    contentSelected:null,//选中资讯

    
   
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.INDEX_SELECT_MODULE:
            return {
                ...state,
                keySelected:action.data2,
                selectedPath:Object.assign({},paths[action.data1])
            }
        case Type.INDEX_CONTENTS:
            return {
                ...state,
                indexContentsList:action.data
            }
        case Type.INDEX_HTML_CONTENT:
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
