import axios from 'axios';
import { actionTypes } from './index';
const getLogin = (result)=>({
    type: actionTypes.LOGIN_ACTIONTYPES,
    value: true

})
export const login = (account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(getLogin())
            }else{
                console.log('登录失败')
            }
        })

    }
}
export const loginOut = ()=>{
    return (dispatch) => {
        const action = {
            type: actionTypes.LOGINOUT,
            value: false
        }
        dispatch(action)
    }
}