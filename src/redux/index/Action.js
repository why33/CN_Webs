import Type from "./Type"
import showdown from 'showdown' 
import axios from 'axios'

const self={
    //模块选中
    selectModuleFun:val=>dispatch=>{
          dispatch({
            type:Type.INDEX_SELECT_MODULE,
            data1:Number(val.split("-")[0]),
            data2:val
         })
    },
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
        arrObj.length=3;
        dispatch({
            type:Type.INDEX_CONTENTS,
            data:arrObj
        })
    },
    //选中资讯获取相应的内容
    contentSelectedFun:(item,success)=>dispatch=>{
        axios.get(item.url)
            .then((data)=>{
               let converter=new showdown.Converter();
               let html=converter.makeHtml(data.data);
               dispatch({
                  type:Type.INDEX_HTML_CONTENT,
                  data1:html,
                  data2:item
               })
               success();
            })
            .catch(()=>{
               alert('404')
            })
    },
}
export default self;