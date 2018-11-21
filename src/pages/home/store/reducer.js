// import  * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    topicList: [],
	articleList: [],
    recommendList: [],
    articlePage: 1,
	showScroll: false
})
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.CHENGE_HOME_DATA:
         return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
                })
        case actionTypes.ADD_MORE_HOMELIST:
           return state.merge({
                    'articleList': state.get('articleList').concat(action.addMoreList),
                    'articlePage': action.nextPage
                });
        case actionTypes.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
        default:
            return state;
    }
}