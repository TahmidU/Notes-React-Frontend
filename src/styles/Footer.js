import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const FooterBlock = styled.div`
    & > footer{
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 48px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: ${props => props.theme.colors.primary};

            & > div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
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
    margin-right: 24px;
    white-space: nowrap;
`;

export const Line = styled.hr`
    height: 2px;
    border-width: 0;
    color: ${props => props.theme.colors.fade};
    background-color: ${props => props.theme.colors.fade};
    margin-bottom: 36px;
`;