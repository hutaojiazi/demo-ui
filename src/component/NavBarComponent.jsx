import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'

class NavBarComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {isOpen: false};
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
        return <Navbar color="dark" dark expand="md fixed-top">
        <NavbarBrand tag={Link} to="/">App Demo</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem active>
              <NavLink href="/products">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>;
    }
}

export default withRouter(NavBarComponent)