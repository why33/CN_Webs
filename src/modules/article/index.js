import React from 'react'
import connect from '@connect'
import styled from 'styled-components'
import MainPageRight from '@comp/MainPageRight'
import { articles } from '@type'
import { Icon } from 'antd';
import IconType from '@icon';
const Root=styled.div`
   &>div>ul{
        list-style:none;
        li{ 
            
            box-sizing:border-box;
            box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.6);
            margin-bottom:15px;
            &>div{
                box-sizing:border-box;
                
            }
            .content-detail-style{
                display:flex;
                padding:20px;
                border-bottom:1px solid rgba(187, 187, 187,.6);
                div{
                    width:0;
                    height:auto;
                    flex:1;
                    img{
                        width:100%;
                    }
                }
                p{
                    flex:3;
                    margin-left:20px;
                    span{
                        display:block;
                        font-size:18px;
                        font-weight:bold;
                        cursor:pointer;
                        margin-bottom:10px;
                    }
                    span:hover{
                        color:#1890ff; 
                    }
                }
            }
            .content-detail-style+div{
                padding:5px 20px;
                color:rgba(0,0,0,.5);
                button{
                    float:right;
                    outline:none;
                    border:none;
                    background:none;
                    font-weight:bold;
                    cursor:pointer;
                }
                button:hover{
                    color:#1890ff; 
                }
            }
        }
   }

`

@connect("index","showContent")
class Articles extends React.Component{
    //阅读全文
    showDetail=(item,index)=>{
        this.props.contentSelectedFun(item,index,window.location.pathname,()=>this.success(item));
    }
    success=(item)=>{
        this.props.selectModuleFun('7');
        this.props.ContentsListFun(articles);
        this.props.history.push(`/detailShow?t=${item.title}`);
    }
    render(){
        return (
            <Root className='content-layout-style'>
                <div>
                    <ul>
                        {
                            articles.map((item,index)=>(
                                <li key={index}>
                                   <div className='content-detail-style'>
                                        {
                                            item.img&& (
                                                <div><img src={item.img} alt="图片"/></div>
                                            )
                                        }
                                        <p>
                                            <span onClick={this.showDetail.bind(this,item,index)}>{item.title}</span>
                                            {item.content}
                                        </p>
                                   </div>
                                   <div>
                                       <Icon type={IconType.iTime}/> {item.time}
                                       <button onClick={this.showDetail.bind(this,item,index)}>阅读全文 <Icon theme="filled" type={IconType.iRightCircle}/></button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <MainPageRight {...this.props}/>
            </Root>
        )
        
    }
}
export default Articles;