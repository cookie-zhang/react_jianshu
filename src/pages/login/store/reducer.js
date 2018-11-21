import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    login: false,
})
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_ACTIONTYPES:
            return state.set('login',action.value)
        case actionTypes.LOGINOUT:
            return state.set('login', action.value)
        default:
            return state;
    }
}