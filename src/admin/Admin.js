  import React, { useState } from 'react';
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
import service5 from '../assets/homepage/service1.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import headerlogo from '../assets/homepage/header-logo.png'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Homepage from '../homepage/Homepage'
import Footer from '../common/Footer'
import AdminDashboard from './AdminDashboard';
import Grid from '@material-ui/core/Grid';
import Services from './Services'
import ManageContent from './ManageContent'
import FAndQ from './FAndQ'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Search from './Search';


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
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [component, setComponent] = useState('dashboard')
  const [color, setColor] = useState("white")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    setOpens(true);
  };

  const handleClose = () => {
    setOpens(false);
  };

  const drawer = (
    <div>

      <Divider />
      <List className={classes.dashboard}>
        <ListItem className={classes.sidebarhover} button key="dashboard" style={component == 'dashboard' ? { color: "white" } : {}} onClick={() => setComponent('dashboard')}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="services" style={component == 'services' ? { color: "white" } : {}} onClick={() => setComponent('services')}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem className={classes.sidebarhover} button key="providers" style={component == 'providers' ? { color: "white" } : {}} onClick={() => { handleClick(); }}>
          <ListItemText primary="Service Providers" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} style={component == 'search' ? { color: "white" } : {}} onClick={() => setComponent('search')}>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Tasks" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Reviews" />
            </ListItem>
          </List>
        </Collapse>
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
              <Link to="/" ><Image title="THEOM" src={headerlogo} fluid /></Link>
            </Grid>
            <Grid item container xs={2} sm={2} md={2} alignItems="flex-end" direction="column">
              <Grid item><NotificationsIcon className={classes.notifications} />
                <Link to="#" ><Image className={classes.profile} src={service5} fluid /></Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
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
              {/* {drawer} */}
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
            component === 'dashboard' ? <AdminDashboard /> :
              component === 'services' ? <Services /> :
                component === 'search' ? <Search /> :
                  'null'
          }
        </main>

      </div>
    </>
  );
}
