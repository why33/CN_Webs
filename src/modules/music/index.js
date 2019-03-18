import React from 'react'
import {Icon,Message,Button} from 'antd'
import IconType from '@icon'
import styled from 'styled-components'
import connect from "@connect"
import "./ani.css"
import { Scrollbars } from 'react-custom-scrollbars';



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
            &>div{
                width:55%;
                height:0;
                padding-bottom:55%;
                position:relative;
            }
            img{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                border-radius:50%;
                border:20px solid #4b4e51;
            }
            .activeImg{
                
                
                -webkit-animation:aniImg 5s linear infinite forwards running;
                -moz-animation:aniImg 5s linear infinite forwards running;
                -o-animation:aniImg 5s linear infinite forwards running;
                -ms-animation:aniImg 5s linear infinite forwards;
                animation:aniImg 5s linear infinite forwards running ;
            }
            button{
                margin-top:30px;
                width:60%;
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
        overflow-y:hidden;
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
    .search-control-style{
        position:fixed;
        right:20px;
        top:220px;
        font-size:20px;
      
    }
`
@connect("music","index")
class MusicPages extends React.Component{
    componentWillMount(){
        this.props.musicAll.length>0 || this.props.loadMusicFun(()=>Message.error('请求失败,可能服务器出现问题'));
    }
    clickfun=(item,index)=>{
        this.props.indexSelectedFun(index);
        this.props.selectMusicFun(item);
    }
    //跳转到搜索页面
    searchPage=()=>{
        this.props.selectModuleFun('6');
        this.props.history.push(`/search/?val=`);
    }
    
    render(){
        const {musicAll,selectedMusic,selectedMusicLyric}=this.props;
        return (
            <Root>
                <div className="music-list-style">
                  <div className="music-list-hearder">
                    <Icon type={IconType.iBars}/> 播放列表
                  </div>
                  <Scrollbars>
                      <ul>
                            {
                                musicAll.map((item,index)=>(
                                    <li key={item.album_id} className={selectedMusic && (item.album_id===selectedMusic.album_id?'selectedStyle':'')} title={item.song_name} onClick={this.clickfun.bind(this,item,index)}><nobr><span>{`${index+1}.`} </span>{item.song_name}</nobr></li>
                                ))
                            }
                        </ul>
                  </Scrollbars>
                  
                </div>
                <div className="music-content-style">
                    <div className='music-detail-style'>
                        {
                            selectedMusic && (
                                <div>
                                     <div >
                                        <img src={selectedMusic.img} className={this.props.isPlay?'activeImg':''}  alt="歌曲图片"/>
                                     </div>
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
                                    <Scrollbars>
                                        <ul >
                                            {
                                                selectedMusicLyric.map(item=>(
                                                    <li key={item.time}><nobr>{item.text}</nobr></li>
                                                ))
                                            }
                                        </ul>
                                    </Scrollbars>
                                     
                                </div>
                               
                            )
                        }      
                    </div>
                </div>  
                
                <div className="search-control-style">
                    <Button shape="circle" icon={IconType.iSearch} onClick={this.searchPage.bind(this)} />
                </div>
            </Root>
        )
        
    }
}
export default MusicPages;