import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index'
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from 'react-router-dom';

class Detail extends PureComponent {
    render(){
        console.log(this.props.loginStatus)
        if(!this.props.loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                         <Input placeholder='账号' ref={(input)=>{this.account = input}} /> 
                         <Input placeholder='密码' type='password' ref={(input)=>{this.password = input}}/>
                         <Button onClick={( )=>this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
             )
        }else{
            return( <Redirect to='/' /> )
        }
       
    }

   
}
const mapState = (state)=>({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
    login(accountElement,passwordElement){
       dispatch(actionCreators.login(accountElement.value,passwordElement.value))
    }
})



export default connect(mapState,mapDispatch)(Detail);