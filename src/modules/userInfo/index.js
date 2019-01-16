import React from 'react'
import {Tabs} from 'antd'
import styled from 'styled-components'
import PersonalData from './PersonalData'
import Contact from './Contact'
import Collects from './Collects'

const TabPane = Tabs.TabPane;
const Root=styled.div`
   width:100%;
   .user-part1-style{
       width:90%;
       display:flex;
       align-items:center;
       margin:20px auto 5px;
       font-size:20px;
       box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
        img{
            width:180px;
            height:120px;
            margin:0 5% 0 10%;
        }
        &>div{
            p{
                color:#1890ff; 
                font-size:22px;
                font-family:Courier;
                font-weight:bolder;
                line-height:30px;
                margin-top:40px;
            }
        }
       ul{
           list-style:none;
           li{
              position:relative;
              font-size:16px;
              line-height:30px;
              letter-spacing:2px;
              padding-left:20px;
           }
           li::before{
              position:absolute;
              content:"";
              top:12px;
              left:0px;
              width:8px;
              height:8px;
              border-radius:50%;
              background:#71bbff;
           }
       }
   }
   .user-part2-style{
       width:90%;
       display:flex;
       align-items:flex-start;
       margin:15px auto;
       &>ul{
           list-style:none;
           font-size:16px;
           box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
           border-bottom:none;
           margin-right:15px;
           li{
               padding:10px 30px;
               text-align:center;
               cursor:pointer;
               border-bottom:1px solid rgba(178,178,178,1);
           }
           li:hover,.activeStyle{
               color:#fff;
               background:#1890ff;
           }
       }
       &>div{
           width:0;
           flex-grow:1;
           box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
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
const titleArray=[
    {title:"我的资料",comp:PersonalData},
    {title:"联系方式",comp:Contact},
    {title:"我的收藏",comp:Collects}
]
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
                    <img src='/imgs/user.jpg' alt='头像'/>
                    <div>
                        <p>古罗马</p>
                        <ul>
                            <li>一个灰常喜欢前端的90后女生...</li>
                            <li>一个爱折腾的90后女生...</li>
                            <li>一个喜欢出去瞎晃晃的女生...</li>
                        </ul>
                    </div>
                    
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