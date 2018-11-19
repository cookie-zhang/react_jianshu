import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './commponents/Topic';
import Write from './commponents/write';
import Recomme from './commponents/Recomme';
import List from './commponents/List';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import axios from 'axios'
class Home extends Component {
    render(){
        return(
            <HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic></Topic>
                    <List></List>
				</HomeLeft>
				<HomeRight>
                    <Recomme></Recomme>
                    <Write></Write>
				</HomeRight>
			</HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data
            const action = {
               type: 'change_home_data',
               topicList: result.topicList,
               articleList: res.articleList,
               recommendList: res.recommendList
           }
           this.props.changeHomeData(action);
        }).catch(()=>{
            console.log('erro')
        })  
    }
}

const mapStateToProps = (state)=>{
    return{

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
       changeHomeData(action){
        dispatch(action)
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);