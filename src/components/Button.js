import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const BtnMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnLink = styled(Link)`
    border-radius: 4px;
    display: inline-block;
    align-items: center;
    background: ${props => props.theme.colors.accent};
    padding: 8px 16px;
    color: ${props => props.theme.colors.primary};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover
    {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
    }
`;