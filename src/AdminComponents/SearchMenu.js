import React from 'react'
import headerlogo from '../assets/homepage/header-logo.png'
import {Link, NavLink} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Admin from './Admin.css';

export default function Menu() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
    const [opens, setOpens] = React.useState(false);
  
    return (
        <aside className="searchContainer search-navbar main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <NavLink to="/general" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        General
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/status" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Status
                    </NavLink>
                </li>
            
                <li className="nav-item">
                    <NavLink to="/search-account" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Account 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/search-service" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Service
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/search-earning" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Earning
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/search-change-log" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Change Log
                    </NavLink>
                </li>
            </ul>
            </nav>
        </div>
        </aside>

    )
}
