import React from 'react'
import MainPageRight from '@comp/MainPageRight'
import styled from 'styled-components'
import { contents} from '@type'
import {Pagination} from 'antd'
import connect from '@connect'

const Root=styled.div`
    .content-style>div>ul:nth-child(1){
        list-style:none;
        min-height:580px;
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
            line-height:30px;
            span{
                position:relative;
                font-size:14px;
                line-height:20px;
                display:inline-block;
                padding:0 5px;
                color:#fff;
                margin-right:20px;
                background:#1890ff; 
            }
            span::after{
                position:absolute;
                content:'';
                right:-20px;
                width:0;
                height:0;
                border-width:10px;
                border-style:solid;
                border-color:transparent transparent transparent #1890ff;
            }
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
            &>span{
                display:inline-block;
                vertical-align:middle;
            }
            button{
                float:right;
                border:none;
                outline:none;
                background:none;
                cursor:pointer;
                padding:5px 10px;
                border: 1px solid rgba(187, 187, 187, .6);
                margin-top:20px;
            }
            button:hover{
                color:#1890ff; 
                border-color:#1890ff;
            }
        }
    }
    .ant-pagination{
        text-align:right;
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
    constructor(props){
        super(props);
        this.state={
            current:this.props.current[0],
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedPath!==this.props.selectedPath){
            let indexArr=window.location.hash.slice(1).split('/');
            let index=parseInt(indexArr[indexArr.length-1]);
            let lists=contents[index].children;
            this.props.ContentsListFun(lists||[]);

        }
    }
    //查看全文/查看代码
    detailShow=(item,index)=>{
        let indexArr0=window.location.hash.slice(1).split('/');
        let index0=parseInt(indexArr0[indexArr0.length-1]);
        let lists0=contents[index0].children;
        let success=()=>{
             this.props.selectModuleFun('7');
             this.props.ContentsListFun(lists0||[]);
             this.props.history.push(`/detailShow?t=${item.title}`);
        }
        this.props.contentSelectedFun(item,index,window.location.hash,()=>success());
    }
    //分页器变换
    onChangePage=(page)=>{
        this.setState({
            current:page
        })
        this.props.changeCurrentFun(0,page,this.props.current);
    }
    render(){
        let indexArr=window.location.hash.slice(1).split('/');
        let index=parseInt(indexArr[indexArr.length-1])|| 0;
        let parName=contents[index].title;
        let lists=contents[index].children;
        const listsArr= (lists||[]).slice((this.state.current-1)*3,this.state.current*3);
        return (
            <Root className='content-layout-style'>
                <div className="content-style">
                   {
                       lists?(
                           <div>
                                <ul>
                                    {
                                        listsArr.map((item,index)=>(
                                            <li key={index}>
                                                <p className='content-title-style' onClick={this.detailShow.bind(this,item,index)}>
                                                    <span>{parName}</span>
                                                    {item.title}
                                                </p>
                                                <div>{item.content}</div>
                                                <div className='content-other-style'>
                                                    <img src='/imgs/user.jpg' alt="用户头像"/>
                                                    <span>
                                                        <span>类型: {`${item.type==='md'?' 文章':' 代码'}`}</span><br/>
                                                        {item.time}
                                                    </span>
                                                    
                                                    <button onClick={this.detailShow.bind(this,item,index)}>{`${(item.type==="md")?'阅读全文':'查看代码'}`}</button>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <Pagination current={this.state.current} hideOnSinglePage pageSize={3} total={lists.length} onChange={this.onChangePage.bind(this)}/>
                            </div>
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