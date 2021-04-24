import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LayoutContainer } from "../styles/Layout";
import { Search } from "../components/Search";

const Noteboard = () => (
    <div>
        <Navbar/>
        <LayoutContainer>
            <div>
                <Search/>
            </div>
        </LayoutContainer>
        <Footer/>
    </div>
);

export default Noteboard;