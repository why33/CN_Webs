import React from 'react'
import styled from 'styled-components'
import {pictures} from '@type'
import{Pagination,Input,Button} from 'antd'
import connect from '@connect'

const Root=styled.div`
    width:100%;
    min-height:450px;
    margin:20px 0 100px;
    .search-style{
        text-align:right;
        margin-top:20px;
        border-bottom:1px solid rgba(200,200,200,.6);
        &>*{
            display:inline-block;
            vertical-align:top;
        }
        .ant-input{
            width:25%;
            margin-right:10px;
            margin-bottom:20px;
        }
        button{
            margin-right:10%;
        }
    }
    .picture-contents-cont-style{
        position:relative;
        list-style:none;
        .picture-picture-style{
            display:inline-block; 
            vertical-align:top;
            width:20%;
            position:relative;
            height:0;
            padding-bottom:15%;
            margin-left:10%;
            margin-top:2%;
            border:1px solid rgba(200,200,200,.3);
            margin-bottom:2%;
            border-radius:2px;
            cursor:pointer;
            font-size:16px;
            line-height:30px;
            text-align:center;
            &>div:last-child{
                position:absolute;
                display:flex;
                flex-direction:column;
                width:100%;
                height:100%;
                z-index:10;
                padding:2px;
                background:#fff;
                border:1px solid rgba(187, 187, 187,.6);
                &>div{
                    height:0;
                    flex-grow:1;
                    width:100%;
                    img{
                        width:100%;
                        height:100%;
                     }
                }
                span{
                    height:30px;
                    display:block;
                    height:30px;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
            
        }
        .picLiStyle::before,
        .picLiStyle::after{
            position:absolute;
            bottom:5px;
            content:'';
            width:60%;
            height:50px;
            z-index:8;
            box-shadow:0px 10px 10px -5px rgba(0,0,0,.4);
        }
        .picLiStyle::before{
            left:-3px;
            transform:rotate(-8deg);
            -webkit-transform: rotate(-8deg) translateZ(0);
            -o-transform:rotate(-8deg);
            -moz-transform:rotate(-8deg);
            -ms-transform:rotate(-8deg);
        }
        .picLiStyle::after{
            right:-3px;
            transform:rotate(8deg);
            -webkit-transform: rotate(8deg) translateZ(0);
            -o-transform:rotate(8deg);
            -moz-transform:rotate(8deg);
            -ms-transform:rotate(8deg);
        }
        .picLiStyle:hover{
            color:#1890ff;
            border:1px solid rgba(24, 144, 255,.5);
        }
        .picture-picture-style:hover::before,
        .picture-picture-style:hover::after{
            box-shadow:0px 10px 10px -5px rgba(24, 144, 255,.5);
        }
        .showPicStyle{
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            box-sizing:border-box;
            margin:0;
            cursor:default;
            background:rgba(35,40,45,.9);
            z-index:9999;
            &>div:nth-of-type(2){
                width:56%;
                height:50%;
                top:20%;
                left:22%;
                border-radius:5px;
                box-shadow:1px 1px 15px 1px rgba(255,255, 255,.3);
            }
            &>div:nth-of-type(1){
                position:fixed;
                width:100%;
                height:100%;
                color:#c0c0c0;
                span{
                    position:fixed; 
                    font-size:40px;
                    cursor:pointer;
                }
                span:hover{
                    color:#fff;
                }
                .cancel_but{
                    top:10px;
                    right:10px;
                   
                }
                .prev_but{
                    top:43%;
                    left:15%;
                    font-size:50px;
                }
                .next_but{
                    top:43%;
                    right:15%;
                    font-size:50px;
                }
               
            }
        }
    }
    .picture-contents-cont-style::before{
        position:absolute;
        content:'';
        margin-top:19%;
        width:100%;
        height:1px;
        background:rgba(200,200,200,.4);
    }
    .picture-contents-cont-style::after{
        position:absolute;
        left:0;
        content:'';
        width:100%;
        height:1px;
        background:rgba(200,200,200,.4);
       
    }
    .ant-pagination {
        text-align:right;
        margin-top:20px;
        margin-right:4%;

    }
`
@connect("picture","index")
class PictureContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:this.props.picCurrent || 1,
            show:[0,false],
            value:'',//搜索内容
        }
    }
    //图片展示
    showPicture=(index,status)=>{
        !status &&　this.setState({
            show:[index,true]
        })
    }
    //关闭图片展示
    cancelPic=()=>{
        this.setState({
            show:[0,false]
        })
    }
    //上一页
    prevPic=()=>{
        if(this.state.show[0]!==0){
            this.setState({
                show:[this.state.show[0]-1,true],
            })
        }
    }
    //下一页
    nextPic=()=>{
        if(this.state.show[0]!==(pictures.length-1)){
            this.setState({
                show:[this.state.show[0]+1,true],
            })
        }
        
    }
    mapLisCont=(obj)=>{
        return obj.map((item,index)=>{
                let status=(this.state.show[0]===index && this.state.show[1]);
                let showArr=Object.keys(obj).slice((this.state.current-1)*9,this.state.current*9);
                let showStatu=showArr.find((i)=>parseInt(i)===index);
                return (
                    <li 
                        className={`picture-picture-style ${status?'showPicStyle':'picLiStyle'}`} 
                        key={index} 
                        onClick={this.showPicture.bind(this,index,status)}
                        hidden={(showStatu || status)?false:true}
                    >
                        {
                            status && (
                                <div>
                                    <span className='cancel_but' onClick={this.cancelPic.bind(this)}> &#10008; </span>
                                    <span className='prev_but' onClick={this.prevPic.bind(this)} hidden={index===0?true:false}> ◀ </span>
                                    <span className='next_but' onClick={this.nextPic.bind(this)} hidden={index===(pictures.length-1)?true:false}> ▶ </span>
                                </div>

                            )
                        }
                        <div title={item.title}>
                            <div>
                                <img src={item.url} alt={item.title} />
                            </div>
                            <span>{item.title}</span>
                        </div>
                    </li>
                )
        })
    }
     //分页器变换
     onChangePage=(page)=>{
        this.setState({
            current:page
        })
        this.props.changePicCurrentFun(page);
    }
    //搜索
    onChangeValue=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    onSearch=(val)=>{
        this.props.selectModuleFun('6');
        this.props.history.push(`/search/?val=${val}`);
    }
    onKeyDown=(e)=>{
        let ev=window.event||e;
        if(ev.keyCode===13){
            this.onSearch(this.state.value);
        }
    }
    render(){
        return (
            <Root>
                <div className='search-style'>
                    <Input onChange={this.onChangeValue.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/><Button onClick={this.onSearch.bind(this,this.state.value)}>搜索</Button>
                </div>
                <ul className='picture-contents-cont-style'>
                    {
                        pictures && this.mapLisCont(pictures)
                    }
                </ul>
                <Pagination current={this.state.current} hideOnSinglePage pageSize={9} total={pictures.length} onChange={this.onChangePage.bind(this)}/>
            </Root>
        )
    }
}
export default PictureContent;