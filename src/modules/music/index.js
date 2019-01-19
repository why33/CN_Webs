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
        width:35%;
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
        width:65%;
    }
    .music-control-style{
        width:100%;
        height:100px;
        border-top:1px solid #1890ff;
    }
`
@connect("music")
class MusicPages extends React.Component{
    componentDidMount(){
        this.props.loadMusicFun(()=>Message.error('请求失败,可能服务器出现问题'));
    }
    render(){
        const {musicAll}=this.props;
        return (
            <Root>
                <div className="music-list-style">
                  <div className="music-list-hearder">
                    <Icon type={IconType.iBars}/> 播放列表
                  </div>
                  <ul>
                     {
                         musicAll.map((item,index)=>(
                            <li key={item.album_id}>{item.song_name}</li>
                        ))
                     }
                  </ul>
                </div>
                <div className="music-content-style">

                </div>
                <div className="music-control-style">

                </div>
            </Root>
        )
        
    }
}
export default MusicPages;