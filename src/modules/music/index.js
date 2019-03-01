import React from 'react'
import {Icon,Message} from 'antd'
import IconType from '@icon'
import styled from 'styled-components'
import connect from "@connect"
import MusicControl from './MusicControl'


const Root=styled.div`
    display:flex;
    align-items:center;
    margin-top:20px; 
    height:500px;
    box-sizing:border-box;
    margin:50px 0 70px;
    box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
    .music-list-style{
        width:20%;
        height:100%;
        color:#fff;
        background:rgba(123,126,129,1);
        display:flex;
        flex-direction:column;
        .music-list-hearder{
            font-size:16px;
            line-height:40px;
            text-indent:5px;
            font-weight:bolder; 
            border-bottom:1px solid rgb(205,205,205);;
        }
        ul{
            color:rgb(205,205,205);
            overflow-y:auto;
            overflow-x: hidden;
            scroll-behavior:smooth;
            list-style:none;
            margin-bottom:5px;
            li{
                width:100%;
                font-size:14px;
                line-height:30px;
                text-overflow:ellipsis;
                white-space: nowrap;
                overflow: hidden;
                text-indent:15px;
                span{
                    display:inline-block;
                    width:25px;
                    text-indent:0;
                }
            }
            li:nth-child(2n+1){
                border-radius:2px;
                background:rgba(87,89,90,.1);
            }
            li:hover,li.selectedStyle{
                color:#fff;
                cursor:pointer;
                background:rgba(35, 40, 45,.3);
            } 
            
         
          
        }
        ul::-webkit-scrollbar{
            display: none;
        }
       
    }
    .music-content-style{
        width:80%;
        display:flex;
        box-sizing:border-box;
        padding:15px;
    }
    .music-detail-style{
        width:0;
        flex:3;
        border-right:1.5px solid rgba(187, 187, 187,.5);
        &>div{
            width:100%;
            text-align:center;
            display:flex;
            flex-direction:column;
            align-items:center;
            padding-top:20px;
            &>*{
                width:60%;
                display:block;
            }
            button{
                margin-top:30px;
                border:none;
                outline:none;
                background:none;
                border:1px solid  rgba(187, 187, 187,.6);
                line-height:25px;
                border-radius:10px;
                cursor:pointer;
                a{
                    text-derocation:none;
                }
            }
            button:hover{
                border:1px solid #1890ff;
            }
        }
    }
    .music-lyric-style{
        width:0;
        flex:5;
        box-sizing:border-box;
        padding:15px 20px;
    }
    .music-title-style{
        p{
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
        }
        div{
            font-weight:bold;
            text-overflow:ellipsis;
            // white-space: nowrap;
            overflow: hidden;
        }
        span{
            color:rgba(167,167,167,.85);
            margin-right:5px;
        }
    }
    .music-lyric-content-style{
        height:300px;
        overflow-y:scroll;
        margin-top:10px;
        ul{
            font-size:12px;
            line-height:25px;
            list-style:none;
            color:rgba(100,100,100,.9);
            li{
                width:100%;
                text-overflow:ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }

       
    }
    .music-control-style{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:100px;
        background:#b78d68;
       
    }
`
@connect("music")
class MusicPages extends React.Component{
    componentWillMount(){
        this.props.musicAll.length>0 || this.props.loadMusicFun(()=>Message.error('请求失败,可能服务器出现问题'));
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.musicAll!==this.props.musicAll){
            this.props.selectMusicFun(nextProps.musicAll[0]);
        }
    }
    clickfun=(item)=>{
        this.props.selectMusicFun(item);
    }
    render(){
        const {musicAll,selectedMusic,selectedMusicLyric}=this.props;
        return (
            <Root>
                <div className="music-list-style">
                  <div className="music-list-hearder">
                    <Icon type={IconType.iBars}/> 播放列表
                  </div>
                  <ul>
                     {
                         musicAll.map((item,index)=>(
                            <li key={item.album_id} className={selectedMusic && (item.album_id===selectedMusic.album_id?'selectedStyle':'')} title={item.song_name} onClick={this.clickfun.bind(this,item)}><nobr><span>{`${index+1}.`} </span>{item.song_name}</nobr></li>
                        ))
                     }
                  </ul>
                </div>
                <div className="music-content-style">
                    <div className='music-detail-style'>
                        {
                            selectedMusic && (
                                <div>
                                     <img src={selectedMusic.img} alt="歌曲图片"/>
                                     <button><a target="__blank" href={selectedMusic.play_url}>下载音乐</a></button>
                                </div>
                            )
                        }
                    
                    </div>
                    <div className='music-lyric-style'>
                        {
                            selectedMusic && (<div className='music-title-style'>
                                <p>{selectedMusic.song_name}</p>
                                <div><span>歌手:</span><nobr>{selectedMusic.authors.map(item=>item.author_name+" ")}</nobr></div>
                                <div><span>专辑:</span><nobr>{selectedMusic.album_name}</nobr></div>
                            </div>)
                        }  
                        {
                            selectedMusicLyric && (
                                <div className='music-lyric-content-style'>
                                     <ul >
                                        {
                                            selectedMusicLyric.map(item=>(
                                                <li key={item.time}><nobr>{item.text}</nobr></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                               
                            )
                        }      
                    </div>
                </div>  
                <div className="music-control-style">
                    {
                        selectedMusic && (
                            <MusicControl {...this.props}/>
                        )
                    }
                    
                        
                </div>
            </Root>
        )
        
    }
}
export default MusicPages;