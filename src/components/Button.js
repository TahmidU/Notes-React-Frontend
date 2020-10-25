import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const BtnExtern = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnTextLink = styled(Link)`
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

    &:hover
    {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;