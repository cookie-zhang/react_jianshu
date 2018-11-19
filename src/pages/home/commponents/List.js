import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'
class List extends Component {
    render(){
        return(
            <div>
                {this.props.articleList.map((item,index)=>{
                    return(
                        <ListItem key={item.id}>
                            <img className='pic' alt='' src={item.imgUrl}></img>
                            <ListInfo>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">{item.desc}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
           </div>
        )
    } 
}
const mapState = (state)=>{
    return{
        articleList: state.getIn(['home', 'articleList'])
    }
}
const mapDispatch = ()=>{
    return{}
}



export default connect(mapState, mapDispatch)(List);