import Type from "./Type"
import showdown from 'showdown' 
import axios from 'axios'

export default {
    //处理contents数据，显示在首页
    handleContentsFun:obj=>dispatch=>{
        let arrObj=[];
        obj.forEach(item=>{
           if(item.children){
               let childArrs=item.children.map(item1=>{
                   return {
                       ...item1,
                       par:item.title
                   }
               })
               arrObj.push(...childArrs)
               
           }
        })
        arrObj.length=3;//资讯限制3个
        dispatch({
            type:Type.SHOW_CONTENTS,
            data:arrObj
        })
    },
    //处理非首页的content内容展示
    ContentsListFun:(obj)=>dispatch=>{
        dispatch({
            type:Type.SHOW_CONTENTS,
            data:obj
        })
    },
     //选中资讯获取相应的内容
    contentSelectedFun:(item,index,path,success)=>dispatch=>{
        axios.get(item.url)
            .then((data)=>{
               let converter=new showdown.Converter();
               let html=converter.makeHtml(data.data);
               dispatch({
                  type:Type.SHOW_HTML_CONTENT,
                  data1:html,
                  data2:Object.assign({},item,{index,path},)
               })
               success();
            })
            .catch(()=>{
               alert('404')
            })
    },

};