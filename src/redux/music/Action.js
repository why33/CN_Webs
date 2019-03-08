import Type from './Type';
import {MusicJson} from '@type'
import jQuery from 'jquery'
const self={
    loadMusicFun:(fail=()=>{})=>dispatch=>{
        MusicJson.forEach((item,index)=>{
            let url=item.split("?");
            let parm=url[1].split("&");
            let obj={}
            parm.forEach(item=>{
                let i=item.split("=")
                obj[i[0]]=i[1];
            })
            jQuery.ajax({
                url:item,
                type:'GET',
                dataType:'jsonp',
                jsonpCallback:obj.callback,
                success:function(data){
                    dispatch({
                        type:Type.LOAD_MUSIC,
                        data:data.data
                    })
                },
                error:()=>{
                    fail();
                }
                
            })
        })
    },
    selectMusicFun:(item)=>async (dispatch,getState)=>{
        let lys=item.lyrics.split('[').splice(1).map(i=>{
            return {
                time:i.split("]")[0],
                text:i.split("]")[1]
            }
        })
        dispatch({
            type:Type.SELECT_MUSIC,
            data:[item,lys],
        })
    },
    // getTimeFun:obj=>dispatch=>{
    //     if(obj){
    //         dispatch({
    //             type:Type.GET_TIME,
    //             data:obj.time,
    //         }) 
    //     }
    // },
    // //歌词差
    // lyricTimeChaFun:obj=>dispatch=>dispatch({
    //     type:Type.GET_LYRIC_TIME_CHA,
    //     data:obj
    // }),
    //是否播放
    isPlayFunction:val=>dispatch=>dispatch({
        type:Type.IS_PLAY,
        data:val
    }),
    //播放索引
    indexSelectedFun:val=>dispatch=>dispatch({
        type:Type.INDEX_SELECTED,
        data:val
    }),
}
export default self;