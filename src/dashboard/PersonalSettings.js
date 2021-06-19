
import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import service5 from '../assets/homepage/service1.png';
import { useEffect } from "react";
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';



export default function PersonalSettings() {
  const [color, setColor] = useState('Earnings')
  const [component1, setComponent1] = useState('Summary')
  const [component, setComponent] = useState('dailyupdate')
  const [tableData, settableData] = useState('')
  let providerData;
  const getd = () => {
    providerData = JSON.parse(sessionStorage.getItem("providerData"))
  }
  const userPass = {}
  const [updateprofile, setupdateprofile] = React.useState({

  })
  const [error, seterror] = useState({
    Transit: " 5 characters required",
    Financial: " 3 characters required",
    Account: " 12 characters required",
  })
  React.useEffect(() => {

  }, [tableData, providerData])
  const saveNewSetting = () => {
    let get = JSON.parse(sessionStorage.getItem("providerData"))
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
            sessionStorage.setItem('providerData', JSON.stringify(data))
          }
          else {
            toast.error("Ooops!! Updation Failed .");
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }
  }
  const changePassword = (data) => {
    if (data) {
      data._id = providerData._id
      fetch(`${API}/professional/changePassword`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            console.log(data)
            toast.success(data.msg);
            userPass = {}
          }
          else {
            toast.error(data.msg);
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }
  }

  const imgchange = (e, id) => {
    var formdata = new FormData();
    formdata.append("user_id", id);
    formdata.append("photo_id", e.target.files[0]);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${API}/professional/uploadprofileimage`, requestOptions)
      .then(response => response.text())
      .then(result => {
        toast.success(result.msg)
        againdatafetch()
      })
      .catch(error => toast.error('error', error));
  }


  const againdatafetch = () => {
    fetch(`${API}/admin/getAllProfessional`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json()
        .then(result => {
          result.map((exitag) => {
            if (exitag._id == providerData._id) {
              sessionStorage.setItem('providerData', JSON.stringify(exitag))
              toast.success("Update successfuly")
              setTimeout(function () {
                window.location.reload(false)
              }, 1000);

            }
          })
        }))
      .catch(error => toast.error('error', error));

  }

  const handleChange = (cName, e) => {
    console.log({ [e.target.name]: e.target.value })
    if (updateprofile == '') {
      setupdateprofile(providerData)
    } else {
      let newdata = { ...providerData, [e.target.name]: e.target.value }
      console.log(newdata)
      sessionStorage.setItem('providerData', JSON.stringify(newdata))
      // setupdateprofile(newdata)
      providerData[cName] = e.target.value
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


  const localsave = () => {
    // sessionStorage.setItem('providerData', JSON.stringify(updateprofile))
    saveNewSetting()
  }


  const fakesuccess = () => {
    toast.success("Saved successfully");
  }


  const handlePassword = (cName, e) => {
    userPass[cName] = e.target.value
  }
  return (
    <>
      {getd()}
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="borderP" >
              <div className="header">
                <p>Personal Settings</p>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="row col-12">
                    <div className="form-group col-sm-4">
                      <input type="text" className="" onChange={(e) => handleChange("first_name", e)} name="first_name" id="fName" placeholder="First Name" defaultValue={providerData.first_name} />
                    </div>
                    <div className="form-group col-sm-4">
                      <input type="text" className="" onChange={(e) => handleChange("middle_name", e)} name="middle_name" id="mName" placeholder="Middle Name" defaultValue={providerData.middle_name} />
                    </div>
                    <div className="form-group col-sm-4">
                      <input type="text" className="" onChange={(e) => handleChange("last_name", e)} name="last_name" id="lName" placeholder="Last Name" defaultValue={providerData.last_name} />
                    </div>
                  </div>
                  <div className="row  col-12">
                    <div className="form-group col-sm-12">
                      <input type="email" className="" onChange={(e) => handleChange("email", e)} id="email" name="email" placeholder="Email Address" defaultValue={providerData.email} />
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="form-group col-sm-12">
                      <input type="text" className="" onChange={(e) => handleChange("mobile_number", e)} id="phone" name="mobile_number" placeholder="Phone Number" defaultValue={providerData.mobile_number} />
                    </div>
                  </div>

                  <div className="row col-12">

                    <div className="form-group col-sm-12">
                      <input id="addressArea" className="" onChange={(e) => handleChange("address", e)} name="address" placeholder="Address" defaultValue={providerData.address} />
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="form-group col-sm-6">
                      <input id="city" className="" onChange={(e) => handleChange("city", e)} name="city" placeholder="City" defaultValue={providerData.city} />

                    </div>
                    <div className="form-group col-sm-6">
                      <input id="state" className="" onChange={(e) => handleChange("state", e)} name="state" placeholder="State" defaultValue={providerData.state} />
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="form-group col-sm-6">
                      <input id="country" className="" onChange={(e) => handleChange("country", e)} name="country" placeholder="Country" defaultValue={providerData.country} />
                    </div>
                    <div className="form-group col-sm-6">
                      <input id="postal_code" className="" onChange={(e) => handleChange("postal_code", e)} name="postal_code" placeholder="Zip/Postal Code" defaultValue={providerData.postal_code} />

                    </div>
                    <button onClick={() => localsave()} className="button btn1 float-left">Save</button>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="profile">
                    <div className="profile-img">
                      <img className="profileimage" src={providerData.professionalImage == '' || providerData.professionalImage == null ? service5 : `${API}/files/${providerData.professionalImage}`} />
                      <div className="upload-button">
                        <div className="file btn tab-btns" >
                          Change
                          <input type="file" name="profileImages" id="profile_pic_upload" onChange={(e) => imgchange(e, providerData._id)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="borderP">
              <div className="header">
                <p>Change Password</p>
              </div>

              <div className="header2">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-4 paddCss">
                      <label>Current Password</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" name="" onChange={(e) => handlePassword("current", e)} className="form-control" placeholder="Type here" />
                    </div>
                    <div className="col-sm-4 paddCss">
                      <label>Enter New Password</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" onChange={(e) => handlePassword("new", e)} className="form-control" name="" placeholder="Type here" />
                    </div>
                    <div className="col-sm-4 paddCss">
                      <label>Re-enter New Password</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" onChange={(e) => handlePassword("confirm", e)} className="form-control" name="" placeholder="Type here" />
                    </div>
                  </div>
                  <button onClick={() => changePassword(userPass)} className="button btn1">Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="borderP">
              <div className="header">
                <p>Manage Notifications</p>
              </div>
              <div className="header2 paddCss1">
                <div className="row">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  </div>
                  <div className="4">
                    <label>Email about new job*</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  </div>
                  <div className="4">
                    <label>Text new job (Charges may apply)</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  </div>
                  <div className="4">
                    <label>New Offers/Promotions</label>
                  </div>
                </div>

                <button onClick={() => fakesuccess()} className="button btn1">Save</button>
              </div>
            </div>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="borderP">
              <div className="header">
                <p>Bank Details</p>
              </div>

              <div className="header2">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-4 paddCss">
                      <label>Transit Number</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" name="transit_number" className="form-control" placeholder="5 digits" onChange={(e) => handleChangeacount(e)} defaultValue={providerData.transit_number} />
                      {<span className="errorMessage Transit d-none">{error.Transit}</span>}
                    </div>
                    <div className="col-sm-4 paddCss">
                      <label>Financial institution number</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="Financial_institution_number" placeholder="3 digits" onChange={(e) => handleChangeacount(e)} defaultValue={providerData.Financial_institution_number} />
                      {<span className="errorMessage Financial d-none">{error.Financial}</span>}
                    </div>
                    <div className="col-sm-4 paddCss">
                      <label>Account Number</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="Account_Number" placeholder="Upto  12 digits" onChange={(e) => handleChangeacount(e)} defaultValue={providerData.Account_Number} />
                      {<span className="errorMessage Account d-none">{error.Account}</span>}
                    </div>
                  </div>
                  <button onClick={() => localsave()} className="button btn1">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
