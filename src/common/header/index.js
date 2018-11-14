import React, {Component} from 'react';
import '../../static/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrppers, NavSearch, SearchInfo,SearchInfoTitle, SearchInfoSwitch,SearchInfoItem, Addition,Button
        } from './style'

class Header extends Component {
  getListArry = ()=>{
    if(this.props.focused){
      return(
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              this.props.list.map((item,index)=>{
                return <SearchInfoItem key={index}>{item}</SearchInfoItem>
              })
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
              in={this.props.focused}
              timeout={2000}
              classNames='slide'
            >
                <NavSearch className={this.props.focused ? 'focused':''} 
                  onFocus={this.props.handleFocus}
                  onBlur={this.props.handleBlur}
                >
                </NavSearch>
              </CSSTransition>
                <i className={this.props.focused ? 'focused iconfont':'iconfont'}>
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
  }
}
const mapDispatchToProps = (dispatch)=> {  //这里面其实主要是做派发用  主要是写业务逻辑
  return {
    handleFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.focusAction());
    },
    handleBlur(){
      dispatch(actionCreators.blurAction());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); //做连接