import React from 'react'
import styled from 'styled-components'
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane;
const Root=styled.div`
    width:100%;
    margin-top:10px;
    border:1px solid rgba(187, 187, 187, 1);
    .hot-search-dot-style{
        position:relative;
        font-size:20px;
        font-weight:bold;
        text-indent:10px;
        div{
            width:100%;
            position:absolute;
            top:0;
            text-align:right;
            span{
                display:inline-block;
                width:10px;
                height:10px;
                border-radius:50%;
                margin-right:10px;
                cursor:pointer;
                border:2px solid rgba(187, 187, 187, 1);
                
            }
            .activeDot{
                background:rgba(187, 187, 187, 1);
            }
        }

    }
    .ant-tabs{
        width:98%;
        margin:15px auto;
        & .ant-tabs-bar{
            display:none;
        }
    }
`

export default class HotTabs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:'1'
        }
    }
    clickDot=(val)=>{
        this.setState({
            key:val
        })
    }
    render(){
        return (
            <Root>
                <div className='hot-search-dot-style'>
                    热榜
                    <div>
                        <span onClick={this.clickDot.bind(this,"1")} className={this.state.key==="1"?'activeDot':''}></span>
                        <span onClick={this.clickDot.bind(this,"2")} className={this.state.key==="2"?'activeDot':''}></span>
                        <span onClick={this.clickDot.bind(this,"3")} className={this.state.key==="3"?'activeDot':''}></span>
                    </div>
                </div>
                <Tabs activeKey={this.state.key}>
                    <TabPane tab="Tab 1" key="1">内容1</TabPane>
                    <TabPane tab="Tab 2" key="2">内容2</TabPane>
                    <TabPane tab="Tab 3" key="3">内容3</TabPane>
                </Tabs>

            </Root>
        )
    }
}