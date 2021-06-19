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
import './Admin.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import $ from 'jquery';

export default function Review() {

  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [value, setValue] = useState({});
  const [count, setcount] = useState(false);
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
              data.map((e) => tableData.push(e))
              data.map((e) => tableDatafix.push(e))
              console.log(tableData)
              setcount(true)
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
  }, []);

  const name = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => x.first_name.toLowerCase().search(data.target.value.toLowerCase()) >= 0 || x.last_name.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
        setTableData(find)
        if (find.length > 0) {
          $(".admintable").removeClass("d-nonee");
          console.log(find)
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
       
        case 'approved':
          status = true;
          break;
        case 'reject':
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

  const redirected = () => {
    if (redirect)
      return <Redirect to={{
        pathname: "/show_documents/",
        state: { id: value }
      }} />
  }
  const clicked = (id) => {
    setValue(id)
    setredirect(true)
  }
  const change = (val, id) => {
    let user = {
      _id: id,
      status: Boolean(val)
    }
    console.log(user)
    // debugger
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
          console.log(data)
          toast.success("Saved successfully");
          // let nd = []
          // temp.map((e) => {
          //   let sum = false
          //   if (e._id == id) {
          //     sum = true
          //   }
          //   else if (sum == false) {
          //     nd.push(e)
          //   }
          // })
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
        <th scope="row">{index + 1}</th>
        <td> <Link to={{ pathname: "/", state: x }} className="nav-link">{x.first_name + " " + x.last_name}</Link></td>
        <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear()}</td>
        <td>Approved</td>
        <td>Lorem Ipsum is simply dummy text</td>
        <td>
          <form>
            <select onChange={e => change(e.target.value, x._id)} className="select-action">
            <option >select</option>
              <option value="true">Approved</option>
              <option value="">Reject</option>
            </select>
            <span className="docsImage">
              <img className="select-image img-fluid" src={saveIcon} onClick={(e) => clicked(x)} /></span>
          </form>
        </td>


      </tr>
    )
  })

  return (
    <div className="AdminContainer">
    {/* <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        /> */}
      <div className="row headerHeading">
        <div className="menuHeading">
          <h3 className="mt-4 mb-4"><span className="heading-1">Reviews</span></h3>
        </div>
      </div>

      <form>
        <div className="row mt-2">
          <div className="col-sm-2">
            <div class="form-group ">
              <input type="text" className="form-control" name="order_no" placeholder="Order no." onChange={e => phone(e)} />
            </div>
          </div>
          <div className="col-sm-3">
            <div class="form-group ">
              <input type="text" className="form-control" name="professional_name" placeholder="Professional Name" onChange={e => name(e)} />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="responsive">
              <div class="form-group ">
                <select class="form-control" onChange={e => status(e)}>
                  <option value="">Status</option>
                  <option value="approved">Approved</option>
                  <option value="reject">Reject</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="responsive">
              <div class="form-group ">
                <select class="form-control" onChange={e => status(e)}>
                  <option value="">Type</option>
                  <option value="pending">One Star</option>
                  <option value="approved">Two Star</option>
                  <option value="reject">Three Star</option>
                  <option value="reject">Four Star</option>
                  <option value="reject">Five Star</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-2">
                <button type="button" class="btn btn-block admin-status-btn">Search</button>
              </div> */}
        </div>
      </form>
      <div className="tableRadius">
        <table className="table  text-center tableLayout">
          <thead>
            <tr className="tableHeading">
              <th className="admiTable-first tableHeadingColumn" scope="col">Order no.</th>
              <th className="tableHeadingColumn" scope="col">Professional Name</th>
              <th className="tableHeadingColumn" scope="col">Status</th>
              <th className="tableHeadingColumn" scope="col">Type</th>
              <th className="tableHeadingColumn" scope="col">Comment</th>
              <th className="admiTable-last tableHeadingColumn" scope="col">Action</th>
            </tr>
          </thead>
          {/* <tr>
                <td>
                  <Link to="/" className="nav-link">1</Link>
                </td>
                <td>
                  <Link to="/adminDasboard" className="nav-link">Yash</Link>
                  </td>
                <td>Approved</td>
                <td>Possitive</td>
                <td>Lorem Ipsum is simply dummy text</td>
                <td>
                  <form>
                    <select className="select-action">
                      <option value="accept">Approve</option>
                      <option value="reschedule">Reject</option>
                    </select>
                    <Button><img className="select-image img-fluid" src={saveIcon} /> </Button>
                  </form>
                </td>
              </tr> */}
          {tableData.length > 0 ? tableData.map(providerTable) : ""}
        </table>
      </div>
    </div>
  )
}
