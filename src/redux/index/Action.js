import Type from "./Type"

const self={
    //模块选中
    selectModuleFun:val=>dispatch=>dispatch({
       type:Type.INDEX_SELECT_MODULE,
       data:Number(val)
    }),
}
export default self;