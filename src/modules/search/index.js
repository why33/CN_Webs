import React from 'react'
import {Input,Button,Tabs} from 'antd'
import styled from 'styled-components'

const TabPane = Tabs.TabPane;
const Root=styled.div`
    width:80%;
    margin:40px auto;
    .search-style{
        display:flex;
        line-height:50px;
        .ant-input{
            height:50px;
            font-size:20px;
        }
        button{
            font-size:20px;
            height:50px;
            margin-left:40px;
        }
    }
    .search-content-style{
        width:80%;
        margin:50px auto;
        ul{
            list-style:none;
            display:flex;
            border-bottom: 1px solid #e8e8e8;
            li{
                flex:1;
                font-size:20px;
                font-weight:bold;
                line-height:40px;
                text-align:center;
                span{
                    cursor:pointer;
                }
                span:hover{
                    color: #1890ff;
                }
            }
            .activeStyle{
                color: #1890ff;
            }
        }
        .ant-tabs-bar{
            display:none;
        }
    }

`
const arr=['资讯','动态','问答','职位','人'];
export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:0
        }
    }
    //切换tab
    clickTab=(index)=>{
        this.setState({
            key:index
        })
    }
    render(){
        return (
            <Root>
                <div className='search-style'>
                    <Input addonBefore='职引官' />
                    <Button>搜索</Button>
                </div>
                <div className='search-content-style'>
                    <ul>
                        {
                            arr.map((item,index)=>(
                                <li onClick={this.clickTab.bind(this,index)} key={index} className={index===this.state.key?"activeStyle":""}><span>{item}</span></li>
                            ))
                        }
                    </ul>
                    <Tabs activeKey={this.state.key.toString()} type="card">
                        {arr.map((item,index)=>(
                            <TabPane tab={item} key={index.toString()}>{item}</TabPane>
                        ))}
                    </Tabs>
                </div>
            </Root>
        )
    }
}