import React from 'react'
import styled from 'styled-components'
import HotTabs from './HotTabs'
import { Button} from 'antd'

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
            cursor:pointer;
            border:5px solid #fff;
            border-radius:5px 5px 0 0;
        }
        &>p{
            color:#1890ff; 
            font-size:22px;
            font-family:Courier;
            font-weight:bolder;
            cursor:pointer;
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

`

export default class MainPageRight extends React.Component{
    
    //点击进入个人资料
    onClickUser=()=>{
        this.props.selectModuleFun('5')
        this.props.history.push('/intro');
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
                <HotTabs {...this.props}/>    
            </Root>
        )
    }
}

