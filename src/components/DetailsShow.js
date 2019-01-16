import React from 'react'
import {Icon } from 'antd'
import iconType from '@icon'
import styled from 'styled-components'
import connect from '@connect'
import MainPageRight from '@comp/MainPageRight'


const Root=styled.div`
    width:100%;  
    display:flex;
    align-items:flex-start;
    justify-content:center;
    &>div{
        box-sizing:border-box;
        padding:20px 10px;
    }
    &>div:nth-child(1){
        width:0;
        flex:6;
    }
    &>div:nth-child(2){
         flex:2;
     }
   
    .detail-show-style{
       width:100%; 
       padding:20px;
       box-sizing:border-box;
       box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
       &>button{
           border:none;
           outline:none;
           background:none;
           cursor:pointer;
           padding:5px 10px;
           border: 1px solid rgba(187, 187, 187, .6);
       }
       &>button:hover{
            color:#1890ff; 
            border-color:#1890ff;
        }
    }
    .detail-title-style{
        font-size:22px;
        font-weight:bold;
        text-align:center;
        margin-bottom:5px;
    }
    .detail-cont-style{
        font-size:18px;
        &>span{
            display:block;
            text-align:center;
            font-size:12px;
            color:rgba(187, 187, 187, 1);
            margin-bottom:1em;
        }
        .detail-content-style{
            padding:20px;
            h1,h2,h3,h4,h5,h6{
                padding:5px;
                text-indent:10px;
                background:rgba(187, 187, 187, .3);
                border-left:5px solid #1890ff;

            }
            hr{
                border:1px solid rgba(187, 187, 187, .3);
                margin:20px;
            }
            p{
                font-size:16px;
                margin:20px;
            }
            ul{
                list-style-position:inside;
            }
            code{
                display:block;
                width:100%;
                padding:10px;
                border:1px solid rgba(187, 187, 187, .2);
            }
        }
    }
     .detail-but-style{
        margin-top:40px;
        display:flex;
        justify-content:space-between;
        button{
            border:none;
            outline:none;
            background:none;
            cursor:pointer;
            padding:5px 10px;
            border: 1px solid rgba(187, 187, 187, .6);
        }
        button:not(.disableStyle):hover{
            color:#1890ff; 
            border-color:#1890ff;
        }
        .disableStyle{
            cursor:not-allowed;
        }
     }
`
@connect('index','showContent') 
class DetailShow extends React.Component{
    componentWillMount(){
        if(!this.props.contentSelected){
            this.props.selectModuleFun('0');
            this.props.history.push(`/`);
           
        }
    }
    //返回
    returnIndex=()=>{
        let path=this.props.contentSelected.path;
        this.props.paths.forEach(r=>{
            if(new RegExp(r.url).test(path)){
                if(path.split('/').length===3){
                    this.props.selectModuleFun(r.key+'-'+path.split('/')[2]);
                }else{
                    this.props.selectModuleFun(r.key);
                }
            }
        })
        this.props.history.push(this.props.contentSelected.path);
    }
    //上一篇
    preContent=(index)=>{
       let nums=index-1;
       let item=this.props.contentsList[nums];
       this.props.selectModuleFun('7');
       this.props.contentSelectedFun(item,nums,this.props.contentSelected.path,()=>{
           this.props.history.push(`/detailShow?t=${item.title}`);
           window.document.scrollingElement.scrollTop=0;
       } );
    }
    //下一篇
    nextContent=(index)=>{
        let nums=index+1;
        let item=this.props.contentsList[nums];
        this.props.selectModuleFun('7');
        this.props.contentSelectedFun(item,nums,this.props.contentSelected.path,()=>{
            this.props.history.push(`/detailShow?t=${item.title}`);
            window.document.scrollingElement.scrollTop=0;
        } );
    }
    render(){
        const { contentSelected,contentDetailHTML,contentsList }=this.props;
        let length=contentsList.length;
        return (
            <Root>
                <div>
                    {
                        contentSelected && (
                            <div className='detail-show-style'> 
                                <button onClick={this.returnIndex.bind(this)}>返回</button>
                                <p className='detail-title-style'>{contentSelected.title}</p>
                                <div className='detail-cont-style'>
                                    <span><Icon type={iconType.iTime}/> {contentSelected.time}</span>
                                    <div className='detail-content-style' dangerouslySetInnerHTML={{__html:contentDetailHTML}}>
                                    </div>
                                </div>
                                <div className='detail-but-style'>
                                    <button onClick={this.preContent.bind(this,contentSelected.index)} className={contentSelected.index===0?"disableStyle":""} disabled={contentSelected.index===0?true:false}><Icon type={iconType.iLeft}/> 上一篇</button>
                                    <button onClick={this.nextContent.bind(this,contentSelected.index)} className={contentSelected.index===(length-1)?"disableStyle":""} disabled={contentSelected.index===2?true:false}>下一篇 <Icon type={iconType.iRight}/></button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <MainPageRight {...this.props}/>
            </Root>
        )
    }
}
export default DetailShow;