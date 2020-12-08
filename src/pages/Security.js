import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LayoutContainer } from '../styles/Layout';

const Security = () => (
    <div>
        <Navbar />
        <LayoutContainer>
            <h1>This is a Security</h1>
        </LayoutContainer>
        <Footer/>
    </div>
);

export default Security;