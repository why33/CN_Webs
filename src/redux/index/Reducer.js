import Type from "./Type";
import LoadingComponent from '@comp/loading';
import Loadable from 'react-loadable'

const LoadableComMain=Loadable({
    loader:()=>import('@module/index/MainPage'),
    loading:LoadingComponent
})
const LoadableComLeading=Loadable({
    loader:()=>import('@module/leading'),
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
        url:'/y',
        comp:LoadableComLeading
    },
    {
        key:'2',
        url:'/p',
        comp:LoadableComJobMarket
    },
    {
        key:'3',
        url:'/text',
        comp:LoadableComTestPages
    },
    {
        key:'4',
        url:'/user',
        comp:LoadableComUser
    },{
        key:'5',
        url:'/search',
        comp:LoadableComSearch
    },{
        key:'6',
        url:'/detailShow',
        comp:LoadableComDetailShow
    }
]
const initialState={
    paths,
    selectedPath:paths[0]
   
}
const getNewState=function(state=initialState,action){
    switch (action.type){
        case Type.INDEX_SELECT_MODULE:
            return {
                ...state,
                selectedPath:Object.assign({},paths[action.data])
            }
        default:
            return state   
    }
}
export default getNewState;
