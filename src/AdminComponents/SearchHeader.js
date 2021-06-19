import React from 'react';
import { Link } from "react-router-dom";
import  './Admin.css';
import { useLocation} from 'react-router-dom';

export default function Header() {
    let location = useLocation();
    var currentlyClicked;
    if(location.state){
        currentlyClicked = location.state
         localStorage.setItem(
            'currentlyClicked',JSON.stringify(currentlyClicked));
    }
    else{
        currentlyClicked =   JSON.parse(localStorage.getItem(
            'currentlyClicked'));
    }
    return (
            <nav className="main-header navbar search-header navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item admin-logo-icon">
                        <h4>{currentlyClicked.first_name} </h4>
                    </li>
                </ul>
            </nav>
        )
    }
