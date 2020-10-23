import React, {Component} from 'react';
import {
  Nav,
  NavBrand,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

export class Navbar extends Component {
    
    static displayName = Navbar.name;

    render()
    {
        return(
            <>
              <Nav>
                <NavBrand to='/'>
                  <img width='120' height='40' src={require('../logo.svg')} alt='logo' />
                </NavBrand>
                <Bars />
                <NavMenu>
                  <NavLink to='/' activeStyle>About</NavLink>
                  <NavLink to='/' activeStyle>Dashboard</NavLink>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/'>Register</NavBtnLink>
                  <NavBtnLink to='/'>Sign In</NavBtnLink>
                </NavBtn>
              </Nav>
            </>
            );
    }

};