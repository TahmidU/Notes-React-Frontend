import styled from 'styled-components';
import Grid from 'styled-components-grid';

// --- Hero Styles ---

export const HomeContentBlock = styled.div`
    background-color: ${props => props.theme.colors.secondary};
`;

export const HeroBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;

export const HeroTitleBlock = styled.div`
    margin-top: 24px;
    text-align: center;

    & > h1{
        color: ${props => props.theme.colors.text};
        margin-bottom: 24px; 
        display: block;
    }

    @media screen and (min-width: 769px)
    {
        width: 40%;
        font-size: 20px;
    }

    @media screen and (max-width: 768px)
    {
        width:80%;
        font-size: 10px;
    }
`;

// --- About Styles ---

export const AboutBlock = styled.div`
    margin-top: 48px;
    padding-top: 24px;
    background-color: ${props => props.theme.colors.primary};

    & > h1{
        padding-bottom: 24px;
        color: ${props => props.theme.colors.text};
        margin-bottom: 36px;
        text-align: center;
    }
`;

export const GridUnit = styled(Grid.Unit)`
    margin-bottom: 48px;

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.text};
        margin-bottom: 12px;

        & > p{
            margin-left: 10px;
        }
    }
`;

export const GridParagraph = styled.p`
    text-align: center;
    width: 40%;
`;
