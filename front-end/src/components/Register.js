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

export class Register extends React.Component{
    render(){
    return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                    <Typography variant="h2">Registration</Typography>
                        <form className="">
                            <div className="form">
                                <FormControl  margin="normal" required fullWidth> 
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">  
                                            <TextField id = "icongrid" label="Full Name"/>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="email" label = "email"/>
                                        </Grid>
                                    </Grid>  
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="Password" label = "Password"/> 
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item alignItems="center">
                                            <TextField  required fullWidth name="Confirm password" label = "Confirm Password"/> 
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
                                        Save
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
                            
                        
