import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
class Recomme extends Component {
    render(){
        return(
           <div>
               <RecommendWrapper>
                   {
                        this.props.recommendList.map((item,index)=>{
                            return(
                                <RecommendItem key={item.id} imgUrl={item.imgUrl} />
                            )
                        })
                   }
               </RecommendWrapper>
           </div>
        )
    }
}

const mapState=(state)=>{
    return{
        recommendList: state.getIn(['home','recommendList'])
    }
}
const mapDispatch=()=>{
    return{}
}


export default connect(mapState,mapDispatch)(Recomme);