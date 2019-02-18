import Type from "./Type"
import showdown from 'showdown' 
import axios from 'axios'
import {Message} from 'antd'

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
                let html=null;
                if(item.type==='md'){
                    let converter=new showdown.Converter();
                    html=converter.makeHtml(data.data);
                }else{
                    let style=data.data.split('style>')[1] && data.data.split('style>')[1].slice(0,-2);
                    let body=data.data.split('body>')[1].slice(0,-2);
                    let startIndex=body.indexOf("<script>");
                    let endStart=body.lastIndexOf('</script>');
                    body=body.split('');
                    body.splice(startIndex,endStart-startIndex+9);
                    let bodyNew=body.join("");
                    let script=data.data.split('script>')[1] && data.data.split('script>')[1].slice(0,-2);
                    let temp = document.createElement("div");
                    (temp.textContent != null) ? (temp.textContent = bodyNew) : (temp.innerText = bodyNew);
                    html="<h5>CSS</h5><pre>"+style+"</pre><h5>HTML</h5><pre>"+temp.innerHTML+"</pre><h5>JS</h5><pre>"+script+"</pre>";
                    temp=null;
                }
                dispatch({
                    type:Type.SHOW_HTML_CONTENT,
                    data:[html,Object.assign({},item,{index,path})]
                })
                success();
            })
            .catch(()=>{
                Message.error("请求失败,内容可能已经不存在了...",3);
            })
    },
    //页码转换
    changeCurrentFun:(index,value,obj)=>dispatch=>{
        obj[index]=value;
        dispatch({
            type:Type.CHANGE_CURRENT,
            data:obj
        })
    }

};