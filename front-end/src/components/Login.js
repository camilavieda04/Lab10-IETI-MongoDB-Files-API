import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import Container from '@material-ui/core/Container';
import './Login.css';
import { CommunicationVpnKey } from 'material-ui/svg-icons';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Axios from 'axios';


export class Login extends React.Component{
    render(){
    return (
        <React.Fragment>
            <CssBaseline />
            <main className="layout">
                <Paper className="paper">
                <Typography variant="h2">Sign in</Typography>
                    <form className="">
                        <div className="form">
                            <FormControl  margin="normal" required fullWidth> 
                                <Grid container spacing={5} alignItems="center">
                                    <div className="icon">
                                        <Grid item alignItems="center">
                                            <AccountCircle />
                                        </Grid>
                                    </div>
                                        <Grid item alignItems="center">  
                                            <TextField id = "icongrid" label="username"/>
                                        </Grid>
                                </Grid>
                                <Grid container spacing={5} alignItems="center">
                                    <div className="icon">
                                        <Grid item alignItems="center"> 
                                            <VpnKey />
                                        </Grid>
                                    </div>
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="password" label = "password" type="password" id="password" autoComplete="current-password"/>
                                        </Grid>
                                </Grid>
                            </FormControl>
                            <br/><br/>
                            <Link to="/Drawer">
                                <Button className="button"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                >
                                    LOGIN
                                </Button>
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/Register" alignItems="center">
                                    <Button 
                                    color="primary"
                                    fullWidth
                                    >
                                        Create Account
                                    </Button>
                            </Link>
                        </div>
                    </form>
                </Paper>
            </main>
        </React.Fragment>
    );

    }
}



