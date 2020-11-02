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
                            <FooterLink to='/' activeStyle>Security</FooterLink>
                            <FooterLink to='/' activeStyle>Legal</FooterLink>
                            <FooterLink to='/' activeStyle>Privacy</FooterLink>
                        </FooterMenu>
                    </div>
                </footer>
            </FooterBlock>
        );
    }
}