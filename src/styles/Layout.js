import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.primary};
`;