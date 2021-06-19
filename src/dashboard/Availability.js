import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
  const [component, setComponent] = useState('dashboard')
  const [setdate, setsetdate] = useState([])
    const [localtime, setlocaltime] = useState([])
 const Timeset = JSON.parse(localStorage.getItem("Timeset"))
const [updatetime, setupdatetime] = React.useState({

  })
React.useEffect(() => {
    
}, [setdate])



  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
  };
const handleChange = (cName, e) => {
    if (updatetime == '') {
      setupdatetime({[e.target.name]: e.target.value })
    } else {
      let newdata = { ...Timeset, [e.target.name]: e.target.value }
      setupdatetime(newdata)
      Timeset[cName] = e.target.value
    }
  }
const localsave = () => {
    localStorage.setItem('Timeset', JSON.stringify(updatetime))
  }


  // const outdata = (event) => {
  //   setlocaltime(JSON.parse(localStorage.getItem("Timeset")))
  //   let sum = false
  //   for (var x of localtime) {
  //     if (x.id == event.target.id) {
  //       sum = true
  //       x[event.target.id] = event.target.value
  //     }
  //   }
  //   if (sum == false) {
  //     setlocaltime([{ [event.target.id]: event.target.value, "id": event.target.id },...localtime])
  //   }
  //   localStorage.setItem('Timeset',JSON.stringify(localtime))
  //   console.log(localtime)
  //   // let datatime = {sunday1,sunday2,monday,monday2,tuesday,tuesday2,wenesday,wenesday2,thursday,thursday2,friday,friday2,saturday,saturday2}
  //   // console.log(datatime)
  //   // localStorage.setItem('Timeset',JSON.stringify(datatime))


  // }

  return (
    <>

      <div className="container">
        <div className="row-width row mt-5">
          <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7">
            <div className="table-responsive design">
              <table className="table  table-bordered text-center">
                <thead>
                  <tr className="table-heading">
                    <th className="table-heading-first" scope="col">Days</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Sunday</th>
                    <td><form className={classes.container} noValidate>
                      <TextField
                        id="sunday1"
                        type="time"
                        name="sunday1"
                        defaultValue={Timeset.sunday1}
                        className={classes.textField}
                        inputProps={{
                          step: 300, // 5 min

                        }}
                        onChange={(e) => handleChange("sunday1", e)}
                      />To<TextField
                        id="sunday2"
                        name="sunday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("sunday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Monday</th>
                    <td><form className={classes.container} noValidate>
                      <TextField
                        id="monday"
                        type="time"
                        name="monday"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("monday", e)}
                      />To<TextField
                        id="monday2"
                        type="time"
                        name="monday2"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("monday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Tuesday</th>
                    <td ><form className={classes.container} noValidate>
                      <TextField
                        id="tuesday"
                        type="time"
                        name="tuesday"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("tuesday", e)}
                      />To<TextField
                        id="tuesday2"
                        name="tuesday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("tuesday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Wednesday</th>
                    <td ><form className={classes.container} noValidate>
                      <TextField
                        id="wenesday"
                        name="wenesday"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("wenesday", e)}
                      />To<TextField
                        id="wenesday2"
                        name="wenesday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("wenesday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Thursday</th>
                    <td ><form className={classes.container} noValidate>
                      <TextField
                        id="thursday"
                        name="thursday"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("thursday", e)}
                      />To<TextField
                        id="thursday2"
                        name="thursday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("thursday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Friday</th>
                    <td ><form className={classes.container} noValidate>
                      <TextField
                        id="friday"
                        type="time"
                        name="friday"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("friday", e)}
                      />To<TextField
                        id="friday2"
                        name="friday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("friday2", e)}
                      />
                    </form></td>

                  </tr>
                  <tr>
                    <th scope="row">Saturday</th>
                    <td ><form className={classes.container} noValidate>
                      <TextField
                        id="saturday"
                        name="saturday"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("saturday", e)}
                      />To<TextField
                        id="saturday2"
                        name="saturday2"
                        type="time"
                        defaultValue="00:00"
                        className={classes.textField}

                        inputProps={{
                          step: 300, // 5 min
                        }}
                        onChange={(e) => handleChange("saturday2", e)}
                      />
                    </form></td>

                  </tr>
                </tbody>
              </table>
            </div>
            <div class="fom">
              <div className="form-control fd">
                <div className="row ">
                  <div className="col-sm-8">
                    <div className="">
                      <label for="1">Reapeat availibility Bi Weekly</label>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="">
                      <input type="checkbox" name="" id="1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control fd">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="">
                      <label for="2">Reapeat availibility Bi Monthly</label>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <div className="">
                      <input type="checkbox" name="" id="2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4">
                <button className="button btn1">Cancel</button>

              </div>
              <div className="col-sm-6">
                <button className="button btn1"  onClick={(e)=> localsave()}> Send</button>
              </div>
            </div>

          </div>
          <div className="col-xs-6 col-sm-6 col-md-5 col-lg-5">
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
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </div>
    </>
  );
}
