import  React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style';
//专题

class Topic extends PureComponent {
    render(){
        return(
                <TopicWrapper>
                    {
                        this.props.topicList.map((item, index)=>{
                            return(
                                <TopicItem key={item.get('id')}>
                                    <img className='topic-pic' alt='' src={item.get('imgUrl')}  />
                                    {item.get('title')}
                                </TopicItem>
                            )
                        })
                    }
                   
                </TopicWrapper>
            )
    }
}

const mapStateToProps = (state)=>{
    return{
        topicList: state.getIn(['home','topicList']),
    }
}

const mapDispatchToProps=()=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);