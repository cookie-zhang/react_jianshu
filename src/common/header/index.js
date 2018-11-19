import React, {Component} from 'react';
import '../../static/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrppers, NavSearch, SearchInfo,SearchInfoTitle, SearchInfoSwitch,SearchInfoItem, Addition,Button
      } from './style'

class Header extends Component {
  
  getListArry = ()=>{
    const pageList = [];
    const JsList = this.props.list.toJS()
    if(JsList.length){
      for(let i=(this.props.page-1) * 10; i < this.props.page*10; i++){
        pageList.push(
          <SearchInfoItem key={JsList[i]}>{JsList[i]}</SearchInfoItem>
        )
      }
    }

    if(this.props.focused || this.props.mouseIn){
      return(
        <SearchInfo onMouseEnter={this.props.handleMouseIn} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{this.props.handleSwitch(this.props.page,this.props.totalPage,this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe65a;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
             pageList 
            }
          </div>
          </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render(){
    return(
      <HeaderWrapper>
        <Logo href='/'></Logo>
        <Nav>
          <NavItem className='left active'><i className='iconfont'>&#xe72f;</i>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
            <SearchWrppers>
            <CSSTransition
              in={this.props.focused }
              timeout={2000}
              classNames='slide'
            >
                <NavSearch className={this.props.focused  ? 'focused':''} 
                  onFocus={()=>this.props.handleFocus(this.props.list)}
                  onBlur={this.props.handleBlur}
                >
                </NavSearch>
              </CSSTransition>
                <i className={this.props.focused  ? 'focused iconfont':'iconfont'}>
                  &#xe64d;
                </i>
                  {this.getListArry()}
            </SearchWrppers>
        </Nav>
        <Addition>
          <Button className='write'><i className='iconfont'>&#xe6a4;</i>写文章</Button>
          <Button className='sigin'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
 

}

//
const mapStateToProps = (state) => { // 数据映射到props里面
  return {
    focused: state.getIn(['header','focused']),
    //等价 state.get('header').get('focused')
    list: state.getIn(['header','list']),
    totalPage: state.getIn(['header','totalPage']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
  
}
const mapDispatchToProps = (dispatch)=> {  //这里面其实主要是做派发用,主要是写业务逻辑
  return {                                 
    handleFocus(list){
      //当list.size是0的时候就发送请求，如果不是那么就不在发送请求了，提高性能不要总是发送axios请求
      if(list.size === 0){dispatch(actionCreators.getList());}
      dispatch(actionCreators.focusAction());
    },
    handleBlur(){
      dispatch(actionCreators.blurAction());
    },
    handleMouseIn(){ 
      dispatch(actionCreators.mouseIn());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    //点击换一换
    handleSwitch(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if(page<totalPage){
        page = page + 1;
      }else{
        page = 1;
      }
      dispatch(actionCreators.switcItem(page));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); //做连接