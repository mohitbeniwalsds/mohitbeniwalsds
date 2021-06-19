import React, { useState } from 'react';
import './Admin.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';
export default function SearchEarning() {
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
  var currentlyClicked;
  const getcurrentlyClicked = (() => {
    currentlyClicked = JSON.parse(localStorage.getItem('currentlyClicked'));
  });
  const [updateprofile, setupdateprofile] = React.useState({})
  const [error, seterror] = useState({
    Transit: " 5 characters required",
    Financial: " 3 characters required",
    Account: " 12 characters required",
  })

  const saveNewSetting = () => {
    let get = JSON.parse(localStorage.getItem("currentlyClicked"))
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
            console.log(data)
            localStorage.setItem('currentlyClicked', JSON.stringify(data))
          }
          else {
            toast.error("Ooops!! Updation Failed .");
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }

  }

  const handleChange = (cName, e) => {
    console.log({ [e.target.name]: e.target.value })
    if (updateprofile == '') {
      setupdateprofile(currentlyClicked)
    } else {
      let newdata = { ...currentlyClicked, [e.target.name]: e.target.value }
      console.log(newdata)
      localStorage.setItem('currentlyClicked', JSON.stringify(newdata))
      // setupdateprofile(newdata)
      currentlyClicked[cName] = e.target.value
    }
  }
  const remove = (a, name, e) => {
    $(a).addClass("d-none");
    handleChange(name, e)
  }

  const handleChangeacount = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "transit_number":
        value.length < 5 ? $(".Transit").removeClass("d-none") : remove(".Transit", name, e);
        break;
      case "Financial_institution_number":
        value.length < 3 ? $(".Financial").removeClass("d-none") : remove(".Financial", name, e);
        break;
      case "Account_Number":
        value.length < 12 ? $(".Account").removeClass("d-none") : remove(".Account", name, e);
        break;
    }
    // console.log(event.target.value);
  }



  return (
    <div className="container status-content">
      {getcurrentlyClicked()}
      <div className="contentBorder">
        <div className="row-width row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' }}>
            <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setDisplay3('none'); setColor4(''); setColor5('#ccc'); setColor3('#EA4337'); setColor6('') }}>Booking Info</button>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
            <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setDisplay3('none'); setColor3(''); setColor5('#ccc'); setColor4('#EA4337'); setColor6('') }}>Earnings</button>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color5, boderBottomColor: color5, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
            <button className="btn button pastclass" style={{ color: color6 }} onClick={() => { setColor1('#ccc'); setColor2('#ccc'); setDisplay1('none'); setDisplay2('none'); setColor3(''); setColor4(''); setColor5('#EA4337'); setColor6('#EA4337'); setDisplay3('block') }}>Theom Points</button>
          </div>
        </div>
        <hr className="activepastline"></hr>
        <div className="responsive" style={{ display: display1 }}>
          <div class="form-group " style={{ marginBottom: 0 }}>
            <table className="table" style={{ marginBottom: 0 }}>
              <tr>
                <th>Transit number</th>
                <td><input type="text" name="transit_number" className="form-control" placeholder="5 digits" onChange={(e) => handleChangeacount(e)} defaultValue={currentlyClicked.transit_number} style={{border:"none"}}/>
                  {<span className="errorMessage Transit d-none">{error.Transit}</span>}
                </td>
              </tr>
              <tr>
                <th>Financial institution number</th>
                <td>
                  <input type="text" className="form-control" name="Financial_institution_number" placeholder="3 digits" onChange={(e) => handleChangeacount(e)} defaultValue={currentlyClicked.Financial_institution_number} style={{border:"none"}}/>
                  {<span className="errorMessage Financial d-none">{error.Financial}</span>}
                </td>
              </tr>
              <tr>
                <th>Account number</th>
                <td>
                  <input type="text" className="form-control" name="Account_Number" placeholder="Upto  12 digits" onChange={(e) => handleChangeacount(e)} defaultValue={currentlyClicked.Account_Number} style={{border:"none"}}/>
                  {<span className="errorMessage Account d-none">{error.Account}</span>}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="responsive" style={{ display: display2 }}>
          <div className="contentBorder">
            <table className="table table-borderless borderP">
              <thead>
                <tr className="thead-light">
                  <th className="" scope="col">Weekly Statement</th>
                  <th className="floatright text-center" scope="col"><button className="button btn1">Print</button></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row"><span>Statement Period</span><br></br>
                    <br></br>
                    <span>May 04 -May 10</span>
                  </td>
                  <td> </td>
                </tr>
                <tr className="thead-light">
                  <td scope="row">Gross Earning</td>
                  <td className="floatright text-center">200</td>
                </tr>
                <tr>
                  <td scope="row">Net Earnings</td>
                  <td className="floatright text-center" >178</td>
                </tr>
                <tr>
                  <td scope="row">Tax</td>
                  <td className="floatright text-center">18</td>
                </tr>
                <tr>
                  <td scope="row">Network Access Contribution</td>
                  <td className="floatright text-center">(40)</td>
                </tr>
                <tr>
                  <td scope="row">GST-ITC</td>
                  <td className="floatright text-center">(2)</td>
                </tr>
                <tr>
                  <td scope="row">Other Adjustment</td>
                  <td className="floatright text-center" >(5)</td>
                </tr>
                <tr>
                  <td scope="row">Net revenue from Theom</td>
                  <td className="floatright text-center">153</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="responsive" style={{ display: display3 }}>
          <div className="contentBorder">
            <table className="table">
              <tr>
                <td>Theom points bought</td>
                <td>100</td>
                <td>1500</td>
              </tr>
              <tr>
                <td>Theom points redeemed</td>
                <td>90</td>
                <td>1400</td>
              </tr>
              <tr>
                <td>Theom points available</td>
                <td>10</td>
                <td>10</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="bottom-status">
        <div className="row mt-3">
          <div className="col-sm-2">
            <button className="button admin-status-btn" onClick={(e) => saveNewSetting()}>Save</button>
          </div>
          <div className="col-sm-2">
            {/* <button className="button admin-status-btn">Edit</button> */}
          </div>
          <div className="col-sm-2">
            {/* <button className="button admin-status-btn">Cancel</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
