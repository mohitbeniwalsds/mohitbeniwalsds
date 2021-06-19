import React from 'react';
import { BrowserRouter } from "react-router-dom";
import SearchHeader from './SearchHeader'
import SearchMenu from './SearchMenu'
import SearchContent from './SearchContent'

export default function Admin() {
    return (
        <div>
            <BrowserRouter>
                <SearchHeader/>
                <SearchMenu/>
                <SearchContent/>
            </BrowserRouter>
        </div>
    )
}
