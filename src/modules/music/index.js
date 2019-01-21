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
                font-size:14px;
                line-height:30px;
                text-indent:30px;
            }
            li:not(:last-child){
                border-bottom:1px solid rgba(187, 187, 187,.8);
            }
            li:hover{
                cursor:pointer;
                background:rgba(187, 187, 187,.1);
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
        border-right:1px solid rgba(187, 187, 187,.8);
        &>div{
            width:100%;
            text-align:center;
            display:flex;
            flex-direction:column;
            align-items:center;
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
        const {musicAll,selectedMusic}=this.props;
        return (
            <Root>
                <div className="music-list-style">
                  <div className="music-list-hearder">
                    <Icon type={IconType.iBars}/> 播放列表
                  </div>
                  <ul>
                     {
                         musicAll.map((item,index)=>(
                            <li key={item.album_id} onClick={this.clickfun.bind(this,item)}>{item.song_name}</li>
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
                                     <button><a download={selectedMusic.song_name} href={selectedMusic.play_url}>下载音乐</a></button>
                                </div>
                            )
                        }
                    
                    </div>
                    <div className='music-lyric-style'>ccccc</div>
                </div>
                <div className="music-control-style">

                </div>
            </Root>
        )
        
    }
}
export default MusicPages;