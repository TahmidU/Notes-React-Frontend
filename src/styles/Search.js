import styled from 'styled-components';

export const SearchListBlock = styled.ul`
    list-style-type: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .results_sum{
        text-align: start;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .action_btn{
        background-color: #007bff;
        transition: background-color 0.2s ease;
        border: white;
        color: white;
        padding: 0.4rem 1rem;
    }

    .action_btn:hover{
        background-color: #59a9ff;
    }

    .card{
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .card_top{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        transition: transform .2s;
        background-color: white;
    }

    .card_buttons{
        display: flex;
        width: 8rem;
        flex-direction: row;
        justify-content: space-evenly;
        align-self: center;
    }

    .card_bottom{
        margin-top: 1rem;
        font-size: 0.7rem;
        white-space: pre-line;
    }

    .card_image{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: white;
        transition: background-color 1s ease;
        width: 32px;
        height: 32px;
    }

    .card_image img{
        width: 100%;
        height: auto;
    }

    .card_image:hover{
        background-color: #f5f5f5;
    }

    .card:hover{
        transform: scale(1.005);
    }
`;

export const SearchBarBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;

    & > form{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    & > form > input{
        width: 70%;
        height: 2rem;
        margin-right: 2rem;
        border: 0.125rem solid #f1f1f1;
    }

    & > form > input:focus{
        border: 0.125rem solid black;
    }

`;