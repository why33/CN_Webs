import React from 'react'
import styled from 'styled-components'
import HotTabs from './HotTabs'
import { Button,Input} from 'antd'

const Root=styled.div`
    .search-style{
        display:flex;
        width:100%;
        margin-bottom:10px;
        button{
            margin-left:10px;
        }
    }
    .user-style{
        position:relative;
        width:100%;
        text-align:center;
        font-size:18px;
        border:1px solid rgba(187, 187, 187, 1);
        button{
            position:absolute;
            right:5px;
            top:5px;
        }
        img{
            width:80px;
            height:80px;
            border-radius:50%;
            margin-top:10px;
            cursor:pointer;
        }
        .user-detail-style{
            margin-top:20px;
            p{
                display:flex;
                justify-content:space-around;
            }
        }  
    }

`

export default class MainPageRight extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',//搜索内容
        }
    }
    //点击进入个人资料
    onClickUser=()=>{
        this.props.selectModuleFun('4')
        this.props.history.push('/user');
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
                <div className='search-style'>
                       <Input onChange={this.onChangeValue.bind(this)}/><Button onClick={this.onSearch.bind(this)}>搜索</Button>
                 </div>
                <div className='user-style'>
                        <Button>退出</Button>  
                        <img src='/imgs/img2.jpg'  alt='用户' onClick={this.onClickUser.bind(this)}/>
                        <p>杰哥达人</p>
                        <div className='user-detail-style'>
                            <p>
                                <span>发布: 10</span>
                                <span>粉丝: 100</span>
                            </p>
                            <p>
                                <span>新消息: 10</span>
                                <span>关注: 100</span>
                                <span>收藏: 100</span>

                            </p>
                        </div>
                </div>
                <HotTabs {...this.props}/>    
            </Root>
        )
    }
}

