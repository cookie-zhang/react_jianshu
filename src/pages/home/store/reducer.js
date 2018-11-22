// import  * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { actionTypes } from './index'
const defaultState = fromJS({
    topicList: [],
	articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
    bannerImg:[{
        "imgUrl":"https://upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        "imgUrl":"https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        "imgUrl":"https://upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }]
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