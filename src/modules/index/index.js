import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Layout, Menu ,Icon} from 'antd';
import iconType from '@icon';
import {contents} from '@type'
import FooterContent from '@comp/FooterContent';

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer } = Layout;
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
        margin-bottom:100px;
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
            let path=window.location.pathname;
            if(new RegExp(r.url).test(path)){
                if(path.split('/').length===3){
                    this.props.selectModuleFun(r.key+'-'+path.split('/')[2]);
                }else{
                    this.props.selectModuleFun(r.key);
                }
            }
        })
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
                                <Menu.Item key="3"><Link to='/p'><Icon type={iconType.iMusic} />我爱Music</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/text'><Icon type={iconType.iPicture} />独家记忆</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/intro'><Icon type={iconType.iUser} />关于古罗马</Link></Menu.Item> 
                            </Menu>
                        </Header>
                        <Content className='content-Style'>
                            <Route path={selectedPath.url} component={selectedPath.comp}/>
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