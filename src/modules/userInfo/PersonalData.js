import React from 'react'
import {Checkbox} from 'antd'
import styled from 'styled-components'

const CheckboxGroup = Checkbox.Group;

const Root=styled.div`
   width:100%;
   box-sizing:border-box;
   padding-left:10px;
   &>ul.presonal-style{
       list-style:none;
       font-size:18px;
       line-height:50px;
       li>span{
           display:inline-block;
           width:100px;
           text-align:right;
           margin-right:15px;
       }
       li input{
          pointer-events:none;
       }
       .ant-checkbox-inner,.ant-checkbox-wrapper{
           cursor:default;
           pointer-events:none;
       }
   }

`

export default class PersonalData  extends React.Component{
    render(){
        return (
            <Root>
                <ul className='presonal-style'>
                    <li><span>头像 :</span><img src='/imgs/img1.jpg' alt='头像'/></li>
                    <li><span>昵称 :</span>杰哥超人</li>
                    <li><span>性别 :</span><CheckboxGroup options={["男","女"]} value={["男"]} onChange={null}/></li>
                    <li><span>学历 :</span><CheckboxGroup options={["高中及以下","专科","本科","研究生/硕士","博士"]} value={["本科"]} onChange={null}/></li>
                    <li><span>学校 :</span>兰州理工大学</li>
                    <li><span>专业 :</span>计算机科学与技术</li>
                    <li><span>所在地 :</span>浙江 - 宁波</li>

                </ul>
            </Root>
        )
    }
}