import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import MainPageRight from '@comp/MainPageRight'
import MainPageLeft from './MainPageLeft'

const Root=styled.div`
`
@connect('index','showContent')
class MainPage extends React.Component{ 
    render(){
        return (
            <Root className='content-layout-style'>
                <MainPageLeft {...this.props}/>
                <MainPageRight {...this.props}/>
            </Root>
        )
        
    }
}

export default  MainPage;