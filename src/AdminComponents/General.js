import React from 'react';
import Admin from './Admin.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";

export default function General() {
  let user, x;

  const [component, setComponent] = useState('#EA4337')
  const [color1, setColor1] = useState('#EA4337')
  const [color2, setColor2] = useState('#ccc')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('#ccc')
  const [color6, setColor6] = useState('')

  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')
  const [updateprofile, setupdateprofile] = React.useState({})
  var currentlyClicked;
  const getcurrentlyClicked = (() => {
    currentlyClicked = JSON.parse(localStorage.getItem('currentlyClicked'));
  });

  const saveNewSetting = () => {
    let get = JSON.parse(sessionStorage.getItem("currentlyClicked"))
    if (get) {
      fetch(`${API}/professional/updatePersonalSetting`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(get)
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            toast.success("Details Updated Successfully .");
            sessionStorage.setItem('currentlyClicked', JSON.stringify(data))
          }
          else {
            toast.error("Ooops!! Updation Failed .");
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }
  }

  // const handleChange = (cName, e) => {
  //   if (updateprofile == '') {
  //     setupdateprofile(currentlyClicked)
  //   } else {
  //     let newdata = { ...updateprofile , [e.target.name]: e.target.value }
  //     setupdateprofile(updateprofile)
  //     console.log(newdata)
  //     currentlyClicked[cName] = e.target.value
  //   }
  // }

  const handleChange = (cName, e) => {
    if (updateprofile == '') {
      setupdateprofile(currentlyClicked)
    } else {
      let newdata = { ...currentlyClicked, [e.target.name]: e.target.value }
      console.log(newdata)
      sessionStorage.setItem('currentlyClicked', JSON.stringify(newdata))
      // setupdateprofile(newdata)
      currentlyClicked[cName] = e.target.value
    }
  }

  const localsave = () => {
    // sessionStorage.setItem('currentlyClicked', JSON.stringify(updateprofile))
    saveNewSetting()
  }

  return (
    <>
      <ToastContainer
          position="top-center"
          autoClose={2000}
        />
      {getcurrentlyClicked()}
      <div className="container  status-content">

        <div className="contentBorder">
          <div className="row-width row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' }}>
              <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setDisplay3('none'); setColor4(''); setColor5('#ccc'); setColor3('#EA4337'); setColor6('') }}>Personal Info</button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
              <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setDisplay3('none'); setColor3(''); setColor5('#ccc'); setColor4('#EA4337'); setColor6('') }}>Questions</button>
            </div>
          </div>
          <hr className="activepastline"></hr>
          <div className="responsive" style={{ display: display1 }}>
            <div className="header2">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-3 paddCss">
                    <label>Name</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" onChange={(e) => handleChange("first_name", e)} name="first_name" defaultValue={currentlyClicked.first_name} className="form-control" placeholder="Type here" />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>Email</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="eamil" className="form-control" defaultValue={currentlyClicked.email} name="email" placeholder="Type here" onChange={(e) => handleChange("email", e)} />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>Phone Number</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="Number" className="form-control" defaultValue={currentlyClicked.mobile_number} name="phone" placeholder="Type here" onChange={(e) => handleChange("mobile_number", e)} id="phone" name="mobile_number" />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>Address</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" className="form-control" defaultValue={currentlyClicked.address} name="address" placeholder="Type here" onChange={(e) => handleChange("address", e)} name="address" />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>City</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" className="form-control" defaultValue={currentlyClicked.city} name="city" placeholder="Type here" onChange={(e) => handleChange("city", e)} />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>State</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" className="form-control" defaultValue={currentlyClicked.state} name="state" placeholder="Type here" onChange={(e) => handleChange("state", e)} />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>Country</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" className="form-control" defaultValue={currentlyClicked.country} name="country" placeholder="Type here" onChange={(e) => handleChange("country", e)} />
                  </div>
                  <div className="col-sm-3 paddCss">
                    <label>Postal code</label>
                  </div>
                  <div className="col-sm-8 paddCss">
                    <input type="text" className="form-control" defaultValue={currentlyClicked.postal_code} onChange={(e) => handleChange("postal_code", e)} name="postal_code" placeholder="Zip/Postal Code" />
                  </div>
                </div>
                {/* <button className="button  admin-status-btn">Save</button>
                  <button className="button  admin-status-btn">Cancel</button> */}
              </div>
            </div>
          </div>
          <div className="responsive" style={{ display: display2 }}>
            <div className="row questionGeneral">
              <div className="col-md-12">
                <label className="label-service">1. {currentlyClicked.question1Text}</label><br />
                <ul className="serach-service-list">
                  <input type="text" className="form-control" defaultValue={currentlyClicked.question1} name="question1" onChange={(e) => handleChange("question1", e)} />
                </ul><br />
                <label className="label-service">2. {currentlyClicked.question2Text}</label><br />
                <ul className="serach-service-list">
                  <input type="text" className="form-control" defaultValue={currentlyClicked.question2} name="question2" onChange={(e) => handleChange("question2", e)} />
                </ul><br />
                <label className="label-service">3. {currentlyClicked.question3Text}</label><br />
                <ul className="serach-service-list">
                  <input type="text" className="form-control" defaultValue={currentlyClicked.question3} name="question3" onChange={(e) => handleChange("question3", e)} />
                </ul><br />
                <label className="label-service">4. {currentlyClicked.question4Text}</label><br />
                <ul className="serach-service-list">
                  <input type="text" className="form-control" defaultValue={currentlyClicked.question4} name="question4" onChange={(e) => handleChange("question4", e)} />
                </ul><br />
                <label className="label-service">5. {currentlyClicked.question5Text}</label><br />
                <ul className="serach-service-list">
                  <input type="text" className="form-control" defaultValue={currentlyClicked.question5} name="question5" onChange={(e) => handleChange("question5", e)} />
                </ul><br />
                {/* <label className="label-service">6. {currentlyClicked.postal_code} ?</label><br />
                  <ul className="serach-service-list">
                    <input type="text" className="form-control" defaultValue="Yes" name="ans7" />
                  </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-3 pl-5">
          <button className="button  admin-status-btn" onClick={e => localsave()}>Save</button>
          <button className="button  admin-status-btn">Cancel</button>
        </div>
      </div>
    </>
  )
}
