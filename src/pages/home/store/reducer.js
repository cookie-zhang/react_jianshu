// import  * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    topicList: [],
	articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
    bannerImg:[],
    code: false
})
export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.CHENGE_HOME_DATA:
         return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                bannerImg: fromJS(action.bannerImg)
                })
        case actionTypes.ADD_MORE_HOMELIST:
           return state.merge({
                    'articleList': state.get('articleList').concat(action.addMoreList),
                    'articlePage': action.nextPage
                });
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        case actionTypes.CODE_MOUSERIN:
            return state.set('code', action.show);
        case actionTypes.CODE_MOUSERLEAVE:
            return state.set('code', action.show)
        default:
            return state;
    }
}