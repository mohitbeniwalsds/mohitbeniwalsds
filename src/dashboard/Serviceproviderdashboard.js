import React, { useState } from 'react';
import "./Dashboard.css";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import headerlogo from '../assets/homepage/header-logo.png';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import costumerDashboard from '../homepage/costumer-dashboard';
import Footer from '../common/Footer';
import Dashboard from './Dashboard';
import Profile from "./Profile";
import Booking from "./Booking";
import Pending from "./Pending";
import Availability from './Availability';
import Earnings from './Earnings';
import Account from './Account';
import ProfileManagement from './ProfileManagement';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import service5 from '../assets/homepage/service1.png';
import PersonalSettings from './PersonalSettings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { yellow } from '@material-ui/core/colors';
import { API } from "../backend";




const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    dashboard: {
      backgroundColor: "#353b48",
      marginTop: 85,
      paddingLeft: 20,
      color: 'grey',
      height: 583,

    },
    profile: {
      position: 'relative',
      width: 50,
      height: 50,
      borderRadius: 100
    },
    tooltip: {
      zIndex: 9999,
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // appBar: {
    //   [theme.breakpoints.up('sm')]: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    //   },
    // },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    center: {
    },
    notifications: {
      fontSize: 57,
      color: "#e8b702",
      paddingRight: 10
    },
    sidebarhover: {
      '&:hover': {
        backgroundColor: "rgb(0 0 0 / 18%)",
      },
    },
    profilehover: {
      paddingTop: 0,
      paddingBottom: 0,
      '&:hover': {
        backgroundColor: "#0b88b5",
        color: "#fff",
      },
    }

  }
  ),
);

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function ResponsiveDrawer(props) {
  const providerData = JSON.parse(sessionStorage.getItem("providerData"))
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [component, setComponent] = useState('dashboard')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };


  const drawer = (
    <div>

      <Divider />
      <List className={classes.dashboard}>
        <ListItem className={classes.sidebarhover} button key="dashboard" style={component == 'dashboard' ? { color: "white" } : {}} onClick={() => setComponent('dashboard')}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="bookings" style={component == 'bookings' ? { color: "white" } : {}} onClick={() => setComponent('bookings')}>
          <ListItemText primary="Bookings" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="pending-request" style={component == 'pending' ? { color: "white" } : {}} onClick={() => setComponent('pending')}>
          <ListItemText primary="Request" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="availability" style={component == 'availability' ? { color: "white" } : {}} onClick={() => setComponent('availability')}>
          <ListItemText primary="Availability" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="earnings" style={component == 'earnings' ? { color: "white" } : {}} onClick={() => setComponent('earnings')}>
          <ListItemText primary="Earnings" />
        </ListItem>
        {/* <ListItem className={classes.sidebarhover} button key="account" style={component == 'account' ? { color: "white" } : {}} onClick={() => setComponent('account')}>
             <ListItemText primary="Account Management" />
          </ListItem> */}
        <ListItem className={classes.sidebarhover} button key="profile_management" style={component == 'profile_management' ? { color: "white" } : {}} onClick={() => setComponent('profile_management')}>
          <ListItemText primary="Profile Management" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Grid container justify="center">
            <Grid item xs={10} sm={10} md={10}>
              <Link to="/Home"	><Image title="THEOM" src={headerlogo} fluid /></Link>

            </Grid>
            <Grid item container xs={2} sm={2} md={2} alignItems="flex-end" direction="column">

              <Grid item style={{ marginTop: '11px' }}>
                <NotificationsIcon className={classes.notifications} style={{ marginTop: '-10px' }} />
                <Link to="#" ><Image className={classes.profile} onClick={handleClick('bottom')} src={providerData.professionalImage == '' || providerData.professionalImage == null ? service5 : `${API}/files/${providerData.professionalImage}`} fluid /> <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
              </Grid>

            </Grid>
          </Grid>




        </Toolbar>

        <Popper className={classes.tooltip} open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <List >
                  <ListItem className={classes.profilehover} key="name">
                    <ListItemText className={classes.center} primary={providerData ? providerData.first_name + ' ' + providerData.last_name : ""} />
                  </ListItem>

                  <ListItem button className={classes.profilehover} key="profile" onClick={() => setComponent('profile')}>
                    <ListItemText className={classes.center} primary="Personal Settings" onClick={handleClick('bottom')} />
                  </ListItem>

                  {/* <ListItem className={classes.profilehover} button key="account_setting"  onClick={() => setComponent('account_setting')}>
            <ListItemText  className={classes.center} primary="Account Settings" />
          </ListItem> */}

                  {/* <ListItem className={classes.profilehover} button key="logout">
                    <ListItemText className={classes.center} primary="Logout" onClick={(e) => logout()} />
                  </ListItem> */}
                </List>
              </Paper>
            </Fade>
          )}
        </Popper>
      </AppBar>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {

            component === 'dashboard' ? <Dashboard /> : component === 'bookings' ? <Booking /> : component === 'pending' ? <Pending /> : component === 'availability' ? <Availability /> : component === 'earnings' ? <Earnings /> : component === 'account' ? <Account /> : component === 'profile_management' ? <ProfileManagement /> : component === 'profile' ? <PersonalSettings /> : component === 'account_setting' ? <Account /> : 'null'

          }
        </main>
      </div>
      <Footer />
    </>
  );
}
