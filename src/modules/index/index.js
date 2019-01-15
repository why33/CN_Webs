import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Layout, Menu ,Icon} from 'antd';
import iconType from '@icon';
import FooterContent from '@comp/FooterContent';

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer } = Layout;
const Root=styled.div`
    width:100%;
    height:100%;
    .hearder-Style{
        height:250px;
        padding:0 10%;
        font-size:18px;
        color:rgba(16,16,16,1);
        font-family:Roboto;
        background-color:#AFCFE6;
        background-image: url('./imgs/back1.jpg');
        background-size:100% 200%;
        background-position: 100% 80%;
        background-repeat: no-repeat;
        .menu-Style{
            text-align:right;
            height:40px;
            background:transparent;
            border-bottom:none;
            & .ant-menu-item,
            & .ant-menu-submenu-title{
                height:100%;
                font-size:20px;
                line-height:20px;
                border:none;
                color:rgba(16,16,16,1);
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
        margin-bottom:100px;
    }
    .index-tip-style{
        position:fixed;
        right:10px;
        bottom:120px;
        ul{
            list-style:none;
            li{
                color:#fff;
                padding:5px 10px;
                font-size:30px;
                background:rgba(35, 40, 45,.6);
                margin-top:5px;
                cursor:pointer;
                position:relative;
            }
            li:hover{
                background:#1890ff;
            }
            .index-tip-code-style:hover::before{
                position:absolute;
                top:0;
                left:0;
                content:"";
                width:100px;
                height:100px;
                background:url('./imgs/userCode.jpg');
                background-size:cover;
                padding:10px;
                transform:translate(-102%,-25%);
                -webkit-transform:translate(-102%,-25%);
                -moz-transform:translate(-102%,-25%);
                -o-transform:translate(-102%,-25%);
                -ms-transform:translate(-102%,-25%);
            }
            
        }
    }
    
   
`

@connect('index') 
class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            srollTopStatus:true,//是否隐藏回到顶部
        }
    }
    componentWillMount(){
        this.props.paths.forEach(r=>{
            if(new RegExp(r.url).test(window.location.pathname)){
                this.props.selectModuleFun(r.key);
                this.setState({
                    key:[r.key]
                })
            }
        })
        window.history.forward(-1);
    }
    onSelectFun=(obj)=>{
        this.props.selectModuleFun(obj.key);
    }
    componentDidMount=()=>{
        window.onscroll=()=>{
            if(window.document.scrollingElement.scrollTop===0){
                this.setState({
                    srollTopStatus:true
                })
            }else{
                this.setState({
                    srollTopStatus:false
                })
            }
        }
    }
    //返回顶部
    retureTopFun=()=>{
        window.document.scrollingElement.scrollTop=0;
    }
    render(){
        const {selectedPath,keySelected}=this.props;
        return (
           <Root>
               <Router>
                    <Layout>
                        <Header className='hearder-Style'>
                            <Menu
                                    mode="horizontal"
                                    className='menu-Style'
                                    selectedKeys={[keySelected]}
                                    onClick={this.onSelectFun.bind(this)}
                            >
                                <Menu.Item key="0"><Link to='/'><Icon type={iconType.iHome} />首页</Link></Menu.Item>
                                
                                 <SubMenu key="前端" title={<span><Icon type={iconType.iCode} />前端<Icon type={iconType.iArrowDown} /></span>}>
                                    <Menu.Item key="1-0"><Link to='/web'>HTML</Link></Menu.Item>
                                    <Menu.Item key="1-1"><Link to='/web'>CSS</Link></Menu.Item>
                                    <Menu.Item key="1-2"><Link to='/web'>JavaScript</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="2"><Link to='/article'><Icon type={iconType.iBook} />文章</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/p'><Icon type={iconType.iMusic} />我爱Music</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/text'><Icon type={iconType.iPicture} />独家记忆</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/intro'><Icon type={iconType.iUser} />关于古罗马</Link></Menu.Item> 
                            </Menu>
                        </Header>
                        <Content className='content-Style'>
                            <Route exact path={selectedPath.url} component={selectedPath.comp}/>
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