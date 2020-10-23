import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #fff;
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
    color: #444444;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Bars = styled(FaBars)`
    display:none;
    color:#444444;

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
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

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    margin-right:24px;

    @media screen and (max-width: 768px)
    {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    display: flex;
    align-items: center;
    background: #256ce1;
    padding: 8px 16px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover
    {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;