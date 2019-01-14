import React from 'react'
import styled from 'styled-components'

const Root=styled.div`
    width:100%;
    height:100%;
    display:flex;
    &>*{
        flex:1;
    }
    ul{
        font-size:16px;
        line-height:50px;
        li>span{
            display:inline-block;
            width:100px;
            text-align:right;
            margin-right:15px;
        }
       
       
    } 
    &>div{
        text-align:center;
        img{
            width:150px;
            height:150px;
        }
    }
`

export default class Contact extends React.Component{
    render(){
        return (
            <Root>
                <ul>
                    <li><span> Q Q :</span>852707683</li>
                    <li><span>邮箱 :</span>852707683@qq.com</li>
                    <li><span>联系电话 :</span> 18268562542</li>
                </ul>
                <div>
                    <img src='./imgs/userCode.jpg' alt='微信二维码'/>
                    <p>微信二维码</p>
                </div>
            </Root>
        )
    }
}