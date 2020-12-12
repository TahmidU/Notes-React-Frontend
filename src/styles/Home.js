import styled from 'styled-components';
import Grid from 'styled-components-grid';

// --- Hero Styles ---

export const HeroBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //gap: 10rem;
    min-height: 90vh;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    padding: 1rem;

    .hero_content{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        margin-top: 4rem;
    }

    .hero_subject{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 2rem;
        height: 100%;
    }

    .hero_title_block{
        width: 90%;

        & > h1{
            text-align: left;
            font-size: 4vw;
            font-weight: bold;
            margin-bottom: 1.5rem; 
            color: ${props => props.theme.colors.text};
        }

        & > h2{
            text-align: left;
            font-size: 1.5vw;
            font-weight: 1;
            margin-bottom: 1.5rem; 
            color: ${props => props.theme.colors.text};
        }
    }

    .hero_image{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 1;
        width: 50vw;
        height: 50vh;
    }

    .hero_image img{
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 768px)
    {

        .hero_subject{
            align-items: center;
        }

        .hero_content{
            flex-direction: column-reverse;
            padding: 2rem;
            margin-right: 1rem;
        }

        .hero_title_block{
            width:100%;
            margin-bottom: 4rem;

            & > h1{
                font-size: 8vw;
                text-align: center;
                font-weight: bold;
                margin-bottom: 1rem; 
                color: ${props => props.theme.colors.text};
            }

            & > h2{
                font-size: 3vw;
                text-align: center;
                font-weight: 1;
                margin-bottom: 1rem; 
                color: ${props => props.theme.colors.text};
            }
        }

        .hero_image{
            margin-left: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
        }
    }
`;

// --- About Styles ---

export const AboutBlock = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    justify-self: center;
    width: 80%;
    flex-grow: 1;
    margin-top: 2rem;
    margin-bottom: 4rem;

    .about_content{
        display: flex;
        flex-direction: column;
        padding-top: 2.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.625rem;
        background-color: ${props => props.theme.colors.primary};

        & > h1{
            padding-bottom: 2.25rem;
            color: ${props => props.theme.colors.text};
            font-size: 2rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px)
    {
        align-items: center;
        width: 100%;
        font-size: 0.6rem;

        .about_content{
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-bottom: 0rem;
        }
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
    }

    .grid_header{
        display: flex;
        justify-content: center;
    }

    .grid_image{
        align-self: left;
        height: 3rem;
        width: 3rem;
    }

    .grid_title{
        margin-left: 0.625rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .grid_paragraph{
        display: flex;
        justify-content: center;
        align-items: center;
        

        & > p{
            font-size: 1rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px){

        .grid_image{
            height: 2rem;
            width: 2rem;
        }

    }
`;