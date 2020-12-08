import React, {Component} from 'react';
import {FooterBlock, FooterLink, FooterMenu, Line} from '../styles/Footer';

export class Footer extends Component
{
    static displayName = Footer.name;

    render(){
        return(
            <FooterBlock>
                <footer>
                    <Line/>
                    <div>
                        <p>@2020 Tahmid Uddin. All rights reserved.</p>
                        <FooterMenu>
                            <FooterLink to='/security' activeStyle>Security</FooterLink>
                            <FooterLink to='/legal' activeStyle>Legal</FooterLink>
                            <FooterLink to='/privacy' activeStyle>Privacy</FooterLink>
                        </FooterMenu>
                    </div>
                </footer>
            </FooterBlock>
        );
    }
}