import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
class Recomme extends PureComponent {
    render(){
        return(
           <div>
               <RecommendWrapper>
                   {
                        this.props.recommendList.map((item,index)=>{
                            return(
                                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
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