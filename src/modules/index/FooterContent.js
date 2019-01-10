import React from 'react'
import styled from 'styled-components'

const Root=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:0 50px;
    width:100%;
    height:243px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align:left;
    font-family: Roboto;
    border:1px solid rgba(187,187,187,1);    
    ul{
        list-style:none;
    }
    .detail-style{
        flex:2;
        p{
            font-size:20px;
        }
        div{
            width:70%;
            margin-bottom:50px;
        }
    }
    .contact-style{
        flex:1;
        p{
            font-size:20px;
        }
        li{
            line-height:29px;
        }
    }
    .contactimg-style{
        flex:3;
        display:flex;
        justify-content:space-around;
        p{
            font-size:18px;
        }
        img{
            width:125px;
            height:125px;
        }
        li{
            text-align:center;
        }

    }

  



`

export default class FooterContent extends React.Component{
    render(){
        return (
            <Root>
                 <div className='detail-style'>
                     <p>关于我们</p>
                     <div>职引官目的：让当代年轻人 对未来有一个明确的职位规划，解决年轻人找工作难，企业招人难的问题。</div>
                     <span>办公地址：武汉市雄楚大道357号华瑞大厦A幢1栋1315号</span>
                 </div>
                 <div className='contact-style'>
                     <p>联系方式:</p>
                     <ul>
                        <li>客服Q   Q：2 595049362</li>
                        <li>客服电话：400-86926630</li>
                        <li>客服微信：zhiyinguankefu</li>
                        <li>客服邮箱：kefu@zhiyinguan.com</li>
                     </ul>
                 </div>
                <ul className='contactimg-style'>
                    <li><p>官方微博：职引官</p><img src='/imgs/img1.jpg' alt='官方微博二维码'/></li>
                    <li><p>微信公众号：职引官</p><img src='/imgs/img1.jpg' alt='微信公众号二维码'/></li>
                    <li><p>客户端APP下载：职引官</p><img src='/imgs/img1.jpg' alt='客户端APP二维码'/></li>
                </ul>
            </Root>
        )
    }
}