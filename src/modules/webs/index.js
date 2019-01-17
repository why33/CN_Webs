import React from 'react'
import MainPageRight from '@comp/MainPageRight'
import styled from 'styled-components'
import { contents} from '@type'
import connect from '@connect'
import {Icon} from 'antd'
import iconType from '@icon'

const Root=styled.div`
    .content-style>ul{
        list-style:none;
        li{ 
            padding:20px;
            box-sizing:border-box;
            box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.6);
            margin-bottom:15px;
        }
        .content-title-style{
            font-size:18px;
            font-weight:bold;
            cursor:pointer;
        }
        .content-title-style:hover{
            color:#1890ff; 
        }
        .content-other-style{
            font-size:12px;
            color:gray;
            margin-top:20px;
            img{
                width:50px;
                height:50px;
                border-radius:50%;
                margin-right:10px;
            }
            button{
                float:right;
                border:none;
                outline:none;
                background:none;
                cursor:pointer;
                padding:5px 10px;
                border: 1px solid rgba(187, 187, 187, .6);
                margin-top:30px;
            }
            button:hover{
                color:#1890ff; 
                border-color:#1890ff;
            }
        }
    }
    .not-content-Style{
        height:300px;
        text-align:center;
        padding-top:100px;
        font-size:20px;
        text-shadow:1px 1px .5px  rgba(187, 187, 187,.8);
        box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
    }


`
@connect("index","showContent")
class WebContent extends React.Component{
    //查看全文/查看代码
    detailShow=(item,index)=>{
        let indexArr0=window.location.pathname.split('/');
        let index0=parseInt(indexArr0[indexArr0.length-1]);
        let lists0=contents[index0].children;
        let success=()=>{
             this.props.selectModuleFun('7');
             this.props.ContentsListFun(lists0||[]);
             this.props.history.push(`/detailShow?t=${item.title}`);
        }
        this.props.contentSelectedFun(item,index,window.location.pathname,()=>success());
    }
    render(){
        let indexArr=window.location.pathname.split('/');
        let index=parseInt(indexArr[indexArr.length-1]);
        let lists=contents[index].children;
        return (
            <Root className='content-layout-style'>
                <div className="content-style">
                   {
                       lists?(
                            <ul>
                                {
                                    lists.map((item,index)=>(
                                        <li key={index}>
                                            <p className='content-title-style' onClick={this.detailShow.bind(this,item,index)}><Icon type={`${item.type==='md'?iconType.iFileText:iconType.iCode}`} theme="filled" /> {item.title}</p>
                                            <div>{item.content}</div>
                                            <div className='content-other-style'>
                                                <img src='/imgs/user.jpg' alt="用户头像"/>
                                                {item.time}
                                                <button onClick={this.detailShow.bind(this,item,index)}>{`${(item.type==="md")?'阅读全文':'查看代码'}`}</button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                       ):
                       <div className="not-content-Style">木有添加内容...</div>
                   }
                </div>
                <MainPageRight {...this.props}/>
            </Root>
        )
    }
}
export default  WebContent;