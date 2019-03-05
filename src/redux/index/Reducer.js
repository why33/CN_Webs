import Type from "./Type";
import LoadingComponent from '@comp/Loading';
import Loadable from 'react-loadable'

const LoadableComMain=Loadable({
    loader:()=>import('@module/index/MainPage'),
    loading:LoadingComponent
})
const LoadableComWeb=Loadable({
    loader:()=>import('@module/webs'),
    loading:LoadingComponent
})
const LoadableComArticle=Loadable({
    loader:()=>import('@module/article'),
    loading:LoadingComponent
})
const LoadableComMusic=Loadable({
    loader:()=>import('@module/music'),
    loading:LoadingComponent
})
const LoadableComPicture=Loadable({
    loader:()=>import('@module/picture'),
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
    loader:()=>import('@comp/DetailsShow'),
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
        comp:LoadableComArticle
    },
    {
        key:'3',
        url:'/music',
        comp:LoadableComMusic
    },
    {
        key:'4',
        url:'/picture',
        comp:LoadableComPicture
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
    keySelected:['0'],//选中模块的索引
    selectedPath:paths[0],
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.INDEX_SELECT_MODULE:
            return {
                ...state,
                keySelected:action.data[1],
                selectedPath:Object.assign({},paths[action.data[0]])
            }
        default:
            return state   
    }
}
export default getNewState;
