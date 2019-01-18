import Type from "./Type"

const self={
    //模块选中
    selectModuleFun:val=>dispatch=>{
        let keys=val.split("-");
        if(keys.length===2){
             keys[1]=val
        }
        dispatch({
            type:Type.INDEX_SELECT_MODULE,
            data:[Number(keys[0]),keys]
        })
    },
    
   
}
export default self;