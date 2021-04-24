import React, { Component } from 'react';
import axios from 'axios';
import { SearchListBlock, SearchBarBlock } from '../styles/Search';
import { ActionBtn } from '../styles/Button';

export class Search extends Component{

    constructor(props){
        super(props);

        this.state = {
            notes: [],
            searchValue: '',
            contentVisible: false
        };

        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
        this.handleSearchValueSubmit = this.handleSearchValueSubmit.bind(this);
        //this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/note')
        .then(response => {
            console.log(response.data);
            this.setState({ notes: response.data });
        }).catch(err => console.log(err));   
    }

    handleSearchValueChange(event){
        this.setState({searchValue : event.target.value});
    }

    handleSearchValueSubmit(event){
        console.log('https://localhost:5001/api/note?title='+this.state.searchValue);
        axios.get('https://localhost:5001/api/note?title='+this.state.searchValue)
        .then(response => {
            console.log(response.data);
            this.setState({notes : response.data});
        })
        .catch(err => console.log(err));
        event.preventDefault();
    }

    deleteItem(id){
        axios.delete('https://localhost:5001/api/note/'+id);
        const filteredNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes : filteredNotes});
    }

    render(){

        return(
        <SearchListBlock>

            <SearchBarBlock>

                <form onSubmit={this.handleSearchValueSubmit}>
                    <input
                        type='text'
                        placeholder='Search notes...'
                        value={this.state.searchValue}
                        onChange={this.handleSearchValueChange}/>

                    <button className='action_btn' type='submit'>
                        Search
                    </button>
                </form>

            </SearchBarBlock>

            <div className='header'>
                <p className='results_sum'>
                    {this.state.notes.length} result(s)...
                </p>

                <ActionBtn to='/add-note' type='button'>+</ActionBtn>
            </div>

            {this.state.notes.map(note => 
                <li key={note.id} className='card'>
                    <div className='card_top'>
                        {note.title}
                        <div className='card_buttons'>
                            <button type='button' className='card_image'>
                                <img src={require('../img/edit.svg')} alt='trash' />
                            </button>
                            <button type='button' onClick={() => this.deleteItem(note.id)} className='card_image'>
                                <img src={require('../img/trash.svg')} alt='trash' />
                            </button>
                        </div>

                    </div>
                    <div className='card_bottom'>
                        <p>
                            {note.content}
                        </p> 
                    </div>
                </li>
            )}
        </SearchListBlock>
        )
    }

}