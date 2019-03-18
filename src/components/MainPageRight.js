import React from 'react'
import styled from 'styled-components'
// import HotTabs from './HotTabs'
import connect from '@connect'
import {links,contents} from '@type'
import {Input,Button} from 'antd'
import { Link } from 'react-router-dom';


const Root=styled.div`
    .user-style{
        position:relative;
        width:100%;
        text-align:center;
        font-size:18px;
        box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
        padding-top:140px;
        img{
            position:absolute;
            top:-60px;
            left:0;
            right:0;
            margin:auto;
            width:150px;
            height:180px;
            border:5px solid #fff;
            border-radius:5px 5px 0 0;
            background:#d1a378;

        }
        &>p{
            color:#1890ff; 
            font-size:22px;
            font-family:Courier;
            font-weight:bolder;
            margin-bottom:10px;
        }
        .user-detail-style{
            p{
                font-size:14px;
                font-weight:bold;
            }
            button{
                margin-bottom:20px;
                border:1px solid #d1a378;
            }

        }  
    }
    .hot-style{
        margin-top:20px;
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

`
@connect('index')
class MainPageRight extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',//搜索内容
        }
    }
    //点击进入个人资料
    onClickUser=()=>{
        this.props.selectModuleFun('5');
        this.props.history.push('/intro');
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
            this.onSearch(this.state.value)
        }
    }
    //首页标签选中
    selectModule=(key)=>{
        this.props.selectModuleFun(key);
    }
    render(){
        return (
            <Root>
                <div className='user-style'>
                        <img src='/imgs/user.jpg'  alt='用户头像'  />
                        <p>古罗马</p>
                        <div className='user-detail-style'>
                           <p>陪伴是最长情的告白.</p>
                           <Button onClick={this.onClickUser.bind(this)}>关于古罗马</Button>
                        </div>
                </div>
                {
                    window.location.hash!=="#/" && (
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
                    )
                }
                {/* <HotTabs {...this.props}/>     */}
            </Root>
        )
    }
}
export default MainPageRight;

