import React from 'react'
import {Tabs} from 'antd'
import styled from 'styled-components'
import PersonalData from './PersonalData'

const TabPane = Tabs.TabPane;
const Root=styled.div`
   width:100%;
   .user-part1-style{
       width:90%;
       display:flex;
       justify-content:space-around;
       align-items:flex-end;
       margin:20px auto 5px;
       font-size:20px;
       border:1px solid rgba(178,178,178,1);
       &>div{
           margin:30px;
           img{
               width:200px;
               height:150px;
               margin-right:10px;
           }
       }
       ul{
           list-style:none;
           li{
               float:left;
               padding:20px 50px;
               text-align:center;
               span{
                   display:block;
               }
           }
       }
   }
   .user-part2-style{
       width:90%;
       display:flex;
       align-items:flex-start;
       margin:5px auto;
       &>ul{
           list-style:none;
           font-size:18px;
           border:1px solid rgba(178,178,178,1);
           border-bottom:none;
           margin-right:5px;
           li{
               padding:10px;
               text-align:center;
               cursor:pointer;
               border-bottom:1px solid rgba(178,178,178,1);
           }
           li:hover,.activeStyle{
               color:#fff;
               background:rgba(178,178,178,1);
           }
       }
       &>div{
           width:0;
           flex-grow:1;
           border:1px solid rgba(178,178,178,1);
           .ant-tabs{
               width:90%;
               margin:5%;
           }
           .ant-tabs-bar{
               display:none;
           }
       }
   }

`
const titleArray=[{title:"我的资料",comp:()=><PersonalData/>},
    {title:"我的粉丝",comp:PersonalData},
    {title:"我的关注",comp:PersonalData},
    {title:"我的发布",comp:PersonalData},
    {title:"我的收藏",comp:PersonalData},
    {title:"我的评论/消息",comp:PersonalData}];
export default class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:0
        }
    }
    click=(val)=>{
        this.setState({
            key:val
        })
    }
    render(){
        return (
            <Root>
               <div className="user-part1-style">
                    <div><img src='/imgs/img2.jpg' alt='头像'/>杰哥达人</div>
                    <ul>
                        <li><span>100</span>我的发布</li>
                        <li><span>100</span>我的粉丝</li>
                        <li><span>100</span>我的关注</li>
                    </ul>
               </div>
               <div className="user-part2-style">
                    <ul>
                        {
                           titleArray.map((item,index)=>(
                               <li key={index} className={index===this.state.key?"activeStyle":""} onClick={this.click.bind(this,index)}>{item.title}</li>
                           ))
                        }
                    </ul>
                    <div>
                        <Tabs activeKey={this.state.key.toString()}>
                            {
                                titleArray.map((item,index)=>(
                                    <TabPane tab={item.title} key={index}><item.comp/></TabPane>
                                ))
                            }
                        </Tabs>
                    </div>
               </div>
            </Root>
        )
    }
}