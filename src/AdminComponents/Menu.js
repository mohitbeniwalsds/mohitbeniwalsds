import React from 'react'
import './Admin.css';
import headerlogo from '../assets/admin/Admin-logo.png'
import {Link , NavLink} from 'react-router-dom'
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
        <aside className="main-sidebar sidebar-dark-primary elevation-4 admin-sidbar">
        <div className="admin-nav-header-logo">
            <Link to="/" ><Image title="THEOM" src={headerlogo} fluid  /></Link>
        </div>
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Raghav Sharma</a>
                </div>
            </div>
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <NavLink to="/newAdmin/adminDasboard" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                         Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/newAdmin/live-operation" className="nav-link">
                        <i className="nav-icon fas fa-copy" />
                         Live Operations 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        Service Providers
                        {open ? <ExpandLess /> : <ExpandMore />} 
                        <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <NavLink to="/newAdmin/search-professional" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                Search
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newAdmin/newtask" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                Tasks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newAdmin/createtask" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Create Task</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newAdmin/review" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                            Reviews
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink to="/newAdmin/customers" className="nav-link">
                        <i className="nav-icon fas fa-copy" />
                        Customers
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        Service Managemnet 
                        {open ? <ExpandLess /> : <ExpandMore />} 
                        <Collapse in={open} timeout="auto" unmountOnExit></Collapse>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <NavLink to="/newAdmin/questionnair" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                Questionnaire
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newAdmin/mangeService" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                Manage Service
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/service-type" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                Service Type
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newAdmin/add-service" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                            Add Service
                            </NavLink>
    </li>*/}
                    </ul>
                </li>
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>

    )
}
