import {NavLink as Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${props => props.theme.colors.primary};
    height: 6rem;
    display: flex;
    z-index: 10;

    .toggle-menu:checked ~ .nav_icon_container{
            width: 100rem;
    }
`;

export const NavBrand = styled(Link)`
    display: flex;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    align-items: center;
    justify-content: start;

    .nav_icon_container{
        width: 110px;
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

export const NavHashLink = styled(HashLink)`
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
        //display: none;
    }
`;

export const MenuWrap = styled.div`
    display: none;
    //background: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;


`;

export const Menu = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    overflow: hidden;

    &>ul{
        list-style-type: none;
    }
`;