import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {BtnLink, BtnMenu} from '../components/Button';

export const Nav = styled.nav`
    background: ${props => props.theme.colors.primary};
    height: 100px;
    display: flex;
    z-index: 10;

`;

export const NavBrand = styled(Link)`
    display: flex;
    margin-left: 24px;
    margin-right: 24px;
    align-items: center;
    justify-content: start;
`;

export const NavLink = styled(Link)`
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Bars = styled(FaBars)`
    display:none;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        align-self: center;
        right:0;
        margin-right: 24px;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display:flex;
    margin-right: 24px;
    width:100vw;
    white-space: nowrap;

    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

export const NavBtnMenu = styled(BtnMenu)`
    justify-content: flex-end;
    width: 100vw;
    margin-right:24px;
    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

export const NavBtn = styled(BtnLink)`
    margin-left: 24px;
`;