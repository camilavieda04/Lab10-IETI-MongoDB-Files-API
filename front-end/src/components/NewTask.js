import React from 'react';
import 'date-fns';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import './NewTask.css';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const currencies = [
  {
    value: 'Ready',
  },
  {
    value: 'In Progress',
  },
  {
    value: 'Done',

  },
];

export default function NewTask() {
  const [currency, setCurrency] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const addTask = async() =>{
    await fetch(' https://ieti-taskplanner.azurewebsites.net/api/add-task?code=8n7eB9hsSyEGxgalG86qb/aoZMmnpV1W/D4B4plbHoOJdjBmj86Whw==',{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:document.getElementById("id").value,description:document.getElementById("description").value,status:document.getElementById("status").value,dueDate:document.getElementById("dueDate").value,responsible:document.getElementById("responsible").value})
    });
    
  }
  const handleInputChange=(e) =>{
    setFile(e.target.files[0]);
  }
  return (
    <form className="root" noValidate autoComplete="off" >
      <div className="layout">
          <Container className="root" maxWidth="md">
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <Grid container justify="space-around">
              <TextField id="standard-basic" label="Description" />
              <TextField id="standard-basic" label="Responsible" />
              <TextField
                id="standard-select-status"
                select
                value={currency}
                onChange={handleChange}
                helperText="Please select your status"
              >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
              </TextField>
            </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <input type="file" id="file" onChange={this.handleInputChange}/>
          </Container>
          <br></br><br></br>
          <Link to="/Drawer">
            <Button className="button"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
            >
                CREATE
            </Button>
          </Link>
      </div>
    </form>
  );
};


