import Type from './Type';

const self={
    changePicCurrentFun:val=>dispatch=>dispatch({
        type:Type.PICTURE_CURRENT,
        data:val
    }),
}
export default self;