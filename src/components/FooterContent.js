import React from 'react'
import styled from 'styled-components'

const Root=styled.div`
    padding:30px 0 10px 0;
    width:100%;
    color:#fff;
    font-size: 12px;
    text-align:center;
    background:rgba(35, 40, 45,.9);   
    p{
        margin-bottom:0px;
    }

`

export default class FooterContent extends React.Component{
    render(){
        return (
            <Root>
                <p>2019</p>
                <p>古罗马</p>
                <p>ALL RIGHTS RESERVED</p>
            </Root>
        )
    }
}