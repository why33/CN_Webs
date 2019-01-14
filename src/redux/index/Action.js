import Type from "./Type"
import showdown from 'showdown' 
import axios from 'axios'

const self={
    //模块选中
    selectModuleFun:val=>dispatch=>dispatch({
       type:Type.INDEX_SELECT_MODULE,
       data:Number(val)
    }),
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
        dispatch({
            type:Type.INDEX_CONTENTS,
            data:arrObj
        })
    },
    //阅读全文的相应内容获取
    getHtmlContentFun:val=>dispatch=>{
        axios.get(val)
            .then((data)=>{
               let converter=new showdown.Converter();
               let html=converter.makeHtml(data.data);
               dispatch({
                  type:Type.INDEX_HTML_CONTENT,
                  data:html
               })
            })
            .catch(()=>{
               alert('404')
            })
    },
}
export default self;