import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LayoutContainer } from '../styles/Layout';
import { NoteFrom } from '../components/NoteForm';

const AddNote = () => (
    <div>
        <Navbar/>
        <LayoutContainer>
            <NoteFrom></NoteFrom>
        </LayoutContainer>
        <Footer/>
    </div>
);

export default AddNote;