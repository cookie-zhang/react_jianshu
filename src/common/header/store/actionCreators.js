import * as actionTypes from './actionTypes';
import axios from 'axios'
import { fromJS } from 'immutable';
//获取焦点
export const focusAction = ()=>{
    return {
        type: actionTypes.FOCUS_TYPE_ACTION,
        focused: true
    }
}
//失去焦点
export const blurAction = ()=>{
    return {
        type: actionTypes.BLUR_TYPE_ACTION,
        focused: false
    }
}
//换一换分页
const changeList = (data)=>{
    return {
        type: actionTypes.CHANGLIST_TYPE_ACTION,
        data: fromJS(data),
        totalPage: Math.ceil( data.length/10 )
    }
}
//获取search数据
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const action = changeList(res.data.data);
            dispatch(action);
        }).catch(()=>{
           
        })
    }
} 
//鼠标移入
export const mouseIn = ()=>{ 
    return {
        type: actionTypes.MOUSEIn_TYPES_ACTION,
        mouseIn: true
    }
}
//鼠标移出
export const mouseLeave = ()=>{ 
    return {
        type: actionTypes.MOUSELEAVE_TYPES_ACTION,
        mouseIn: false
    }
}
//点击换一换
export const switcItem = (page) =>{
    return {
        type: actionTypes.SWITCHITEM_TYPES_ACTION,
        page: page
    }
}