import React from 'react'
import styled from 'styled-components'
import {Carousel,Icon,} from 'antd'

const Root=styled.div`
    display:flex;
    align-items:flex-start;
    box-sizing:border-box;
    .hot-style{
        flex:2;
        margin-right:20px;
        p{
            height: 45px;
            line-height:45px;
            background-color: rgba(186, 186, 186, 1);
            color: rgba(16, 16, 16, 1);
            font-size: 25px;
            text-align: center;
            border: 1px solid rgba(187, 187, 187, 1);
        }
        ul{
        padding:0 20px;
        list-style:none;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        line-height: 36px;
        color: rgba(16, 16, 16, 1);
        font-size:20px;
        text-align: center;
        li>span{
            cursor:pointer;
        }
        li>span:hover{
            color:#1890ff;
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
            background:#1890ff;
            overflow: hidden;
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
const arrays=["销售","客服","市场","财务","人力资源","行政项目","质量","高级管理","房产","建筑","物业管理","IT","互联网","通信","采购","贸易","交通","物流","传媒","印刷","艺术设计","其他"];
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
     //热门点击事件
     onClickFun=()=>{
        
    }
    //资讯详情
    onClickInfor=()=>{
        this.props.selectModuleFun('6')
        this.props.history.push('/detailShow');
    }
    render(){
        return (
            <Root>
                <div className='hot-style'>
                        <p>热门</p>
                        <ul>
                            {
                                arrays.map((i,index)=>(
                                    <li key={i} onClick={this.onClickFun.bind(this)}><span>{i}</span>{`${(index+1)===arrays.length?"":"/"}`}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='cont-style'>
                        <div className='cont-carouse-style'>
                            <Carousel autoplay>
                                <div><h1>1</h1></div>
                                <div><h1>2</h1></div>
                                <div><h1>3</h1></div>
                                <div><h1>4</h1></div>
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