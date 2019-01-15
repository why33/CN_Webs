import React from 'react'
import {Icon } from 'antd'
import iconType from '@icon'
import styled from 'styled-components'

const Root=styled.div`
    width:100%;  
    
   
    .detail-show-style{
       width:100%; 
       padding:20px;
       box-sizing:border-box;
       box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
       &>button{
           border:none;
           outline:none;
           background:none;
           cursor:pointer;
           padding:5px 10px;
           border: 1px solid rgba(187, 187, 187, .6);
       }
       &>button:hover{
            color:#1890ff; 
            border-color:#1890ff;
        }
    }
    .detail-title-style{
        font-size:22px;
        font-weight:bold;
        text-align:center;
        margin-bottom:5px;
    }
    .detail-cont-style{
        font-size:18px;
        &>span{
            display:block;
            text-align:center;
            font-size:12px;
            color:rgba(187, 187, 187, 1);
            margin-bottom:1em;
        }
        .detail-content-style{
            padding:20px;
            h1,h2,h3,h4,h5,h6{
                padding:5px;
                text-indent:10px;
                background:rgba(187, 187, 187, .3);
                border-left:5px solid #1890ff;

            }
            hr{
                border:1px solid rgba(187, 187, 187, .3);
                margin:20px;
            }
            p{
                font-size:16px;
                margin:20px;
            }
            ul{
                list-style-position:inside;
            }
            code{
                display:block;
                width:100%;
                padding:10px;
                border:1px solid rgba(187, 187, 187, .2);
            }
        }
    }
     .detail-but-style{
        margin-top:40px;
        display:flex;
        justify-content:space-between;
        button{
            border:none;
            outline:none;
            background:none;
            cursor:pointer;
            padding:5px 10px;
            border: 1px solid rgba(187, 187, 187, .6);
        }
        button:hover{
            color:#1890ff; 
            border-color:#1890ff;
        }
     }
`
export default class DetailShow extends React.Component{
    componentWillMount(){
        if(!this.props.contentSelected){
            this.props.selectModuleFun('0')
            this.props.history.push(`/`);
        }
    }
    //返回主页
    returnIndex=()=>{
        this.props.selectModuleFun('0')
        this.props.history.push(`/`);
    }
    render(){
        const { contentSelected,contentDetailHTML }=this.props;
        return (
            <Root>
               
                {
                    contentSelected && (
                        <div className='detail-show-style'> 
                            <button onClick={this.returnIndex.bind(this)}>返回主页</button>
                            <p className='detail-title-style'>{contentSelected.title}</p>
                            <div className='detail-cont-style'>
                                <span><Icon type={iconType.iTime}/> {contentSelected.time}</span>
                                <div className='detail-content-style' dangerouslySetInnerHTML={{__html:contentDetailHTML}}>
                                </div>
                            </div>
                            <div className='detail-but-style'>
                                <button><Icon type={iconType.iLeft}/> 上一篇</button>
                                <button>下一篇 <Icon type={iconType.iRight}/></button>
                            </div>
                        </div>
                    )
                }
               
            </Root>
        )
    }
}