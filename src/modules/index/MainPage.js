import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import MainPageRight from './MainPageRight'
import MainPageLeft from './MainPageLeft'
import DetailsShow from './DetailsShow'

const Root=styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   font-family: Roboto;
   &>div{
       box-sizing:border-box;
       padding:20px 10px;
   }
   &>div:nth-child(1){
       width:0;
       flex:6;
   }
   &>div:nth-child(2){
        flex:2;
    }
`


@connect('index')
class MainPage extends React.Component{ 
    render(){
        return (
            <Root>
                {
                    (window.location.pathname==='/')
                    ?
                    (<MainPageLeft {...this.props}/>)
                    :
                    (<DetailsShow {...this.props}/>) 
                    
                }
                <MainPageRight {...this.props}/>
            </Root>
        )
        
    }
}

export default  MainPage;