import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
   title: '',
   content: ""
})
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_DETAIL_DATA:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state;
    }
}