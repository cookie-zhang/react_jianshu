import axios from 'axios';
import { actionTypes } from './index';
import { fromJS } from 'immutable';
const changHomeData = (result)=> ({
    type: actionTypes.CHENGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    bannerImg: result.bannerImg
})
export const getHomeInfor = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changHomeData(result));
        }).catch(()=>{
            console.log('erro')
        })  
    }
}

const addHomeList = (result, nextPage) => ({
	type: actionTypes.ADD_MORE_HOMELIST,
	addMoreList: fromJS(result),
	nextPage
})
export const getMoreList = (page)=>{
    return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

export const toggleTopShow = (show)=>({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
})

export const mouserIn = () =>({
    type: actionTypes.CODE_MOUSERIN,
    show: true
})
export const mouserLeave = () =>({
    type: actionTypes.CODE_MOUSERLEAVE,
    show: false
})