import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Joinas from './Joinas'
import Image from 'react-bootstrap/Image'
import headerlogo from '../assets/homepage/header-logo.png'
import { Link } from 'react-router-dom'
import '../Style.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Redirect } from "react-router-dom";
export default function Header() {
  const [headercheck, setheadercheck] = React.useState(null)
  React.useEffect(() => {
    setheadercheck(sessionStorage.getItem('token'))
  }, [])

  const logout = () => {
    localStorage.clear('token');
    window.location.reload(false);
  }
  return (
    <>
      {/* <header className="Homepage-header">
        <div className="container">
          <div className="row desktopheader">
            <div className="col-md-7">
              <Link to="/"	><Image title="THEOM" src={headerlogo} fluid /></Link>
            </div>
            <div className="topBarMenu col-md-5">
              <ul id="header-menu">
                <li>
                  <NotificationsIcon className="userNotifications" />
                </li>
                <li>
                  <Link className="orders btn btn-primary" to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/serviceprovider"><Joinas /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar-homepage navbar-expand-lg navbar-light">
        <Link to="/"  ><Image title="THEOM" src={headerlogo} fluid /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <li className="nav-item">
                <NotificationsIcon className="userNotifications" />
              </li>
              <Link className="orders btn btn-primary" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link to="/serviceprovider"><Joinas /></Link>
            </li>
          </ul>
        </div>
      </nav> */}

      <header className="Homepage-header">
        <div className="container">
          <div className="row desktopheader mt-3">
            <div className="col-md-7">
              <Link to="/"	><Image title="THEOM" src={headerlogo} fluid /></Link>
            </div>
            <div className="topBarMenu col-md-5">
              <ul id="header-menu">
                <li>
                  {headercheck ? <NotificationsIcon className="userNotifications" /> : <Login />}
                </li>
                <li>
                  <Signup />
                </li>
                <li>
                  <Link to="/serviceprovider"><Joinas /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar-homepage navbar-expand-lg navbar-light">
        <Link to="/"><Image title="THEOM" src={headerlogo} fluid /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Login />
            </li>
            <li className="nav-item">
              <Signup />
            </li>
            <li className="nav-item">
              <Link to="/serviceprovider"><Joinas /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
