import React from 'react'
import styled,{keyframes} from 'styled-components'
import connect from '@connect'
import './index.css'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Layout, Menu ,Icon,Message} from 'antd';
import iconType from '@icon';
import {contents} from '@type'
import musicIcon from '../../music.svg'
import FooterContent from '@comp/FooterContent';
import { ToolTip } from '@cncomp'

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer } = Layout;
const num=Math.random()*20+'px';
const aniMuisc=keyframes`
    0%{
        transform:rotate(0deg);
        -o-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
        -moz-transform:rotate(0deg);
        -ms-transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
        -o-transform:rotate(360deg);
        -webkit-transform:rotate(360deg);
        -moz-transform:rotate(360deg);
        -ms-transform:rotate(360deg);
    }
`
const aniMuiscbg=keyframes`
    0%{
        border-width:1px;
        transform:rotate(0deg);
        -o-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
        -moz-transform:rotate(0deg);
        -ms-transform:rotate(0deg);
    }
    50%{
        border-width:${Math.random()*25+'px'};
    }
    100%{
        border-width:${num};
        transform:rotate(360deg);
        -o-transform:rotate(360deg);
        -webkit-transform:rotate(360deg);
        -moz-transform:rotate(360deg);
        -ms-transform:rotate(360deg);
    }
`
const Root=styled.div`
    width:100%;
    height:100%;
    .hearder-Style{
        .menu-Style{
            text-align:right;
            height:40px;
            background:transparent;
            border-bottom:none;
            & .ant-menu-item,
            & .ant-menu-submenu-title{
                height:100%;
                font-size:20px;
                font-weight:600;
                line-height:20px;
                border:none;
                .anticon{
                    font-size:18px;
                    margin-right:5px;
                }
                .anticon:nth-child(2){
                    font-size:12px;
                    margin-left:5px;
                }
                .ant-menu-submenu-arrow{
                    width:10px;
                }
            }
            & .ant-menu-item{
                line-height:60px;
            }
         }
        & .ant-menu-horizontal > .ant-menu-item-selected,
        & .ant-menu-horizontal > .ant-menu-item-active,
        & .ant-menu-submenu-horizontal{
             border:none;
        }
        
    }
    .content-Style{
        width:100%;
        min-height:20vh;
        box-sizing:border-box;
        padding:10px 15%;
        margin-top:134px;
        .musicPlay{
            position:fixed;
            top:220px;
            left:20px;
            width:70px;
            height:70px;
            padding:10px 15px 15px;
            border-radius:50%;
            background:rgba(200,200,200,.15);
            cursor:pointer;
            box-shadow:1px 3px 5px 0 rgba(187, 187, 187,.8);
            img{
                width:100%;
                height:100%;
            }
        }
        .activeMusicbackgb::before{
            position:absolute;
            content:'';
            top:-20%;
            left:-20%;
            width:140%;
            height:140%;
            border-style:solid;
            border-color:#5f6265;
            border-radius:50%;
            z-index:-1;
            box-shadow:0px 3px 5px 0 rgba(187, 187, 187,.8);
            -webkit-animation:${aniMuiscbg} 5s linear infinite alternate forwards running;
            -moz-animation:${aniMuiscbg} 5s linear infinite alternate forwards running;
            -o-animation:${aniMuiscbg} 5s linear infinite alternate forwards running;
            animation:${aniMuiscbg} 5s linear infinite alternate forwards running;
        }
        .activeMusic{
           -webkit-animation:${aniMuisc} 5s linear infinite forwards running;
           -moz-animation:${aniMuisc} 5s linear infinite forwards running;
           -o-animation:${aniMuisc} 5s linear infinite forwards running;
           animation:${aniMuisc} 5s linear infinite forwards running;
        }
    }
    
    
   
`

@connect('index','music') 
class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            srollTopStatus:true,//是否隐藏回到顶部
        }
    }
    componentWillMount(){
        this.props.paths.forEach(r=>{
            let path=window.location.pathname;
            if(new RegExp(r.url).test(path)){
                if(path.split('/').length===3){
                    this.props.selectModuleFun(r.key+'-'+path.split('/')[2]);
                }else{
                    this.props.selectModuleFun(r.key);
                }
            }
        })
        this.props.musicAll.length>0 || this.props.loadMusicFun(()=>Message.error('请求失败,可能服务器出现问题'));
    }
    onSelectFun=(obj)=>{
        this.props.selectModuleFun(obj.key);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.musicAll!==this.props.musicAll){
            this.props.selectMusicFun(nextProps.musicAll[0]);
        }
        if(nextProps.isPlay!==this.props.isPlay){
            this.props.isPlay ? this.audio.pause():this.audio.play();
            this.setState({
                currentTime:(this.audio.currentTime/60).toFixed(2)
            })
        }
        if(nextProps.selectedMusic!==this.props.selectedMusic){
            
        }
    }
    componentDidMount=()=>{
        window.onscroll=()=>{
            let scrollTop = window.pageYOffset  || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(scrollTop===0){
                this.setState({
                    srollTopStatus:true
                })
            }else{
                this.setState({
                    srollTopStatus:false
                })
            }
        }
        window.onpopstate=(e)=>{
            window.location.reload();
        }
       

    }
    //返回顶部
    retureTopFun=()=>{
        document.documentElement.scrollTop=0;
        window.pageYOffset = 0;     
        document.body.scrollTop = 0;
    }
    //点击按钮播放音乐
    musicPlay=()=>{
        this.props.isPlayFunction(!this.props.isPlay);
    }
    render(){
        const {selectedPath,keySelected,selectedMusic,isPlay}=this.props;
        return (
           <Root>
               <Router>
                    <Layout>
                        <Header>
                            <div className='hearder-Style'>
                                <Menu
                                        mode="horizontal"
                                        className='menu-Style'
                                        selectedKeys={keySelected}
                                        onClick={this.onSelectFun.bind(this)}
                                >
                                    <Menu.Item key="0"><Link to='/'><Icon type={iconType.iHome} />首页</Link></Menu.Item>
                                    
                                    <SubMenu key="1" title={<span><Icon type={iconType.iCode} />前端<Icon type={iconType.iArrowDown} /></span>}>
                                        {
                                            contents.map((item,index)=>(
                                                <Menu.Item key={`1-${index}`}><Link to={`/web/${index}`}>{item.title}</Link></Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                                    <Menu.Item key="2"><Link to='/article'><Icon type={iconType.iBook} />文章</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to='/picture'><Icon type={iconType.iPicture} />独家记忆</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/music'><Icon type={iconType.iMusic} />我爱Music</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to='/intro'><Icon type={iconType.iUser} />关于古罗马</Link></Menu.Item> 
                                </Menu>
                                 <audio id='audio' ref={audio=>this.audio=audio} src={selectedMusic && selectedMusic.play_url}>该浏览器不支持</audio>

                            </div>
                        </Header>
                        <Content>
                            <div className='content-Style'>
                                <div className={`musicPlay ${isPlay?'activeMusicbackgb':''}`} hidden={(window.location.pathname==="/music")?true:false} onClick={this.musicPlay.bind(this)}><ToolTip title={isPlay?'暂停':'播放'} direction="top"><img className={isPlay?'activeMusic':''} src={musicIcon} alt="音乐播放图标"/></ToolTip></div>
                                <Route path={selectedPath.url} component={selectedPath.comp}/>
                            </div>
                        </Content>
                        <Footer>
                            <FooterContent/>
                        </Footer>
                    </Layout>

               </Router>
               <div className="index-tip-style">
                    <ul>
                        <li className='index-tip-code-style' title='微信二维码'><Icon type="wechat" /></li>
                        <li className='index-tip-return-style' title='回到顶部' onClick={this.retureTopFun.bind(this)} hidden={this.state.srollTopStatus}><Icon type="arrow-up" /></li>
                    </ul>
               </div>
               
           </Root>

        )
    }

}

export default MainContent;