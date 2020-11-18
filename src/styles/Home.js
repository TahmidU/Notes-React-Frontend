import styled from 'styled-components';
import Grid from 'styled-components-grid';

// --- Hero Styles ---

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.primary};
`;

export const HeroBlock = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};

    .hero_content{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
    }

    .hero_subject{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .hero_title_block{ 
        width: 60%;
        font-size: 1.25rem;
        text-align: center;
        padding: 1rem;

        & > h1{
            margin-bottom: 1.5rem; 
            color: ${props => props.theme.colors.text};
        }
    }

    .hero_image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1200px;
        height: 500px;
    }

    .hero_image img{
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px)
    {
        .hero_content{
            flex-direction: column-reverse;
            padding: 2rem;
        }

        .hero_title_block{
            width:100%;
            font-size: 1rem;
        }

        .hero_image{
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
        }
    }
`;

export const HeroTitleBlock = styled.div`

`;

// --- About Styles ---

export const AboutBlock = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    width: 80%;
    flex-grow: 1;
    font-size: 1rem;
    
    @media screen and (max-width: 768px)
    {
        align-items: center;
        width: 100%;
        font-size: 0.6rem;
    }
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2.5px;
    background-color: ${props => props.theme.colors.primary};

    & > h1{
        padding-bottom: 2.25rem;
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (max-width: 768px)
    {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-bottom: 0rem;
    }
`;

export const GridUnit = styled(Grid.Unit)`
    padding: 1rem;

    & > div{
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.text};
        padding-bottom: 0.375rem;
        padding-top: 0.375rem;

        & > img{
            align-self: left;
        }
    }

    .grid_image{
        height: 3rem;
        width: 3rem;
    }

    .grid_title{
        margin-left: 0.625rem;
        font-size: 1rem;
    }

    .grid_paragraph{
        font-size: 1rem;
        margin-left: 0.625rem;
    }

    @media screen and (max-width: 768px){

        .grid_image{
            height: 2rem;
            width: 2rem;
        }

    }
`;
