import React from 'react'
import  IconT from '@icon'
import {Icon} from 'antd'
import styled from 'styled-components'
import { ToolTip,PromptBox,Range } from '@cncomp'
import  connect  from '@connect';

const Root=styled.div`
    height:100%;
    .controlSty{
        width:90%;
        height:100%;
        margin:0 auto;
        display:flex;
        svg{
            cursor:pointer;
            color:#fff;
        }
        .control_play{
            flex:2;
            display:flex;
            justify-content:space-around;
            align-items:center;
            font-size:32px;
            svg:nth-of-type(2){
                border:2px solid #fff;
                padding:10px;
                border-radius:50%;
            }

        }
        .control_range{
            flex:7;
            box-sizing:border-box;
            padding:0 10px;
            color:#ffff;
            p{
                display:block;
                width:100%;
                height:20px;
                font-size:14px;
                line-height:20px;
                font-weight:bold;
                text-shadow:0 0 1px #000;
                margin:20px 0 8px;
            }
            &>div{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                .control_progress{
                    display:block;
                    width:100%;
                    height:3px;
                    background:#c0c0c0;
                    margin-bottom:0.2vh;
                    cursor:pointer;
                    span{
                        display:block;
                        width:0;
                        height:100%;
                        background:#fff;
                    }
               }
               .control_timeStart,
               .control_timeEnd{
                   color:#d7d7d7;
                   font-size:10px;
               }
            }
             
        }
        .control_but{
            flex:2;
            display:flex;
            justify-content:space-around;
            align-items:center;
            font-size:18px;
            color:#fff;
            span{
                cursor:pointer;
            }
            & .muted{
                position:relative;
                text-decoration:overline;
                &::after{
                    position:absolute;
                    content:"";
                    bottom:45%;
                    left:0;
                    width:120%;
                    height:0.3vh;
                    background:#fff;
                    transform:rotate(45deg);
                    -moz-transform:rotate(45deg);
                    -webkit-transform:rotate(45deg);
                    -o-transform:rotate(45deg);
                }
            }
           
        }
    }
    

`
@connect('music')
class MusicControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isRepeat:true,
            isVolumeShow:false,
            isLock:false,
            duration:null,//当前音频长度
            currentTime:'00:00',//当前播放的位置,
            value:'0%',
            number:0,//当前歌曲的索引
            volumeValue:0.3,
            isListShow:false,//播放列表是否显示
            readyState:0,

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isPlay!==this.props.isPlay){
            this.props.isPlay ? this.audio.pause():this.audio.play();
            this.setState({
                currentTime:(this.audio.currentTime/60).toFixed(2)
            })
        }
        if(nextProps.selectedMusic!==this.props.selectedMusic){
            
        }
    }
    //播放
    isPlayFun=()=>{
        this.props.isPlayFunction(!this.props.isPlay);
    }
    render(){
        const {selectedMusic}=this.props;
        return (
            <Root  ref={div=>this.div=div}>
                <audio id='audio' ref={audio=>this.audio=audio} src={selectedMusic && selectedMusic.play_url}>该浏览器不支持</audio>
                <div className='controlSty'>
                    <div className='control_play'>
                        <ToolTip title="上一首" direction='left'><Icon type={IconT.faBackward}  theme="filled" /></ToolTip>
                        <ToolTip title={this.props.isPlay?"播放":"暂停"} direction='top'><Icon type={this.props.isPlay ? IconT.faPlay:IconT.faPause} theme="filled" onClick={this.isPlayFun}/></ToolTip>
                        <ToolTip title="下一首" direction='right'><Icon type={IconT.faForward}  theme="filled"/></ToolTip>
                    </div>
                    <div className='control_range'>
                        <p>{selectedMusic ? selectedMusic.audio_name:' \xa0 '}</p>
                        <div>
                            <span className="control_progress" ref={range=>this.range=range}>
                               <span style={{width:this.state.value}}></span>
                            </span> 
                            <span className="control_timeStart">{this.state.currentTime}</span>
                            <span className="control_timeEnd">{this.state.duration}</span>
                        </div>
                    </div>
                    <div className='control_but'>
                        <ToolTip title="停止" direction='top'><Icon type={IconT.faStop} /></ToolTip>
                        <ToolTip title={this.state.isRepeat?"循环播放":"随机播放"} direction='bottom'><Icon type={this.state.isRepeat?IconT.faRepeat:IconT.faRandom} /></ToolTip>
                        <PromptBox title='音量'  visible={this.state.isVolumeShow} content={<Range value={this.state.volumeValue}/>}>
                            <ToolTip title="音量"><span className={`${Number(this.state.volumeValue)===0?'muted':''}`}><Icon type={IconT.faVolume}  /></span></ToolTip>
                        </PromptBox>
        
                        
                    </div>
                </div>
            </Root>
        )
    }
}
export default MusicControl;