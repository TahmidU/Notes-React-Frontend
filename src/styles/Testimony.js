import styled from 'styled-components';

// --- Testimony Styles ---

export const TestimonyBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 40rem;
    padding: 1.5rem;
    flex-grow: 1;
    background-color: ${props => props.theme.colors.fade};

    .testimony_content{
        display: flex;
        flex-direction: column;
        width:100%;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 2.5rem;

        & > h1{
            margin-bottom: 2rem;
            color: ${props => props.theme.colors.text};
            font-size: 2rem;
            text-align: center;
        }
    }

    .testimony_quote{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 4rem;


        & > blockquote{
            font-size: 1.5rem;
            margin-bottom: 1rem;
            width: 60%;
            text-align: center;
            animation: opacity-ease-in-out-loop 10s;
            animation-iteration-count: infinite;
        }

        & > figcaption{
            font-style: italic;
            color: ${props => props.theme.colors.line};
            animation: opacity-ease-in-out-loop 10s;
            animation-iteration-count: infinite;
        }

        @keyframes opacity-ease-in-out-loop {
            0%{
                opacity: 0%;
            }
            10%{
                opacity:100%;
            }
            90%{
                opacity:100%
            }
            100%{
                opacity:0%;
            }
        }

    }

    .testimony_reviewers{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        justify-self: flex-end;
        align-self: flex-end;
        flex-grow:1;
        width: 100%;
        padding-top: 1rem;
    }

    .reviewers_logos{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 180px;
        height: 64px;
    }

    .reviewers_logos img{
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    
    @media screen and (max-width: 768px){

    .testimony_quote blockquote{
        width: 80%;
        font-size: 1rem;
    }

    .testimony_quote figcaption{
        font-size: 0.8rem;
    }

    .reviewers_logos{
        width: 90px;
        height: 32px;
    }

    }
`;