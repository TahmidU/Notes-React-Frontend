import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {BtnLink, BtnMenu} from '../components/Button';

export const Nav = styled.nav`
    background: ${props => props.theme.colors.primary};
    height: 6.25rem;
    display: flex;
    z-index: 10;
`;

export const NavBrand = styled(Link)`
    display: flex;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    align-items: center;
    justify-content: start;

    .nav_icon_container{
        width: 120px;
        height: 40px;
    }

    .nav_icon_container img{
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px)
    {
        .nav_icon_container{
            width: 90px;
            height: 30px;
        }
    }

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
        margin-right: 1.5rem;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display:flex;
    margin-right: 1.5rem;
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
    margin-right: 1.5rem;
    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

export const NavBtn = styled(BtnLink)`
    margin-left: 1.5rem;
`;