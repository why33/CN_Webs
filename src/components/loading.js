import React from 'react';
import { Spin,Empty } from 'antd';

function LoadingComponent(error){
    if(error){
        return <Empty description='404'/>
    }else{
        return (
            <Spin size="large" />
        )
    }
}
export default LoadingComponent;