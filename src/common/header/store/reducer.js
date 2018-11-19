import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
//immutable库
//生成immutable对象
//目的：因为不能改变原来的state数据，所以使用这个库生成一个全新的对象
//从而也就替换了深拷贝的写法

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 1
});
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.FOCUS_TYPE_ACTION :
            return state.set('focused', true)
        case actionTypes.BLUR_TYPE_ACTION :
            return state.set('focused', false);
        case actionTypes.CHANGLIST_TYPE_ACTION :
            //为了防止传的数据过多，可以使用meger方法
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list', action.data).set('totalPage',action.totalPage);
        case actionTypes.MOUSEIn_TYPES_ACTION :
            return state.set('mouseIn', action.mouseIn);
        case actionTypes.MOUSELEAVE_TYPES_ACTION :
            return state.set('mouseIn', action.mouseIn);
        case actionTypes.SWITCHITEM_TYPES_ACTION :
            return state.set('page', action.page);
        default:
            return state
    }
    // if(action.type === actionTypes.FOCUS_TYPE_ACTION){
    //     //immutable对象的set方法，会结合之前immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused', true);
    // }
    // if(action.type === actionTypes.BLUR_TYPE_ACTION){ 
    //     return state.set('focused', false);
    // }
    // if(action.type === actionTypes.CHANGLIST_TYPE_ACTION ){
    //     return state.set('list', action.data);
    // }
    // return state
}