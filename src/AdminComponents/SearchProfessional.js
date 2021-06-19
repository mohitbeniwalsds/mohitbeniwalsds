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
import { Link } from 'react-router-dom';
import $ from 'jquery';



export default function Liveoperation() {
  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [value, setValue] = useState({});
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(false);
  const [count1, setcount1] = useState(false);
  const [categorys, setcategorys] = useState();
  useEffect(() => {

    async function providerDetails() {
      if (!count) {
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
              setcount(true)
              data.map((e) => tableData.push(e))
              data.map((e) => tableDatafix.push(e))
              localStorage.setItem({
                data: data
              })
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
          .catch(err => toast.error("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, [tableDatafix]);
  const getCategory = function () {
    if (!count1) {
      setcount1(true)
      fetch(`${API}/admin/getAllCategory`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status == 200) {
              setcategorys(data)
              localStorage.setItem({
                data: data
              })
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
        )
        .catch((err) => toast.error("Ooops!! Something went wrong."));
    }
  };
  const redirected = () => {
    if (redirect)
      return <Redirect to={{
        pathname: "/show_documents/",
        state: { id: value }
      }} />
  }
  const clicked = (data) => {
    // setValue(id)
    localStorage.setItem(
      'currentlyClicked', JSON.stringify(data)
    )
    // setredirect(true)
  }
  const catSelectItems = function () {
    if (categorys && categorys.length > 0) {
      let items = [];
      for (let i = 0; i < categorys.length; i++) {
        items.push(<option key={i} value={categorys[i].category}>{categorys[i].category}</option>);
        //here I will be creating my options dynamically based on
        //what props are currently passed to the parent component
      }
      return items;
    }
  }

  const name = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => (x.first_name + x.last_name).toLowerCase().search(data.target.value.replace(/ /g, "").toLowerCase()) >= 0 || x.last_name.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
        setTableData(find)
        if (find.length > 0) {
          $(".admintable").removeClass("d-nonee");
        }
        else {
          $(".admintable").addClass("d-nonee");
        }
      }
    }
    else {
      $(".admintable").addClass("d-nonee");
      setTableData(tableDatafix)
    }
  }
  const email = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => x.email.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
        setTableData(find)
        if (find.length > 0) {
          $(".admintable").removeClass("d-nonee");
        }
        else {
          $(".admintable").addClass("d-nonee");
        }
      }
      console.log(tableData)
    }
    else {
      $(".admintable").addClass("d-nonee");
      setTableData(tableDatafix)
    }
  }
  const phone = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => x.mobile_number.toString().search(data.target.value) >= 0)
        setTableData(find)
        if (find.length > 0) {
          $(".admintable").removeClass("d-nonee");
        }
        else {
          $(".admintable").addClass("d-nonee");
        }
      }

    }
    else {
      $(".admintable").addClass("d-nonee");
      setTableData(tableDatafix)
    }
  }

  const status = (data) => {
    let table = []
    table = tableDatafix
    let onboarding, status;
    if (data.target.value.length > 0) {
      switch (data.target.value) {
        case 'onboarding':
          onboarding = true;
          break;
        case 'active':
          status = true;
          break;
        case 'inactive':
          status = false;
          break;
      }
      if (table.length) {
        let find
        if (onboarding) {
          find = table.filter(x => x.onboarding == true)
        }
        else {
          find = table.filter(x => (x.status == status && x.onboarding == false))
        }
        setTableData(find)
        if (find.length > 0) {
          $(".admintable").removeClass("d-nonee");
        }
        else {
          $(".admintable").addClass("d-nonee");
        }
      }

    }
    else {
      $(".admintable").addClass("d-nonee");
      setTableData(tableDatafix)
    }
  }
  const change = (val, id) => {
    let user = {
      _id: id,
      status: Boolean(val)
    }
    fetch(`${API}/admin/validateProfessional`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json().then(data => {
        if (response.status == 200) {
          let temp = tableData;
          let ind = temp.findIndex(x => x._id == id);
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
      <tr key={index}>
        {/* <th scope="row">{index + 1}</th> */}
        <td> <Link to={{ pathname: "/search", state: x }} className="nav-link">{x.first_name + " " + x.last_name}</Link></td>
        <td>{x.mobile_number}</td>
        {/* <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear() }</td> */}
        <td>{x.email}</td>
        <td>{x.category}</td>
        <td>{x.status ? "Active" : (x.onboarding ? "Onboarding" : "Inactive")}</td> </tr>
    )
  })

  return (
    <>
      {getCategory()}
      <div className="AdminLiveOperation">
        <div className="row headerHeading">
          <div className="menuHeading">
            <h3 className="mt-4 mb-4"><span className="heading-1">Professional Profile</span></h3>
          </div>
        </div>

        <form>
          <div className="row form-content-liveOperation mt-2">
            <div className="col-sm-2 live-operation-div taskButton">
              <div className="form-group ">
                <input type="text" className="form-control" onKeyPress={e => name(e)} name="nameProfessional" placeholder="Enter Name" />
              </div>
            </div>
            <div className="col-sm-2 live-operation-div professionName">
              <div className="form-group ">
                <input type="text" className="form-control" onChange={e => email(e)} name="emailProfessional" placeholder="Enter Email" />
              </div>
            </div>
            <div className="col-sm-2 live-operation-div customerName">
              <div className="form-group ">
                <input type="text" className="form-control" onChange={e => phone(e)} name="phoneProfessional" placeholder="Enter Phone no." />
              </div>
            </div>
            <div className="col-sm-2 live-operation-div taskButton">
              <div className="responsive">
                <div className="form-group ">
                  <select onChange={e => status(e)} className="form-control">
                    <option value="">Type</option>
                    {/* <option value="pending">Onboarding</option>
                        <option value="approved">Documents</option>
                        <option value="reject">Activation</option>
                        <option value="reject">Incident Report</option>
                        <option value="reject">Service Request</option> */}
                    <option value="onboarding">Onboarding</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-2 live-operation-div taskButton">
                  <div className="responsive">
                    <div className="form-group ">
                      <select className="form-control">
                        <option value="">Urgency</option>
                        <option value="pending">High</option>
                        <option value="approved">Medium</option>
                        <option value="reject">Low</option>
                      </select>
                    </div> 
                  </div>
                </div> */}

            <div className="col-sm-2  orderstatus">
              <div className="responsive">
                <div class="form-group ">
                  <select class="form-control" name="catgoryProfessional">
                    <option value="">Category</option>
                    {catSelectItems()}
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-2 live-operation-div">
                   <button type="button" class="btn btn-block admin-status-btn">Search</button>
                </div> */}
          </div>
        </form>
        <div>
          <table className="table admintable text-center tableLayout mt-2 ">
            <thead>
              <tr className="tableHeading">
                <th className="admiTable-first tableHeadingColumn" scope="col">Name</th>
                <th className="tableHeadingColumn" scope="col">Contact Number</th>
                <th className="tableHeadingColumn" scope="col">Email</th>
                <th className="tableHeadingColumn" scope="col">Service Type</th>
                <th className="admiTable-last tableHeadingColumn" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? tableData.map(providerTable) :
                tableData.map((x, i) => {
                  {/* console.log(tableData) */ }
                  return (
                    <tr key={i}>
                      <td> <Link to={{ pathname: "/search", state: x }} className="nav-link">{x.first_name + " " + x.last_name}</Link></td>
                      <td>{x.mobile_number}</td>
                      <td>{x.email}</td>
                      <td>{x.category}</td>
                      <td>{x.status ? "Active" : (x.onboarding ? "Onboarding" : "Inactive")}</td> </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )

}
