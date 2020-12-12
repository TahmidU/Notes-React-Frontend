import styled from 'styled-components';

export const InfoBlock = styled.div`

    display:flex;
    flex-direction: column;
    padding: 4rem;

    & > h1{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    & > p{
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;