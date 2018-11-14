import * as actionTypes from './actionTypes';
import axios from 'axios'
import { fromJS } from 'immutable';
export const focusAction = ()=>{
    return {
        type: actionTypes.FOCUS_TYPE_ACTION,
        focused: true
    }
}
export const blurAction = ()=>{
    return {
        type: actionTypes.BLUR_TYPE_ACTION,
        focused: false
    }
}
const changeList = (data)=>{
    return {
        type: actionTypes.CHANGLIST_TYPE_ACTION,
        data: fromJS(data)
    }
}
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const action = changeList(res.data.data);
            dispatch(action);
        }).catch(()=>{
           
        })
    }
} 