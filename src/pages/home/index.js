import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './commponents/Topic';
import Write from './commponents/write';
import Recomme from './commponents/Recomme';
import List from './commponents/List';
import {HomeWrapper,HomeLeft,HomeRight, BackTop} from './style';
import { actionCreators } from './store'

class Home extends PureComponent {
    handleScrollTop() {
		window.scrollTo(0, 0);
	}
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
			</HomeWrapper>
        )
    }
    componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}
const mapStateToProps = (state)=>{
    return{
        showScroll: state.getIn(['home','showScroll'])
    }
}
const mapDispatchToProps = (dispatch)=>{
  return{
       changeHomeData(){
          const action = actionCreators.getHomeInfor();
          dispatch(action);
        },
        changeScrollTopShow(){
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleTopShow(true))
            }else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);