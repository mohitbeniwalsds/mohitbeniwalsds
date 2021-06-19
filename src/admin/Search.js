import React from 'react'
import headerlogo from '../assets/homepage/header-logo.png'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

export default function Menu() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const [opens, setOpens] = React.useState(false);

    return (
        <aside className="searchContainer main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}

            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">

                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link to="/general" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>General</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/status" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Status</p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/account" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Account </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Service</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/earnig" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Earning</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/change-log" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Change Log</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
