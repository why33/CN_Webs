import React from 'react'
import styled from 'styled-components'
import iconType from '@icon';
import {Carousel,Icon,Input,Button} from 'antd'
import {links,pictures,contents} from '@type'
import { Link } from 'react-router-dom';

const Root=styled.div`
    display:flex;
    align-items:flex-start;
    box-sizing:border-box;
    .hot-style{
        flex:2;
        margin-right:20px;
        &>div{
            margin-bottom:15px;
        }
        .search-style{
            display:flex;
            justify-content:space-between;
            width:100%;
            .ant-input{
                width:65%;
            }
            button{
               width:0;
               flex-grow:1;
                margin-left:10px;
            }
        }
        .labels-style,
        .links-style{
            box-sizing:border-box;
            padding:10px;
            box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
            p{
                font-size:16px;
                font-weight:bold;
                box-sizing:border-box;
                border-bottom:1px solid rgba(187, 187, 187, .5);
                span{
                   display:inline-block;
                   line-height:30px;
                   border-bottom: 2px solid #1890ff; 
                }
            }
            a:hover{
                color:#007cec;
            }
        }
        .labels-cont-style{
            display:flex;
            flex-wrap:wrap;
            align-items:flex-start;
            span{  
                color:#000;
                padding:5px;
                border:1px solid #d1a378;
                margin:5px;
                border-radius:30%;
                cursor:pointer;
            }
            span:hover{
                color:#1890ff; 
                box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
            }
        }
        .links-style>ul{
            list-style-position:inside;
            a{
                color:#000;
            }
        }
        
    }
    .cont-style{
        width:0;
        flex:4;
       
        .cont-carouse-style{
            position:relative;
            width:100%;
            height:377px;
            overflow:hidden;
        }
        .cont-carouse-style>div{
            position:absolute;
            width:100%;
            height:100%;

        }
        .ant-carousel .slick-slider{
            width:100%;
            height:100%;
            &>div{
                width:100%;
                height:100%;
                &>div{
                    height:100%;
                }
            }
        }
        .ant-carousel .slick-slide {
           width:100%;
           height:100%;
           &>div{
               width:100%;
               height:100%;
           }
        }
        .picture-cont-style{
            position:relative;
            width:100%;
            height:100%;
        }
        .picture-cont-style img{
            width:100%;
            height:100%;
            cursor:pointer;
        }
        .picture-cont-style p{
            position:absolute;
            bottom:0;
            width:100%;
            font-size:20px;
            line-height:40px;
            height:40px;
            text-align:center;
            color:#fff;
            background:rgba(187, 187, 187,.6);
        }
        .cont-ul-style{
            list-style:none;
            margin-top:10px;
            border: 1px solid rgba(187, 187, 187,.5);
            border-radius:10px;
            padding:10px;
            box-sizing:border-box;
            li{
                display:flex;
                box-sizing:border-box;
                padding:20px 10px;
                border-bottom:1px solid rgba(187, 187, 187, 1);
                img{
                    width:50px;
                    height:50px;
                    border-radius:50%;
                    margin:10px;
                }
                .cont-detail-style{
                    flex-grow:1;
                    box-sizing:border-box;
                    &>p{
                        font-size:18px;
                        font-weight:bolder;
                        margin-top:10px;
                        margin-bottom:5px;
                        border-bottom:1px solid #1890ff;
                        span{
                            cursor:pointer;
                        }
                        span:not(:last-child){
                            display:inline-block;
                            vertical-align:bottom;
                            height:100%;
                            color:#fff;
                            font-size:16px;
                            padding:0 10px;
                            cursor:pointer;
                            margin-right:10px;
                            background:#1890ff;    
                        }
                        span:last-child:hover{
                            color:#1890ff;
                        }
                    }
                    .cont-detail-cont-style{
                        margin-bottom:30px;
                        &>span{
                            display:block;
                            color:rgba(187, 187, 187, 1);
                            margin-bottom:10px;
                            span{
                                margin-left:20px;
                            }
                        }
                    }
                    &>span{
                        color:#1890ff;  
                        float:right;
                        cursor:pointer;
                    }
                    &>span:hover{
                        text-decoration:underline;
                    }
                }
            }
            li:last-child{
                border-bottom:none;
            }
            
        }
    }


`


export default class MainPageLeft extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',//搜索内容
        }
    }
    componentDidMount(){
        this.props.handleContentsFun(contents);
    }
    //  //热门点击事件
    // onClickFun=()=>{
        
    // }
    //资讯详情
    onClickInfor=(item,index)=>{
        this.props.contentSelectedFun(item,index,"/",()=>this.success(item));
    }
    //请求成功
    success=(item)=>{
        this.props.selectModuleFun('7');
        this.props.history.push(`/detailShow?t=${item.title}`);
    }
    //搜索
    onChangeValue=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    onSearch=(val)=>{
        this.props.selectModuleFun('6');
        this.props.history.push(`/search/?val=${val}`);
    }
    onKeyDown=(e)=>{
        let ev=window.event||e;
        if(ev.keyCode===13){
            this.onSearch(this.state.value);
        }
    }
    //首页标签选中
    selectModule=(key)=>{
        this.props.selectModuleFun(key);
    }
    //跳转到图片页面
    rediPic=()=>{
        this.props.selectModuleFun('4');
        this.props.history.push(`/picture`);
    }
    render(){
        const { contentsList }=this.props;//主页资讯限制为3个
        return (
            <Root>
                   <div className='hot-style'>
                        <div className='search-style'>
                            <Input onChange={this.onChangeValue.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/><Button onClick={this.onSearch.bind(this,this.state.value)}>搜索</Button>
                        </div>
                        <div className='labels-style'>
                            <p><span>前端集合</span></p>
                            <div className='labels-cont-style'>
                                 {
                                    contents.map((item,index)=>(
                                        <span key={`1-${index}`}><Link to={`/web/${index}`} onClick={this.selectModule.bind(this,`1-${index}`)}>{item.title}</Link></span>
                                    ))
                                 }
                            </div>
                        </div>
                        <div className='links-style'>
                            <p><span>链接推荐</span></p>
                            <ul>
                                {
                                    links.map((l,i)=>(
                                        <li key={i}><a href={l.url} target='_blank' rel="noopener noreferrer">{l.title}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='cont-style'>
                        <div className='cont-carouse-style'>
                             <Carousel fade="fade" autoplay> 
                                {
                                    pictures.slice(0,4).map((item,index)=>{
                                       
                                            return (
                                                <div key={index} className='picture-cont-style'>
                                                    <img key={index} src={item.url} alt={`图片-${index+1}`} onClick={this.rediPic.bind(this)}/>
                                                    <p>{item.title}</p>
                                                </div>
                                            )
                                        
                                        
                                    })
                                }
                            </Carousel>  
                           
                        </div>
                        <ul className='cont-ul-style'>
                            {
                                contentsList.map((item,index)=>(
                                    <li key={index} >
                                        <div>
                                            <img src='./imgs/user.jpg' alt='用户'/>
                                        </div>
                                        <div className='cont-detail-style'>
                                            <p><span>{item.par}</span><span onClick={this.onClickInfor.bind(this,item)}>{item.title}</span></p>
                                            <div className='cont-detail-cont-style'>
                                                <span><Icon type={iconType.iTime} /> {item.time}<span>类型: {`${item.type==="md"?"文章":"代码"}`}</span></span>
                                                {item.content}
                                                
                                            </div>
                                            <span onClick={this.onClickInfor.bind(this,item,index)}>{`${(item.type==="md"?"阅读全文":"查看代码")}`}</span>
                                            
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            </Root>
        )
    }
}