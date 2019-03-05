import React from 'react'
import {Input,Button,Tabs} from 'antd'
import styled from 'styled-components'
import connect from '@connect'
import {pictures,contents,articles} from '@type'

const TabPane = Tabs.TabPane;
const Root=styled.div`
    width:80%;
    margin:40px auto;
    .search-style{
        display:flex;
        line-height:50px;
        .ant-input{
            height:50px;
            font-size:20px;
        }
        button{
            font-size:20px;
            height:50px;
            margin-left:40px;
        }
    }
    .search-content-style{
        width:90%;
        min-height:300px;
        margin:50px auto;
        &>ul{
            list-style:none;
            display:flex;
            border-bottom: 1px solid #e8e8e8;
            li{
                flex:1;
                font-size:20px;
                font-weight:bold;
                line-height:40px;
                text-align:center;
                span{
                    cursor:pointer;
                }
                span:hover{
                    color: #1890ff;
                }
            }
            .activeStyle{
                color: #1890ff;
            }
        }
        .ant-tabs-bar{
            display:none;
        }
        &>p{
            font-size:18px;
            color:rgb(190,190,190);
            text-align:center;
        }
        .search-contents-cont-style{
            list-style:none;
            li{
                box-sizing:border-box;
                border:1px solid rgba(200,200,200,.3);
                margin-bottom:15px;
                border-radius:2px;
                cursor:pointer;
            }
            .search-other-style:hover{
                color:rgba(24, 144, 255,.95);
                box-shadow:0px 6px 6px -3px rgba(24, 144, 255,.3);
                
            }
            .search-picture-style{
                position:relative;
                margin-left:2%;
                width:30%;
                font-size:16px;
                line-height:30px;
                text-align:center;
                padding:2px;
                z-index:100000000;
                border:1px solid rgba(187, 187, 187,.6);
                img{
                    display:block;
                    width:100%;
                }
            }
            .search-picture-style::before{
                position:absolute;
                bottom:-1px;
                left:0;
                content:'';
                width:50%;
                height:5px;
                z-index:-1;
                background:red;
                box-shadow:0px 5px 10px 0px rgba(0,0,0,.6);
                transform:rotate(-5deg);
            }
            .search-other-style{
                width:90%;
                padding:20px 10px;
                margin:10px auto;
                box-shadow:0px 6px 6px -3px rgba(187, 187, 187,.6);
                &>p{
                    font-size:18px;
                    font-weight:bold;
                    span{
                        position:relative;
                        left:-10px;
                        color:#fff;
                        font-size:14px;
                        padding:5px;
                        background:#1890ff;
                        &:after{
                            position:absolute;
                            bottom:0;
                            content:'';
                            width:50px;
                            height:2px;
                            background: -webkit-linear-gradient(left, #1890ff, #fff); 
                            background: -o-linear-gradient(right,#1890ff, #fff);
                            background: -moz-linear-gradient(right,#1890ff, #fff);
                            background: linear-gradient(to right,#1890ff, #fff);
                            
                        }
                    }  
                }
                &>div{
                    display:flex;
                    div{
                        flex:1;
                        img{
                            width:90%;
                            margin-left:10%;
                        }
                    }
                    div:last-child{
                        flex:3;
                        box-sizing:border-box;
                        padding:5px 10px;
                    }
                }
            }
        }
    }

`
const objDatas={contents,articles,pictures};
const objType={
    "contents":'Web前端',
    "articles":'文章',
    "pictures":'图像'
}
@connect("index","showContent")
class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:0,
            value:decodeURIComponent(window.location.search).split("=")[1] || '',
            searchResult:null
        }
    }
    componentDidMount(){
        this.searchValue(this.state.value);
        document.onkeydown=this.keydownFun;
    }
    //回车事件
    keydownFun=(e)=>{
        let event=window.event || e;
        if(event.keyCode===13){
            this.searchValue(this.state.value);
        }
    }
    //切换tab
    clickTab=(index)=>{
        this.setState({
            key:index
        })
    }
    //搜索
    searchValue=(val)=>{
        if(val){
            let arrOBJ={};
            for(let name in objDatas){
                let arr=[];
                objDatas[name].forEach(item=>{
                    if(item.title){
                        if(item.title.includes(val)&&!item.children &&item.url ){
                            arr.push(item);
                        }
                        if(item.title.includes(val)&&item.children){
                               item.children.forEach(i=>{
                                    i.title.includes(val) && arr.push({
                                        parentName:item.title,
                                        data:i
                                    });
                                })
                        }else if(!item.title.includes(val)&&item.children){
                            item.children.forEach(j=>{
                                j.title.includes(val) && arr.push({
                                    parentName:item.title,
                                    data:j
                                });
                            })
                        }
                    }
                })
                if(arr.length>0){
                    arrOBJ[name]=arr;
                }
            }
            this.setState({
                searchResult:(Object.keys(arrOBJ).length>0)?arrOBJ : null
            })
           
        }else{
            this.setState({
                searchResult:null
            })
        }
        this.props.history.push(`/search/?val=${this.state.value}`);
    }
    changeValue=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    //跳转到详细页面
    clickShow=(item,index,objs)=>{
        let path=window.location.pathname+window.location.search.split('=')[0]+"="+this.state.value;
        if(item.parentName){
            let newObjs=objs.map(i=>{
                return i.data;
            })
            this.props.contentSelectedFun(item.data,index,path,()=>this.success(item,newObjs));
        }else{
            this.props.contentSelectedFun(item,index,path,()=>this.success(item,objs)); 
        }
          
    }
    success=(item,objs)=>{
        this.props.selectModuleFun('7');
        this.props.ContentsListFun(objs);
        this.props.history.push(`/detailShow?t=${item.title}`);
    }
    mapLisCont=(obj)=>{
        return obj.map((item,index)=>{
            if(item.type==='picture'){
                return (
                    <li className='search-picture-style' key={index}>
                        <img src={item.url} alt={item.title}/>
                         {item.title}
                    </li>
                )
            }else{
                return (
                    <li className='search-other-style' key={index} onClick={this.clickShow.bind(this,item,index,obj)}>
                        <p><span>{item.parentName||null}</span>{item.title || item.data.title}</p>
                        <div>
                            {item.img && (<div><img src={item.img} alt={item.title}/></div>)}
                            <div>{item.content || item.data.content}</div>
                        </div>
                    </li>
                )
            }
        })
    }
    render(){
        return (
            <Root>
                <div className='search-style'>
                    <Input value={this.state.value} onChange={this.changeValue.bind(this)}/>
                    <Button onClick={this.searchValue.bind(this,this.state.value)}>搜索</Button>
                </div>
                {
                    this.state.searchResult ?
                    (
                    <div className='search-content-style'>
                        <ul>
                            {
                                Object.keys(this.state.searchResult).map((item,index)=>(
                                    <li onClick={this.clickTab.bind(this,index)} key={index} className={index===this.state.key?"activeStyle":""}><span>{objType[item]}</span></li>
                                ))
                            }
                        </ul>
                        <Tabs activeKey={this.state.key.toString()} type="card">
                            {
                                Object.values(this.state.searchResult).map((item,index)=>(
                                    <TabPane tab={null} key={index.toString()}>
                                        <ul className='search-contents-cont-style'>
                                            {
                                                item && this.mapLisCont(item)
                                            }
                                        </ul>
                                    </TabPane>
                                ))
                            }
                        </Tabs>
                    </div>
                    )
                    :
                    (<div className='search-content-style'><p>暂无搜索结果</p></div>)
                }
                
            </Root>
        )
    }
}
export default SearchPage;