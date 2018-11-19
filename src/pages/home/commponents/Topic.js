import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style';
//专题

class Topic extends Component {
    render(){
        return(
                <TopicWrapper>
                    {
                        this.props.topicList.map((item, index)=>{
                            return(
                                <TopicItem key={item.id}>
                                    <img
                                    className='topic-pic'
                                    alt=''
                                    src={item.imgUrl}
                                    ></img>
                                    {item.title}
                                </TopicItem>
                            )
                        })
                    }
                   
                </TopicWrapper>
            )
    }
}

const mapStateToProps = (state)=>{
    debugger;
    return{
        topicList: state.getIn(['home','topicList']),
    }
}

const mapDispatchToProps=()=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);