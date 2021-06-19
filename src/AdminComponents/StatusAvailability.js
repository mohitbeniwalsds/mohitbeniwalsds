import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';

import './Admin.css';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
import {
  KeyboardDatePicker,
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
  },
}));

export default function Availability() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [count, setcount] = useState(false);
  const [component, setComponent] = useState('dashboard')

  const [currentlyClicked, setcurrentlyClicked] = React.useState(JSON.parse(localStorage.getItem("currentlyClicked")))
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
  };


  useEffect(() => {
  }, [currentlyClicked, selectedDate])

  const providerTable = ((x, index) => {
    return (
      <tr>
        gvuy
        {/* <th scope="row">{day.day}</th>
        <td>
          <form className={classes.container} noValidate>
            <TextField
              id="time"
              type="time"
              defaultValue={day.from}
              className={classes.textField}

              inputProps={{
                step: 300, // 5 min
              }}
            />To<TextField
              id="time"
              type="time"
              defaultValue={day.to}
              className={classes.textField}

              inputProps={{
                step: 300, // 5 min
              }}
            />
          </form>
        </td> */}
      </tr>
    )
  })


  return (
    <>
      <div className="container">
        <div className="row-width row mt-5">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="table-responsive admin-availability-table">
              <table className="table table-bordered text-center">
                <tbody>
                  {/* {currentlyClicked.length > 0 ? currentlyClicked.availibility.map(providerTable) : currentlyClicked.first_name} */}
                  {currentlyClicked.availibility.map((e) => {
                    return (
                      e.days.map((dats) => {
                        return (
                          <>
                            <tr>
                              <th scope="row">{dats.day}</th>
                              <td>
                                <form className={classes.container} noValidate>
                                  <TextField
                                    id="time"
                                    type="time"
                                    defaultValue={dats.from}
                                    className={classes.textField}

                                    inputProps={{
                                      step: 300, // 5 min
                                    }}
                                  />To<TextField
                                    id="time"
                                    type="time"
                                    defaultValue={dats.to}
                                    className={classes.textField}

                                    inputProps={{
                                      step: 300, // 5 min
                                    }}
                                  />
                                </form>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    )

                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 admin-availability-date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
              <div className="col-sm-12 div-status-repeat">
                <input type="checkbox" name="repeatAvailability" id="repeatAvailability" />
                <label for="repeatAvailability">Repeat Availability</label>
              </div>
            </MuiPickersUtilsProvider>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker value={selectedDate} onChange={handleDateChange} />
              <TimePicker value={selectedDate} onChange={handleDateChange} />
              <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider> */}
          </div>
        </div>
      </div>
    </>
  );
}
