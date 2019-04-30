import React, { Component } from 'react';
import { Button, FormGroup, FormControl , Feedback,FormText , Inpu } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux';

import  * as actions from '../store/actions/index';

 class Login extends Component {
   
    constructor(props){
      console.log(props)
        super(props)
        this.state ={
                username:"",
                password:"",
                error: false,
                isLoggedIn:false
        }   
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        console.log("changed")
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.onAuth(this.state.username,this.state.password);
      }

    render(){
        return(
            <div className='container Login'>
              
              <form onSubmit={this.handleSubmit} className="white">
                  <FormGroup controlId="username" >
                    <label>Username</label>
                    <input className="formControl"
                    
                      type="text"
                      id="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />       
                  
                  </FormGroup>
                  <FormGroup controlId="password">
                    <label>Password</label>
                    <input
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </FormGroup>
                  <Button
                    block
                    type="submit"
                  >
                  Login
                  </Button>
        </form>                               
    </div>
        )
    }
} 

// const mapStateToProps = state => {
//   return {
//       username: state.order.orders,
//       loading: state.order.loading
//   };
// };
const mapDispatchToProps = dispatch =>{ 
  return {
      onAuth : (username,password) => dispatch(actions.auth(username,password))
  };
};


// const mapStateToProps = state =>{

// }
export default connect(null,mapDispatchToProps)(Login);