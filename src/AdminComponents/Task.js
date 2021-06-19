import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import service5 from '../assets/homepage/service1.png';
import { Star as AddIcon } from '@material-ui/icons';
import Showreview from "../review/Showreview";
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import saveIcon from '../assets/Icons/save.png';
import Admin from './Admin.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom'


export default function Task() {

  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState({});
  const [value, setValue] = useState({});
  const  [redirect, setredirect] = useState(false);
  useEffect(() => {
    async function providerDetails(){
      fetch(`${API}/admin/getAllProfessional`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            setTableData(data)
            localStorage.setItem({
              data:data
            })
          } else {
            toast.error("Ooops!! Failed to fetch data.");
          }
        })
        )
        .catch(err => toast.error("Ooops!! Something went wrong."));
    }

    providerDetails();
    });
    
    const  redirected=()=>{
        if(redirect)
        return <Redirect to={  {
        pathname: "/show_documents/",
        state: {id: value}
    }} />
    }
    const clicked = (id)=>{
        setValue(id)
        setredirect(true)
    }
    const change = (val,id) => {
        let user = { 
        _id:id,
        status:Boolean(val)
        }
    debugger  
    fetch(`${API}/admin/validateProfessional`,
        {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            let temp = tableData;
           let ind = temp.findIndex(x=>x._id ==id);
           temp.splice(ind, 1);
           setTableData(temp)
          } else {
            toast.error("Ooops!! Updation Failed .");
          }
        })
        )
        .catch(err => toast.error("Ooops!! Something went wrong."));
  }
  const providerTable = ((x, index) => {
    return (
      <tr key ={index}>
        <th scope="row">{index + 1}</th>
        <td>{x.first_name}</td>
        <td>{x.last_name}</td>
        <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear() }</td>
        <td>
          <form> 
            <select onChange={e => change(e.target.value,x._id)} className="select-action">
            {/* <option value="">Select</option> */}
              <option value="true">Approved</option>
              <option value="false">Reject</option>
            </select>
            <span className="docsImage">
              <img className="select-image img-fluid" src={saveIcon} onClick={e => clicked(x)}/></span>
          </form>
        </td>


      </tr>
    )})

    return (
        <div className="AdminContainer"> 
          <div className="row headerHeading">
          <div className="menuHeading">
              <h3 className="mt-4 mb-4"><span className="heading-1">Tasks</span></h3>
          </div>
        </div>

        <div className="adminBodyArea">
          <form>
            <div className="row mt-2">
              <div classname="col-sm-2 taskButton" style={{marginLeft: 8}}>
                <div class="form-group ">
                  <div className="responsive">
                    <div class="form-group ">
                        <select class="form-control">
                            <option value="">Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="reject">Reject</option>
                        </select>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="col-sm-2 taskButton">
                <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control">
                      <option value="">Type</option>
                      <option value="pending">Onboarding</option>
                      <option value="approved">Documents</option>
                      <option value="reject">Activation</option>
                      <option value="reject">Incident Report</option>
                      <option value="reject">Service Request</option>
                    </select>
                  </div> 
                </div>
              </div>
              <div className="col-sm-2 taskButton">
                <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control">
                      <option value="">Urgency</option>
                      <option value="pending">High</option>
                      <option value="approved">Medium</option>
                      <option value="reject">Low</option>
                    </select>
                  </div> 
                </div>
              </div>
              
              <div className="col-sm-2 taskButton">
                <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control">
                      <option value="">Zone</option>
                      <option value="pending">East</option>
                      <option value="approved">West</option>
                      <option value="reject">North</option>
                      <option value="reject">South</option>

                    </select>
                  </div> 
              </div>
              </div>
                <div className="col-sm-2 taskButton">
                  <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control">
                      <option value="">Assigned</option>
                      <option value="pending">Yes</option>
                      <option value="approved">No</option>
                    </select>
                  </div> 
                </div>
              </div>
              <div className="col-sm-2 taskButton">
                <button type="button" className="btn btn-block admin-status-btn">Search</button>
              </div>
              <div className="col-sm-2 taskButton">
                <button type="button" className="btn btn-block btn-success create-task-btn">Create Task</button>
              </div>
              <div className="col-sm-3">
                <input type="search" className="form-control search" placeholder="Search Name"/>
              </div>
              <div className="col-sm-2 taskButton">
                <button type="button" className="btn btn-block admin-status-btn">Assigned</button>
              </div>
            </div>
          </form>

          <table className="table text-center tableLayout mt-2">
            <thead>
              <tr className="tableHeading">
                <th className="admiTable-first tableHeadingColumn" scope="col"><div class="icheck-primary d-inline">
                  <input type="checkbox" id="vehicle1" className="checkboxPrimary" name="vehicle1" value="Bike"/>
                        <label for="checkboxPrimary1">
                        </label>
                      </div>
                      </th>
                <th className="tableHeadingColumn" scope="col">Professional Name</th>
                <th className="tableHeadingColumn" scope="col">Type</th>
                <th className="tableHeadingColumn" scope="col">Urgency</th>
                <th className="tableHeadingColumn" scope="col">Time & Date</th>
                <th className="tableHeadingColumn" scope="col">Notes</th>
                <th className="admiTable-last tableHeadingColumn" scope="col">Status</th>
              </tr>
            </thead>
              <tr>
                <td>
                  <div class="icheck-primary d-inline">
                    <input type="checkbox" id="vehicle1" className="checkboxPrimary" name="vehicle1" value="Bike"/>
                      <label for="checkboxPrimary1">
                      </label>
                  </div>
                </td>
                <td>
                  <Link to="/adminDasboard" className="nav-link">Yash</Link>
                  </td>
                <td>onboarding</td>
                <td>Medium</td>
                <td>20-10-2020,12:00PM</td>
                <td>Activated</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>
                  <div class="icheck-primary d-inline">
                    <input type="checkbox" id="vehicle1" className="checkboxPrimary" name="vehicle1" value="Bike"/>
                      <label for="checkboxPrimary1">
                      </label>
                  </div>
                </td>
                <td>
                  <Link to="/adminDasboard" className="nav-link">Saurabh</Link>
                  </td>
                <td>onboarding</td>
                <td>Medium</td>
                <td>20-10-2020,12:00PM</td>
                <td>Activated</td>
                <td>Pending</td>
              </tr>
            </table>
          </div>
        </div>
      )
  }
