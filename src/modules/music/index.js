import React from 'react'
import {Icon,Message} from 'antd'
import IconType from '@icon'
import styled from 'styled-components'
import connect from "@connect"


const Root=styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:20px; 
    box-sizing:border-box;
    padding:20px;
    box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.8);
    &>div{
        border:1px solid #1890ff;
    }
    .music-list-style{
        width:20%;
        border-right:1px solid #1890ff;
        .music-list-hearder{
            font-size:16px;
            color:#fff;
            line-height:30px;
            text-indent:5px;
            background:#1890ff;
        }
        ul{
            padding:10px 0;
            list-style:none;
            margin-bottom:0;
            li{
                width:100%;
                font-size:14px;
                line-height:30px;
                text-indent:30px;
                text-overflow:ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            li:not(:last-child){
                border-bottom:1px solid rgba(187, 187, 187,.8);
            }
            li:hover,.selectedStyle{
                cursor:pointer;
                font-weight:bolder;
                color:#1890ff;
                background:rgba(35, 40, 45,.2);
            }
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
        overflow:hidden;
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
        width:100%;
        height:100px;
        border-top:1px solid #1890ff;
    }
`
@connect("music")
class MusicPages extends React.Component{
    componentWillMount(){
        this.props.loadMusicFun(()=>Message.error('请求失败,可能服务器出现问题'));
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
                            <li key={item.album_id} className={selectedMusic && (item.album_id===selectedMusic.album_id?'selectedStyle':'')} title={item.song_name} onClick={this.clickfun.bind(this,item)}><nobr>{item.song_name}</nobr></li>
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

                </div>
            </Root>
        )
        
    }
}
export default MusicPages;