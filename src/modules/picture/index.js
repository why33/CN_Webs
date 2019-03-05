import React from 'react'
import styled from 'styled-components'
import {pictures} from '@type'

const Root=styled.div`
    width:100%;
    min-height:450px;
    margin:20px 0 150px;
    .picture-contents-cont-style{
        list-style:none;
        .picture-picture-style{
            display:inline-block; 
            vertical-align:top;
            width:20%;
            position:relative;
            height:0;
            padding-bottom:15%;
            margin-left:10%;
            margin-top:20px;
            border:1px solid rgba(200,200,200,.3);
            margin-bottom:15px;
            border-radius:2px;
            cursor:pointer;
            font-size:16px;
            line-height:30px;
            text-align:center;
            &>div{
                position:absolute;
                display:flex;
                flex-direction:column;
                width:100%;
                height:100%;
                z-index:10;
                padding:2px;
                background:#fff;
                border:1px solid rgba(187, 187, 187,.6);
            }
            img{
                display:block;
                height:0;
                flex-grow:1;
                width:100%;
            }
            span{
                height:30px;
            }
        }
        .picture-picture-style::before,
        .picture-picture-style::after{
            position:absolute;
            bottom:5px;
            content:'';
            width:60%;
            height:50px;
            z-index:8;
            box-shadow:0px 10px 10px -5px rgba(0,0,0,.4);
        }
        .picture-picture-style::before{
            left:-3px;
            transform:rotate(-8deg);
            -webkit-transform: rotate(-8deg) translateZ(0);
            -o-transform:rotate(-8deg);
            -moz-transform:rotate(-8deg);
            -ms-transform:rotate(-8deg);
        }
        .picture-picture-style::after{
            right:-3px;
            transform:rotate(8deg);
            -webkit-transform: rotate(8deg) translateZ(0);
            -o-transform:rotate(8deg);
            -moz-transform:rotate(8deg);
            -ms-transform:rotate(8deg);
        }
        .picture-picture-style:hover{
            color:#1890ff;
            border:1px solid rgba(24, 144, 255,.5);
        }
        .picture-picture-style:hover::before,
        .picture-picture-style:hover::after{
            box-shadow:0px 10px 10px -5px rgba(24, 144, 255,.5);
        }
    }
`
export default class PictureContent extends React.Component{
    mapLisCont=(obj)=>{
        return obj.map((item,index)=>{
                return (
                    <li className='picture-picture-style' key={index}>
                        <div>
                            <img src={item.url} alt={item.title}/>
                            <span>{item.title}</span>
                        </div>
                    </li>
                )
        })
    }
    render(){
        return (
            <Root>
                <ul className='picture-contents-cont-style'>
                    {
                        pictures && this.mapLisCont(pictures)
                    }
                </ul>
            </Root>
        )
    }
}