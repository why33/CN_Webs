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
        min-height:400px;
        margin:50px auto;
        &>ul{
            list-style:none;
            display:flex;
            position:relative;
            border-bottom: 2px solid  #1890ff;
            li{
                flex:1;
                font-size:20px;
                font-weight:bold;
                line-height:50px;
                text-align:center;
                span{
                    cursor:pointer;
                }
                span:hover{
                    color: #1890ff;
                }
            }
            .activeStyle{
                position:relative;
                color: #1890ff;
            }
            .activeStyle::after{
                position:absolute;
                font-size:14px;
                content:"▲";
                line-height:10px;
                bottom:0;
                left:0;
                right:0;
                margin:0 auto;
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
                border:1px solid rgba(24, 144, 255,.5);
                box-shadow:0px 6px 6px -3px rgba(24, 144, 255,.3);
                
            }
            
            .search-picture-style{
                display:inline-block; 
                vertical-align:top;
                width:20%;
                position:relative;
                height:0;
                padding-bottom:15%;
                margin-left:10%;
                margin-top:2%;
                border:1px solid rgba(200,200,200,.3);
                margin-bottom:2%;
                border-radius:2px;
                cursor:pointer;
                font-size:16px;
                line-height:30px;
                text-align:center;
                &>div:last-child{
                    position:absolute;
                    display:flex;
                    flex-direction:column;
                    width:100%;
                    height:100%;
                    z-index:10;
                    padding:2px;
                    background:#fff;
                    border:1px solid rgba(187, 187, 187,.6);
                    &>div{
                        height:0;
                        flex-grow:1;
                        width:100%;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    span{
                        display:block;
                        height:30px;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
            }
            .picLiStyle::before,
            .picLiStyle::after{
                position:absolute;
                bottom:5px;
                content:'';
                width:60%;
                height:50px;
                z-index:8;
                box-shadow:0px 10px 10px -5px rgba(0,0,0,.4);
            }
            .picLiStyle::before{
                left:-3px;
                transform:rotate(-8deg);
                -webkit-transform: rotate(-8deg) translateZ(0);
                -o-transform:rotate(-8deg);
                -moz-transform:rotate(-8deg);
                -ms-transform:rotate(-8deg);
            }
            .picLiStyle::after{
                right:-3px;
                transform:rotate(8deg);
                -webkit-transform: rotate(8deg) translateZ(0);
                -o-transform:rotate(8deg);
                -moz-transform:rotate(8deg);
                -ms-transform:rotate(8deg);
            }
            .picLiStyle:hover{
                color:#1890ff;
                border:1px solid rgba(24, 144, 255,.5);
            }
            .showPicStyle{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                box-sizing:border-box;
                margin:0;
                cursor:default;
                background:rgba(35,40,45,.9);
                z-index:9999;
                &>div:nth-of-type(2){
                    width:56%;
                    height:50%;
                    top:20%;
                    left:22%;
                    border-radius:5px;
                    box-shadow:1px 1px 15px 1px rgba(255,255, 255,.3);
                }
                &>div:nth-of-type(1){
                    position:fixed;
                    width:100%;
                    height:100%;
                    color:#c0c0c0;
                    span{
                        position:fixed; 
                        font-size:40px;
                        cursor:pointer;
                    }
                    span:hover{
                        color:#fff;
                    }
                    .cancel_but{
                        top:10px;
                        right:10px;
                       
                    }
                    .prev_but{
                        top:43%;
                        left:15%;
                        font-size:80px;
                    }
                    .next_but{
                        top:43%;
                        right:15%;
                        font-size:80px;
                    }
                   
                }
            }
            .picLiStyle::before,
            .picLiStyle::after{
                position:absolute;
                bottom:5px;
                content:'';
                width:60%;
                height:50px;
                z-index:8;
                box-shadow:0px 10px 10px -5px rgba(0,0,0,.4);
            }
            .picLiStyle::before{
                left:-3px;
                transform:rotate(-8deg);
                -webkit-transform: rotate(-8deg) translateZ(0);
                -o-transform:rotate(-8deg);
                -moz-transform:rotate(-8deg);
                -ms-transform:rotate(-8deg);
            }
            .picLiStyle::after{
                right:-3px;
                transform:rotate(8deg);
                -webkit-transform: rotate(8deg) translateZ(0);
                -o-transform:rotate(8deg);
                -moz-transform:rotate(8deg);
                -ms-transform:rotate(8deg);
            }
            .picLiStyle:hover{
                color:#1890ff;
                border:1px solid rgba(24, 144, 255,.5);
            }
            .picLiStyle:hover::before,
            .picLiStyle:hover::after{
                box-shadow:0px 10px 10px -5px rgba(24, 144, 255,.5);
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
            value:decodeURIComponent(window.location.hash).slice(1).split("=")[1] || '',
            searchResult:null,
            show:[0,false],//图片展示
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
            return false;
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
                searchResult:(Object.keys(arrOBJ).length>0)?arrOBJ : null,
                value:(Object.keys(arrOBJ).length>0)?val : ''
            })
           
        }else{
            this.setState({
                searchResult:null,
                value:""
            })
        }
        this.props.history.replace(`/search/?val=${this.state.value}`);
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
    //图片展示
    showPicture=(index,status)=>{
        !status &&　this.setState({
            show:[index,true]
        })
    }
    //关闭图片展示
    cancelPic=()=>{
        this.setState({
            show:[0,false]
        })
    }
    //上一页图片
    prevPic=()=>{
        if(this.state.show[0]!==0){
            this.setState({
                show:[this.state.show[0]-1,true],
            })
        }
    }
    //下一页图片
    nextPic=()=>{
        if(this.state.show[0]!==(pictures.length-1)){
            this.setState({
                show:[this.state.show[0]+1,true],
            })
        }
        
    }
    mapLisCont=(obj)=>{
        return obj.map((item,index)=>{
            if(item.type==='picture'){
                let status=(this.state.show[0]===index && this.state.show[1]);
                return (
                    <li 
                        className={`search-picture-style ${status?'showPicStyle':'picLiStyle'}`} 
                        key={index} 
                        onClick={this.showPicture.bind(this,index,status)}
                    >
                        {
                            status && (
                                <div>
                                    <span className='cancel_but' onClick={this.cancelPic.bind(this)}> &#10008; </span>
                                    <span className='prev_but' onClick={this.prevPic.bind(this)} hidden={index===0?true:false}> ◀ </span>
                                    <span className='next_but' onClick={this.nextPic.bind(this)} hidden={index===(obj.length-1)?true:false}>  ▶ </span>
                                </div>

                            )
                        }
                        <div title={item.title}>
                            <div>
                                <img src={item.url} alt={item.title} />
                            </div>
                            <span>{item.title}</span>
                        </div>
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