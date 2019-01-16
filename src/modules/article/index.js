import React from 'react'
import connect from '@connect'
import styled from 'styled-components'
import MainPageRight from '@comp/MainPageRight'
import { articles } from '@type'
const Root=styled.div`
   &>div>ul{
        list-style:none;
        li{ 
            padding:20px;
            box-sizing:border-box;
            box-shadow:0px .5px 5px 0 rgba(187, 187, 187,.6);
            margin-bottom:15px;
        }
   }

`

@connect("index","showContent")
class Articles extends React.Component{
    render(){

        return (
            <Root className='content-layout-style'>
                <div>
                    <ul>
                        {
                            articles.map((item,index)=>(
                                <li key={index}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <MainPageRight {...this.props}/>
            </Root>
        )
        
    }
}
export default Articles;