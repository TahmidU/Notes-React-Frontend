import axios from 'axios';
import React, { Component } from 'react';
import { NoteFormBlock, NoteFormButtonBlock } from '../styles/NoteForm';

export class NoteFrom extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: ''
        }

        this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
        this.handleContentTextChange = this.handleContentTextChange.bind(this);
        this.redirectToNoteBoard = this.redirectToNoteBoard.bind(this);
        this.submitNote = this.submitNote.bind(this);
    }

    handleTitleTextChange(event){
        this.setState({title : event.target.value});
    }

    handleContentTextChange(event){
        this.setState({content : event.target.value});
    }

    redirectToNoteBoard(){
        window.location.assign('http://192.168.0.19:3000/noteboard');
    }

    submitNote(event){
        console.log(this.state.content);
        axios.post('https://localhost:5001/api/note', {
            title: this.state.title,
            content: this.state.content
        }).then(response => {
            console.log(response);
            this.redirectToNoteBoard();
        }).catch(err => console.log(err));
        event.preventDefault();
    }

    render(){

        return(
            <div>

                <NoteFormBlock onSubmit={this.submitNote}>

                    <label className='form_label_title'>Title: </label><br/>
                    <input type='text' value={this.state.title} onChange={this.handleTitleTextChange}/><br/>

                    <label className='form_label_content'>Details: </label><br/>
                    <textarea type='text' value={this.state.content} onChange={this.handleContentTextChange}/><br/>

                    <NoteFormButtonBlock>
                        <button className='action_danger_btn' type='button' onClick={this.redirectToNoteBoard}>Cancel</button>
                        <button className='action_btn' type='submit'>Confirm</button>
                    </NoteFormButtonBlock>

                </NoteFormBlock>

            </div>
        );

    }

}