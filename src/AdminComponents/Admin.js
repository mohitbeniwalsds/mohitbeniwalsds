import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

export default function Admin() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Menu/>
                <Content/>
                {/* <Footer/> */}
            </BrowserRouter>
        </div>
    )
}
