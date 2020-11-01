import React, {Component} from 'react';
import { Nav, NavBrand, NavLink, Bars, NavMenu, NavBtnMenu, NavBtn } from '../styles/Navbar';

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
                  <NavLink to='/' activeStyle>Home</NavLink>
                  <NavLink to='/' activeStyle>About</NavLink>
                  <NavLink to='/' activeStyle>Dashboard</NavLink>
                </NavMenu>
                <NavBtnMenu>
                    <NavBtn to='/'>Register</NavBtn>
                    <NavBtn to='/'>Sign in</NavBtn>
                </NavBtnMenu>
              </Nav>
            </>
            );
    }

};