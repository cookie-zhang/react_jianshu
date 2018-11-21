import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';

const getDetailData = (result)=>({
    type: actionTypes.GET_DETAIL_DATA,
    title: fromJS(result.title),
    content: fromJS(result.content)
})
export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data;
            for(let i = 0; i<result.length; i++){
                if(result[i].id === id){
                    dispatch(getDetailData(result[i]))
                }
            }
        }).catch(()=>{
            console.log('erro')
        })
    }
} 