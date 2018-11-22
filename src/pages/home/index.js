import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './commponents/Topic';
import Write from './commponents/write';
import Recomme from './commponents/Recomme';
import List from './commponents/List';
import {HomeWrapper,HomeLeft,HomeRight, BackTop, ImgWrapper} from './style';
import { actionCreators } from './store';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css';
import { fromJS } from 'immutable'

class Home extends PureComponent {
    handleScrollTop() {
		window.scrollTo(0, 0);
	}
    render(){
        console.log(fromJS(this.props.bannerImg))
        return(
            <HomeWrapper>
				<HomeLeft>
					
				<div className="swiper-container">
                <div className="swiper-wrapper">
              {this.props.bannerImg.map((item,index)=>(
                <ImgWrapper key={index} alt='' className="swiper-slide" src={item.get('imgUrl')}></ImgWrapper>

                ))}  
            </div>
            <div className='swiper-pagination'></div>
                 <div className='swiper-button-warp'>    
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div> 
        </div>

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
        
        new Swiper('.swiper-container', {
            loop: true,     //循环
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 2500,
                disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
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
        showScroll: state.getIn(['home','showScroll']),
        bannerImg: state.getIn(['home','bannerImg'])
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