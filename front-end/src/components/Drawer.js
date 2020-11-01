import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Face from '@material-ui/icons/Face';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Edit from '@material-ui/icons/Edit';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    root2: {
      marginTop: 80,
      width: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 40,
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const bull = <span className={classes.bullet}>•</span>;
    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <PersistentDrawerLeft />
      </div>
    );
  
    return (
      <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Task Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <Face /> : <Face />}
          </IconButton>
          <Typography variant="overline" display="block" color="primary" gutterBottom align-item="center">
            Sarah Vieda
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <Edit /> : <Edit />}
          </IconButton>
        </div>
        <Divider />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link to="/Login">
          <Button className="button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            startIcon={<ExitToApp />}
          >
            Log out
          </Button>
        </Link>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        
      >
      
      <div className={classes.root2}>
          <Card className={classes.root2} >
            <CardContent>
              <Typography  variant="h5" component="h5" gutterBottom>
                  Implement Login View
              </Typography>
              <Typography variant="h6" component="h6" gutterBottom>
                  In progress - 12-05-2019
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                  Sarah Vieda
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root2} >
            <CardContent>
              <Typography  variant="h5" component="h5" gutterBottom>
                  Implement Login Controller
              </Typography>
              <Typography variant="h6" component="h6" gutterBottom>
                  Ready - 12-05-2019
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                  Sarah Vieda
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root2} >
            <CardContent>
              <Typography  variant="h5" component="h5" gutterBottom>
                  Facebook integration
              </Typography>
              <Typography variant="h6" component="h6" gutterBottom>
                  Completed - 12-05-2019
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                  Sarah Vieda
              </Typography>
            </CardContent>
          </Card>
         
        </div>
        <div>
          <Link to="/NewTask">
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>            
          </Link>
        </div>
        <div>
          <button type="button" onClick={handleOpen}>
            Open Modal
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </main>
      
    </div>
  );
}