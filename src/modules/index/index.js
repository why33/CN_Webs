import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import './index.css'
import FooterContent from './FooterContent'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Layout, Menu ,Button} from 'antd';




const { Header, Content, Footer } = Layout;
const Root=styled.div`
    width:100%;
    height:100%;
    .hearder-Style{
        display:flex;
        align-items:center;
        justify-content:space-around;
        height:119px;
        padding:0 50px;
        line-height:44px;
        font-size:30px;
        color:rgba(16,16,16,1);
        font-family:Roboto;
        border-bottom: 1px solid rgba(187, 187, 187, 1);
        button.ant-btn{
            height:40px;
            font-size:25px;
            line-height:40px;
        }
    }
    .logo-Style{
        span{
            display:inline-block;
            width: 91px;
            height: 96px;
            line-height:96px;
            border-radius: 4px;
            text-align: center;
            font-family: Roboto;
            margin-right:20px;
            border: 1px solid rgba(187, 187, 187, 1); 
        }
    }
    .menu-Style{
        margin:0;
        height:100%;
        border-bottom:none;
        & .ant-menu-item{
            height:100%;
            color:rgba(16,16,16,1);
            font-size:30px;
            line-height:118px;
        }
        
    }
    .content-Style{
        width:100%;
        min-height:20vh;
        box-sizing:border-box;
        padding:0 50px;
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
                            <div className='logo-Style'>
                                <span>logo</span>
                                职引官
                            </div>
                            <Menu
                                    mode="horizontal"
                                    className='menu-Style'
                                    defaultSelectedKeys={this.state.key}
                                    onClick={this.onSelectFun.bind(this)}
                            >
                                <Menu.Item key="0"><Link to='/'>首页</Link></Menu.Item>
                                <Menu.Item key="1"><Link to='/y'>引享圈</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/p'>职位行情</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/text'>测一测</Link></Menu.Item>
                            </Menu>
                            <Button>发布提问/动态</Button>
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