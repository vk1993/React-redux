import React, { Component } from 'react';
import { connect } from 'react-redux';

import  * as actions from '../store/actions/index';

class About extends Component {
   
    componentDidMount(){
        this.props.onFetchUserData(this.props.isLoggedIn,this.props.username);
        console.log('about jsx')
        console.log(this.props);
       
    }

   
    render(){
        return (
            <div><p>dhdhhdhd</p></div>
        )
    }
}
const mapStateToProps = state =>{
    console.log("inside mapStateToProps of Aboutjsx")
    console.log(state)
    return {
        userDetails: state.userDetailsFetch.userDetails,
        username : state.auth.username,
        isLoggedIn : state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = dispacth =>{
    return {
        onFetchUserData : (isLoggedIn,username) => dispacth(actions.userDetailsFetch(isLoggedIn,username))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(About);