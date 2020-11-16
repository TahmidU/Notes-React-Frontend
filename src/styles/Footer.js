import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const FooterBlock = styled.div`
    position: relative;
    bottom: 0;
    padding-top: 2.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 768px){
        font-size: 0.625rem;
    }

    & > footer{
            & > div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            @media screen and (max-width: 768px)
            {
                & > div{
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: center;
                    align-items: center;
                }
            }
    }
`;

export const FooterLink = styled(Link)`
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const FooterMenu = styled.div`
    display:flex;
    justify-content: space-between;
    white-space: nowrap;

    @media screen and (max-width: 768px){
        padding-bottom: 1rem;
    }
`;

export const Line = styled.hr`
    height: 0.125rem;
    border-width: 0;
    color: ${props => props.theme.colors.fade};
    background-color: ${props => props.theme.colors.fade};
    margin-bottom: 1.5rem;
`;