import styled from 'styled-components';
import logoPic from '../../static/img/jianshuLogo.png'
export const HeaderWrapper = styled.div`
    position: reltive;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`
                //styled.a.attrs({href:'/'}) 也可以这么写 
export const Logo = styled.a` 
    position: absolute;
    display: block;
    top: 0;
    left: 40px;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div` 
   width: 960px;
   height: 100%;
   margin: 0 auto;
`
export const NavItem  = styled.div` 
  &.left {
    float: left;
  }
  &.right { 
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  .iconfont{
      height:56px;
      line-height:56px;
      font-size:24px;
      float:left;
  }
`
export const SearchWrppers = styled.div` 
    position: relative;
    float: left;
    height: 38px;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding: 0 10px 0 15px;
    margin-left: 20px;
    .iconfont{
        float: right;
        width: 23px;
        height: 23px;
        color: #969696;
        font-size: 17px;
        line-height: 23px;
        border-radius: 50%;
        margin-top: 7px;
        margin-left: 7px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
       
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})` 
   background: #eee;   
   width: 160px;
   box-sizing: border-box;
   height: 38px;
   outline: none;
   border: none;
   &::placeholder{
     color: #999;
   }
   &.focused{
       width: 220px;
   }
   &.slide-enter{
    transition: all .3s ease-out;
   }
   &.slide-enter-active{
    width: 220px;
   }
   &.slide-exit{
    transition: all .3s ease-out;
   }
   &.slide-exit-active{
    width: 160px;
   }
`
export const Addition = styled.div` 
   position: absolute;
   top: 0;
   right: 0;
   height: 56px;
`
export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top: 56px;
    padding: 0 20px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
	font-size: 13px;
    cursor: pointer;
    .iconfont{
        position: absolute;
        top:12px;
        right:60px;
        dispatch: inline-block;
        float:left;
        transition: all .2s ease-in;
		transform-origin: center center;
    }
`
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
export const Button = styled.div` 
   &.sigin{
       width:80px;
       margin-right: 20px;
       color: #ea6f5a;
   }
   &.write{
    width:100px;
    margin-right: 80px;
    color: #fff;
    background: #ea6f5a;
    }
  text-align: center;
  float: right;
  line-height: 38px;
  margin-top:9px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  
`