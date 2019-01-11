import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import FooterContent from './FooterContent'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Layout, Menu ,Icon} from 'antd';



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
        padding:0 15%;
        margin-bottom:100px;
    }
    
   
`

@connect('index') 
class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:['0'],//选中key值
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
    }
    onSelectFun=(obj)=>{
        this.props.selectModuleFun(obj.key);
    }
    render(){
        const {selectedPath}=this.props;
        return (
           <Root>
               <Router>
                    <Layout>
                        <Header className='hearder-Style'>
                            <Menu
                                    mode="horizontal"
                                    className='menu-Style'
                                    defaultSelectedKeys={this.state.key}
                                    onClick={this.onSelectFun.bind(this)}
                            >
                                <Menu.Item key="0"><Link to='/'><Icon type="home" />首页</Link></Menu.Item>
                                
                                <SubMenu key="前端" title={<span><Icon type="code" />前端<Icon type="down" /></span>}>
                                    <Menu.Item key="1"><Link to='/'>HTML</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/'>CSS</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/'>javaScript</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="4"><Link to='/article'><Icon type="book" />文章</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/p'><Icon type="customer-service" />我爱Music</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/text'><Icon type="picture" />独家记忆</Link></Menu.Item>
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
               
           </Root>

        )
    }

}

export default MainContent;