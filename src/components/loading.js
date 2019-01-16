import React from 'react';
import { Spin,Empty } from 'antd';
import './loading.css'
function LoadingComponent(obj){
    if(obj.error){
        return <Empty description='404'/>
    }else{
        return (
            <div className='loadingStyle'>
                <Spin size="large" />
            </div>
            
        )
    }
}
export default LoadingComponent;