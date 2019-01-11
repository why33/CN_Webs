import React from 'react'
import styled from 'styled-components'
import {Carousel,Icon,Input,Button} from 'antd'
import {labels,links,pictures} from '@type'
import { Link } from 'react-router-dom';

const Root=styled.div`
    display:flex;
    align-items:flex-start;
    box-sizing:border-box;
    .hot-style{
        flex:2;
        margin-right:20px;
        &>div{
            margin-bottom:10px;
        }
        .search-style{
            display:flex;
            width:100%;
            margin:10px 0;
            button{
                margin-left:10px;
            }
        }
        .labels-style,
        .links-style{
            box-sizing:border-box;
            padding:10px;
            border: 1px solid rgba(187, 187, 187, 1);
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
            a{  
                color:#000;
                padding:5px;
                border:1px solid #d1a378;
                margin:5px;
                border-radius:30%;
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
            display:block;
            height:377px;
        }
        .ant-carousel .slick-slide {
            text-align: center;
            height:377px;
            line-height: 160px;
            overflow: hidden;
            .picture-cont-style{
                width:100%;
                height:100%;
            }
        }
        
        .ant-carousel .slick-slide h1 {
            color: #fff;
        }
        .ant-carousel .slick-dots button{
            width:10px;
            height:10px;
            border-radius:50%;
        }
        .cont-ul-style{
            list-style:none;
            margin-top:10px;
            border: 1px solid rgba(187, 187, 187, 1);
            border-bottom:none;
            box-sizing:border-box;
            li{
                display:flex;
                box-sizing:border-box;
                border-bottom:1px solid rgba(187, 187, 187, 1);
                img{
                        width:200px;
                        height:150px;
                        margin:10px 20px 20px 10px;
                    }
                    .cont-detail-style{
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                        padding:0 20px;
                        p{
                            font-size:20px;
                            font-weight:bolder;
                            cursor:pointer;
                            text-decoration:underline;
                            margin-top:10px;
                        }
                        &>div{
                            color:rgba(187, 187, 187, 1);
                            margin-bottom:20px;
                            span:nth-child(1)>span{
                                margin-left:10px;
                            }
                            span:nth-child(2){
                                float:right;
                            }
                        }
                    }
            }
            
        }
    }


`
const arrays1=[
    {
        img:'/imgs/img2.jpg',
        text:'如果你无法简洁的表达你的想法，那只说明你还不够了解它。',
        time:'2018-06-26',
        author:'指引官',
        numbers:12000
    },
    {
        img:'/imgs/img2.jpg',
        text:'如果你无法简洁的表达你的想法，那只说明你还不够了解它。',
        time:'2018-06-26',
        author:'指引官',
        numbers:12000
    }
]


export default class MainPageLeft extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',//搜索内容
        }
    }
     //热门点击事件
     onClickFun=()=>{
        
    }
    //资讯详情
    onClickInfor=()=>{
        this.props.selectModuleFun('6')
        this.props.history.push('/detailShow');
    }
    //搜索
    onChangeValue=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    onSearch=()=>{
        this.props.selectModuleFun('5')
        this.props.history.push(`/search/?val=${this.state.value}`);
    }
    render(){
        return (
            <Root>
                   <div className='hot-style'>
                        <div className='search-style'>
                            <Input onChange={this.onChangeValue.bind(this)}/><Button onClick={this.onSearch.bind(this)}>搜索</Button>
                        </div>
                        <div className='labels-style'>
                            <p><span>标签集合</span></p>
                            <div className='labels-cont-style'>
                                 {
                                     labels.map((l,i)=>(
                                         <Link key={i} to={l.url}>{l.title}</Link>
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
                            <Carousel autoplay>
                                {
                                    pictures.map((item,index)=>(
                                        <div key={index} className='picture-cont-style'>
                                            <img key={index} src={item.url} alt={`图片-${index+1}`}/>
                                        </div>
                                    ))
                                }
                            </Carousel> 
                        </div>
                        <ul className='cont-ul-style'>
                            {
                                arrays1.map((item,index)=>(
                                    <li key={index} >
                                        <img src={item.img} alt='pic'/>
                                        <div className='cont-detail-style'>
                                            <p onClick={this.onClickInfor.bind(this)}>{item.text}</p>
                                            <div>
                                                <span>{item.time}<span>{item.author}</span></span>
                                                <span><Icon type="frown" theme="twoTone" /> {item.numbers}</span>
                                            </div>
                                            
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