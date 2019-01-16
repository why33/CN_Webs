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
const LoadableComArticle=Loadable({
    loader:()=>import('@module/article'),
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
        comp:LoadableComTestPages
    },
    {
        key:'4',
        url:'/intro2',
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
    keySelected:['0'],//选中模块的索引
    selectedPath:paths[0],
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.INDEX_SELECT_MODULE:
            return {
                ...state,
                keySelected:action.data2,
                selectedPath:Object.assign({},paths[action.data1])
            }
        default:
            return state   
    }
}
export default getNewState;
