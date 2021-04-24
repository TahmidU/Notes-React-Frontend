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
    padding: 0.5rem 1rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
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

export const ActionBtn = styled(Link)`

    background-color: #007bff;
    transition: background-color 0.2s ease;
    border: white;
    color: white;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    height: 2rem;
    padding: 0.4rem 1rem;
    
    &:hover{
        background-color: #59a9ff;
    }
`;