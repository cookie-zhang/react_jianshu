import * as actionTpes from './actionTypes';
import { fromJS } from 'immutable';
//immutable库
//生成immutable对象
//目的：因为不能改变原来的state数据，所以使用这个库生成一个全新的对象
//从而也就替换了深拷贝的写法

const defaultState = fromJS({
    focused: false,
    list:[]
});
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTpes.FOCUS_TYPE_ACTION :
            return state.set('focused', true)
        case actionTpes.BLUR_TYPE_ACTION :
            return state.set('focused', false);
        case actionTpes.CHANGLIST_TYPE_ACTION :
            return state.set('list', action.data);
        default:
            return state
    }
    // if(action.type === actionTpes.FOCUS_TYPE_ACTION){
    //     //immutable对象的set方法，会结合之前immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused', true);
    // }
    // if(action.type === actionTpes.BLUR_TYPE_ACTION){ 
    //     return state.set('focused', false);
    // }
    // if(action.type === actionTpes.CHANGLIST_TYPE_ACTION ){
    //     return state.set('list', action.data);
    // }
    // return state
}