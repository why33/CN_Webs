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
                justify-content:flex-end;
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
               .control_time{
                   color:#cdcdcd;
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
            .allowedStyle>svg{
                color:#cdcdcd;
                cursor:not-allowed;
            }
            & .muted{
                position:relative;
                text-decoration:overline;
                &::after{
                    position:absolute;
                    content:"";
                    bottom:45%;
                    left:-3px;
                    width:22px;
                    height:2px;
                    background:#fff;
                    transform:rotate(45deg);
                    -moz-transform:rotate(45deg);
                    -webkit-transform:rotate(45deg);
                    -o-transform:rotate(45deg);
                }
            }
            .notAllowedStyle>svg{
                color:#fff;
                cursor:pointer;
            }
        }
    }
    

`
@connect('music')
class MusicControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isRepeat:false,
            isVolumeShow:false,
            duration:null,//当前音频长度
            currentTime:'00:00',//当前播放的位置,
            value:'0%',
            number:0,//当前歌曲的索引
            volumeValue:0.3,
            readyState:0,

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.musicAll!==this.props.musicAll){
            this.props.selectMusicFun(nextProps.musicAll[0]);
        }
        if(nextProps.isPlay!==this.props.isPlay){
            this.props.isPlay ? this.audio.pause():this.audio.play();
            this.setState({
                currentTime:Math.ceil(this.audio.currentTime/60).toFixed(2)
            })
        }
        if(nextProps.selectedMusic!==this.props.selectedMusic){
            this.onPlay();
            this.setState({
                currentTime:"00:00",
                value:'0%',
            },()=>{
                this.props.isPlay ? this.audio.play():this.audio.pause();
            })
        }
    }
    onPlay=()=>{
        this.audio.load();
        this.audio.oncanplay=()=>{
            let TimeEnd=this.audio.duration/60;
            let timeE=String(TimeEnd).split('.');
            this.setState({
                duration:`${(10-timeE[0])?('0'+timeE[0]):timeE[0]}:${timeE[1].slice(0,2)}`
            })
        }
        this.audio.onerror=()=>{
            this.isForwardFun();
        }
        // let lyricTimeCha=this.props.lyricTimeCha;
        this.audio.addEventListener("timeupdate",()=>{
            let TimePlay=this.audio.currentTime/60;
            let TimeP=String(TimePlay).split('.');
            let timeNEW=`${(10-TimeP[0])?('0'+TimeP[0]):TimeP[0]}:${TimeP[1]?TimeP[1].slice(0,2):'00'}`;
            this.setState({
                currentTime:timeNEW,
                value:(this.audio.currentTime/this.audio.duration*100).toFixed(2)+"%"
            })
            if(this.audio.ended){
                this.state.isRepeat ? this.audio.play() : this.isForwardFun();
            }
            // let objLri=lyricTimeCha.find(item=>item.time===Math.floor(this.audio.currentTime));
            // this.props.getTimeFun && this.props.getTimeFun(objLri);

        })
    }
    //播放
    isPlayFun=()=>{
        this.props.isPlayFunction(!this.props.isPlay);
    }
    //上一首
    isBackFun=()=>{
        this.setState({
            number:(this.state.number===0)?this.props.musicAll.length-1:this.state.number-1,
            value:'0%'
        },()=>{
            setTimeout(()=>{
                this.props.indexSelectedFun(this.state.number);
                this.props.selectMusicFun(this.props.musicAll[this.state.number])
                    .then(()=>{
                        this.onPlay(); 
                        this.props.isPlay ? this.audio.play():this.audio.pause();
                    })
                
            },10)
        })
    }
    //下一首
    isForwardFun=()=>{
        this.setState({
            number:(this.props.indexSelected===this.props.musicAll.length-1)?0:this.props.indexSelected+1,
            value:'0%'
        },()=>{
            setTimeout(()=>{
                this.props.indexSelectedFun(this.state.number);
                this.props.selectMusicFun(this.props.musicAll[this.state.number])
                    .then(()=>{
                        this.onPlay(); 
                        this.props.isPlay ? this.audio.play():this.audio.pause();
                    })
            },10)
           
        })
    }
    //进度条点击
    clickRangeFun=(e)=>{
        e.stopPropagation();
        let valueNow=(e.clientX-this.range.offsetLeft)/this.range.clientWidth;
        this.audio.currentTime=valueNow*this.audio.duration;
        this.setState({
            value:(valueNow*100).toFixed(2)+"%"
        })
       
    }
    //停止播放
    stopFun=()=>{
        this.audio.currentTime=0;
        this.audio.pause();
        this.props.isPlayFunction(false);
    }
    //随机/重复播放
    isRepeatFun=()=>{
        this.setState({
            isRepeat:!this.state.isRepeat
        })
        if(!this.state.isRepeat){
            this.isForwardFun();
        }
    }
    //音量控制
    isVolumeFun=()=>{
        this.setState({
            isVolumeShow:!this.state.isVolumeShow
        })
    }
    volumeFun=(range,obj)=>{
        let offsetP=range.offsetParent;
       
        let num=null;
        while(offsetP!=null){
            offsetP=offsetP.offsetParent;
            offsetP && (num=offsetP.offsetTop+(26-10)-100);
        }
        let valueNow=parseFloat((1-(obj.clientY-num)/range.offsetHeight).toFixed(1))+0.1;
        this.setState({
            volumeValue:valueNow.toString()
        },()=>{
            this.audio.volume=this.state.volumeValue;
            setTimeout(()=>{
                this.setState({
                    isVolumeShow:false
                })
            },8000)
        })
    }
    render(){
        const {selectedMusic,isPlay}=this.props;
        return (
            <Root  ref={div=>this.div=div}>
                <div className='controlSty'>
                    <audio id='audio' ref={audio=>this.audio=audio} src={selectedMusic && selectedMusic.play_url}>该浏览器不支持</audio>
                    <div className='control_play'>
                        <ToolTip title="上一首" direction='left'><Icon type={IconT.faBackward}  theme="filled" onClick={this.isBackFun.bind(this)}/></ToolTip>
                        <ToolTip title={isPlay?"播放":"暂停"} direction='top'><Icon type={isPlay ? IconT.faPlay:IconT.faPause} theme="filled" onClick={this.isPlayFun}/></ToolTip>
                        <ToolTip title="下一首" direction='right'><Icon type={IconT.faForward}  theme="filled" onClick={this.isForwardFun.bind(this)}/></ToolTip>
                    </div>
                    <div className='control_range'>
                        <p>{selectedMusic ? selectedMusic.audio_name:' \xa0 '}</p>
                        <div>
                            <span className="control_progress" ref={range=>this.range=range} onClick={this.clickRangeFun.bind(this)}>
                               <span style={{width:this.state.value}}></span>
                            </span> 
                            <span className="control_time">{this.state.currentTime} / {this.state.duration}</span>
                        </div>
                    </div>
                    <div className='control_but'>
                        <ToolTip title="停止" direction='top'><Icon  className={isPlay?"notAllowedStyle":"allowedStyle"} type={IconT.faStop} onClick={this.stopFun.bind(this)}/></ToolTip>
                        <ToolTip title={this.state.isRepeat?"循环播放":"随机播放"} direction='bottom'><Icon type={this.state.isRepeat?IconT.faRepeat:IconT.faRandom} onClick={this.isRepeatFun.bind(this)}/></ToolTip>
                        <PromptBox title='音量'  visible={this.state.isVolumeShow} content={<Range value={this.state.volumeValue} onClick={this.volumeFun.bind(this)}/>}>
                            <ToolTip title="音量"><span className={`${Number(this.state.volumeValue)===0?'muted':''}`}><Icon type={IconT.faVolume}  onClick={this.isVolumeFun.bind(this)}/></span></ToolTip>
                        </PromptBox>
        
                        
                    </div>
                </div>
            </Root>
        )
    }
}
export default MusicControl;