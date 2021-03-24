import React, { Component } from 'react';

export class SearchBar extends Component{

    render(){
        return(
            <form action='/' method='get'>
                <input 
                    type='text'
                    placeholder='Search notes...'/>
                <button type='submit'>
                    Search
                </button>
        
            </form>
        );
    }
    
}