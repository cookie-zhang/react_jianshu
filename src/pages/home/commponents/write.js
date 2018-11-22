import React, { Component } from 'react';
import { WriterWrapper,     QuickCodeImg } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index'
class Write extends Component {
    QuickCodeImg(){
        if(this.props.code){
            return (
                <QuickCodeImg>
                    <img alt='' className='inimge' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img>
                </QuickCodeImg>
            )
        }
    }
    render(){
        return(
            <WriterWrapper onMouseEnter={this.props.mouserIn} onMouseLeave={this.props.mouserLeave}>
                <img className='CodeImg' alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'></img>
                <span className='writeSpan' >下载简书手机APP></span>
                <span className='writeSpanWords'>随时随地发现新内容</span>
                {this.QuickCodeImg()}
            </WriterWrapper>

        )
    }
}
const mapState = (state)=>({
    code: state.getIn(['home','code'])
})
const mapDispatch = (dispatch)=>{
    return{
        mouserIn(){
           dispatch(actionCreators.mouserIn())
        },
        mouserLeave(){
            dispatch(actionCreators.mouserLeave())
        }
    }
}

export default  connect(mapState,mapDispatch)(Write);