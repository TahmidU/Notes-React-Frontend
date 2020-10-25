import React, {Component} from 'react';
import styled from 'styled-components';
import {BtnExtern, BtnTextLink} from './Button';

// --- Hero Styles ---

export const HeroBlock = styled.div`
    margin-top: 48px;
    margin-bottom:48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeroTitleBlock = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
`;

// --- Hero Compoenent ---

export class Hero extends Component
{
    static displayName = Hero.name;

    render()
    {
        return(
            <div>
                <HeroBlock>
                    <HeroTitleBlock>
                        <h1 style={{color: "white", marginBottom: '24px'}}>Keep all your notes in one place</h1>
                        <BtnExtern style={{alignItems: 'center', justifyContent: 'center'}} >
                            <BtnTextLink to='/'>Get Started!</BtnTextLink>
                        </BtnExtern>
                    </HeroTitleBlock>
                </HeroBlock>
            </div>
        );
    }
}

// --- About Styles ---



// --- About Component ---

export class About extends Component
{
    static displayName = About.name;

    render()
    {
        return(
            <h1>About</h1>
        );
    }
}