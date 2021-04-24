import styled from 'styled-components';

export const NoteFormBlock = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    padding-right: 4rem;
    width:100%;

    input{
        height: 2rem;
    }

    textarea{
        height: 16rem;
    }
`;

export const NoteFormButtonBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 1rem;

    .action_btn{
        background-color: #007bff;
        transition: background-color 1s ease;
        border: white;
        color: white;
        padding: 0.4rem 1rem;
    }

    .action_btn:hover{
        background-color: #59a9ff;
    }

    .action_danger_btn{
        background-color: #ce2019;
        transition: background-color 0.2s ease;
        border: white;
        color: white;
        padding: 0.4rem 1rem;
    }

    .action_danger_btn:hover{
        background-color: #d6474e;
    }
`;