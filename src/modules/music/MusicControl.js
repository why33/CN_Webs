import React from 'react'

class MusicControl extends React.Component{
    render(){
        const {selectedMusic}=this.props;
        return (
           
            <div> <audio src={selectedMusic.play_url} controls>该浏览器不支持</audio></div>
        )
    }
}
export default MusicControl;