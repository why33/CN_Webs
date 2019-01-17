// 抽屉组件，类似于antd的Drawer组件
import React from 'react'
import './drawerComp.css'

export default class DrawerComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            noVisible:true
        }
    }
    onCloseFun=()=>{
        this.props.onClose();
        this.setState({
            noVisible:false
        }) 
    }
    //点击遮罩关闭
    onClick=(e)=>{
        e.stopPropagation(); 
        this.onCloseFun();

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.visible!==this.props.visible){
            setTimeout(()=>{
                this.setState({
                    noVisible:true
                }) 
            },1000);
            
        }
    }
    render(){
        const {visible,title}=this.props;
        return (
            <div className="DrawerComp-style"> 
                <div className={`DrawerCom-mask-style ${visible?'dShow':'dHide'}`} onClick={this.onClick.bind(this)}></div> 
                <div className={`DrawerCom-content-style ${visible?'drawerShow':''} ${this.state.noVisible?"":"drawerHide"}`} >
                    <div className='DrawerCom-content-title-style'>
                        {title}
                        <span onClick={this.onCloseFun.bind(this)}>&times;</span>
                    </div>
                    <div className='DrawerCom-content-body-style'>{this.props.children}</div>
                </div>
            </div>
        )
    }

}
DrawerComp.defaultProps={
    title:null,
    visible:false,
    onClose:()=>{}
}