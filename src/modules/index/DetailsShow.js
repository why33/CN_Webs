import React from 'react'
import {Icon } from 'antd'
import styled from 'styled-components'

const Root=styled.div`
    width:100%;
    .detail-show-style{
        box-sizing:border-box;
        padding:10px;
        border: 1px solid rgba(187, 187, 187, 1);
    }
    .detail-title-style{
        font-size:20px;
        font-weight:bold;
    }
    .detail-cont-style{
        font-size:18px;
        &>span{
            font-weight:bold;
            img{
                width:80px;
                height:80px;
                border-radius:50%;
                margin-right:10px;
            }
        }
        
        ul{
            display:flex;
            font-size:14px;
            list-style:none;
            margin-top:10px;
            li{
                flex:1;
                text-align:center;
            }
        }
        .detail-content-style{
            padding:20px;
            border: 1px solid rgba(187, 187, 187, 1);
            img{
                width:100%;
                height:150px;
            }
        }
    }
    
`
export default class DetailShow extends React.Component{
    render(){
        console.log(11111,this.props.contentDetail)
        return (
            <Root>
                <div className='detail-show-style'>
                    <p className='detail-title-style'>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
                    <div className='detail-cont-style'>
                        <span><img src='/imgs/img2.jpg' alt=""/>杰哥发</span>
                        <ul>
                            <li>2018-5-5</li>
                            <li><Icon type="smile" theme="twoTone" />1000</li>
                            <li><Icon type="star" theme="twoTone" />收藏</li>
                        </ul>
                        <div className='detail-content-style' dangerouslySetInnerHTML={{__html:this.props.contentDetail}}>
                        </div>
                    </div>
                
                
                </div>
            </Root>
        )
    }
}