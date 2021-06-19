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

export default function Dashbaord() {

  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [count, setcount] = useState(false);
  const [value, setValue] = useState();
  const [redirect, setredirect] = useState(false);
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
              setTableData(data)
              setcount(true)
              // localStorage.setItem("adminprofessional",{
              //   data: data
              // })
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
          // .catch(err => toast.error("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, [tableData]);

  const redirected = () => {
    return <Redirect to={{
      pathname: "/show_documents/",
      state: { id: value }
    }} />
  }
  const clicked = (id) => {
    alert(id)
    setValue(id)
    setredirect(true)
    redirected()
  }
  const change = (val, id) => {
    let user = {
      _id: id,
      status: Boolean(val)
    }

    console.log(Boolean(val))
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
          let nd = []
          temp.map((e) => {
            let sum = false
            if (e._id == id) {
              sum = true
            }
            else if (sum == false) {
              nd.push(e)
            }
          })
          // let ind = temp.findIndex(x => x._id == id);
          // let y = temp.splice(ind + 1);
          setTableData(nd)
          console.log(nd)
          console.log(tableData)
        } else {
          toast.error("Ooops!! Updation Failed .");
        }
      })
      )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
  }
  const providerTable = ((x, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{x.first_name}</td>
        <td>{x.last_name}</td>
        <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear()}</td>
        <td>
          <form>
            <select onChange={e => change(e.target.value, x._id)} className="select-action">
              <option >Select</option>
              <option value="true">Accept</option>
              <option value="">Reject</option>
            </select>
            <span className="docsImage">
              <img className="select-image img-fluid" src={saveIcon} onClick={e => clicked(x._id)} /></span>
          </form>
        </td>


      </tr>
    )
  })

  return (
    <div className="AdminContainer">
      <div>
        <h3 className="welcome mt-3"> Welcome, Raghav Sharma</h3>
      </div>

      <h3 className="mt-5 mb-2"><span className="heading-1">User </span>&nbsp;<span className="heading-2">Management</span></h3>

      <table className="table  table-bordered text-center">
        <thead>
          <tr className="table-heading">
            <th className="table-heading-first" scope="col">S.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last name</th>
            <th scope="col">Order Time & Date</th>
            <th className="table-heading-last" scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? tableData.map(providerTable) : ""}
        </tbody>
      </table>
    </div>
  )
}
