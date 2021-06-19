import React from 'react';
import { Link } from "react-router-dom";
import  './Admin.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import service5 from '../assets/homepage/service1.png';
import Image from 'react-bootstrap/Image';

export default function Header() {
    return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light admin-header">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown admin-notification">
                        {/* <Link to="#" >
                            <NotificationsIcon  className=""/><span className="badge badge-warning admin-navbar-notification-icon navbar-badge">15</span>
                        </Link> */}
                    </li>
                    <li>
                        <Link to="#" >
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2 header-adminLogo" alt="User Image" />
                            {/* <Image className="header-adminLogo" src={service5} fluid  /> */}
                        </Link>
                    </li>
                    <li className="nav-item admin-logo-icon">
                        <h4>Raghav</h4>
                    </li>
                </ul>
            </nav>
    )
}
