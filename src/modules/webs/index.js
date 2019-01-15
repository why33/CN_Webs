import React from 'react'
import MainPageRight from '@comp/MainPageRight'
import styled from 'styled-components'

const Root=styled.div`


`
export default class WebContent extends React.Component{
    render(){
        return (
            <Root>
                <MainPageRight/>
            </Root>
        )
    }
}