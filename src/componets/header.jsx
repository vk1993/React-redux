import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route,Link,exact} from  'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Login from './Login';
import About from './about';
  

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            update: false,
            cart:"",
            isOpen: false,
            isLogin: false,
        };
        this.toggle = this.toggle.bind(this);
    }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <div>
                 <Router>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Pay--$--later</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
             
              <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to={"/"}  className='nav-link'>Home</Link>
                  </NavItem>           
                  <NavItem>
                    <Link to={"/electronic"} className='nav-link'>Electronic</Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"/books"} className='nav-link'>Books</Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"/about"} className='nav-link'>About</Link>
                  </NavItem>
                  <NavItem>
                    {this.state.isLogin ? <NavLink to={"/"}>SignOUT</NavLink> : 
                    <Link to={"/login"} className='nav-link' >SingIn</Link>}
                  </NavItem>
                  
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
            <Switch>
            <Route path='/login' component={Login} />
            <Route path='/electronic' component={Login} />
            <Route path='/books' component={Login} />
            <Route path='/about' component={About} />
               </Switch>
               </Router>
          </div>
        )
    }
}