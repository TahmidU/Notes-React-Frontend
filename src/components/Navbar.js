import React, {Component} from 'react';
import { Nav, NavBrand, NavLink, NavHashLink, Bars, NavMenu, NavBtnMenu, NavBtn } from '../styles/Navbar';

export class Navbar extends Component {
    
    static displayName = Navbar.name;

    render()
    {
        return(
            <>
              <Nav>
                <NavBrand to='/'>
                  <div className='nav_icon_container'>
                    <img src={require('../logo.svg')} alt='logo' />
                  </div>
                </NavBrand>
                <Bars />
                <NavMenu>
                  <NavLink to='/' activeStyle>Home</NavLink>
                  <NavHashLink smooth to='/#about' activeStyle>About</NavHashLink>
                  <NavLink to='/' activeStyle>Noteboard</NavLink>
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