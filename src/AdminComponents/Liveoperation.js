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
import { Link } from 'react-router-dom'
import $ from 'jquery';


export default function Liveoperation() {

  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState({});
  const [tableDatafix, setTableDatafix] = useState([]);
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(false);
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
    providerDetails()
  }, [tableDatafix, tableData, adminData]);

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

  //   const catSelectItems =function() {
  //     if(categorys && categorys.length>0){
  //     let items = [];         
  //     for (let i = 0; i <categorys.length; i++) {             
  //        items.push(<option key={i} value={categorys[i].category}>{categorys[i].category}</option>);   
  //        //here I will be creating my options dynamically based on
  //        //what props are currently passed to the parent component
  //     }
  //     return items;
  //   }
  // }
  const name = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let input = data.target.value
        console.log(input)
        let find = tableData.filter(x => (x.first_name + x.last_name).toLowerCase().search(data.target.value.replace(/ /g, "").toLowerCase()) >= 0 || x.first_name.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
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
  const service = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => x.first_name.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
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
  const ordernumber = (data) => {
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
        case 'pending':
          onboarding = true;
          break;
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
  const change = (val, id) => {
    let user = {
      _id: id,
      status: Boolean(val)
    }
    debugger
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



  // const providerTable = ((x, index) => {
  //   return (
  //     <tr key ={index}>
  //       <th scope="row">{index + 1}</th>
  //       <td>{x.first_name}</td>
  //       <td>{x.last_name}</td>
  //       <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear() }</td>
  //       <td>
  //         <form> 
  //           <select onChange={e => change(e.target.value,x._id)} className="select-action">
  //           {/* <option value="">Select</option> */}
  //             <option value="true">Approved</option>
  //             <option value="false">Reject</option>
  //           </select>
  //           <span className="docsImage">
  //             <img className="select-image img-fluid" src={saveIcon} onClick={e => clicked(x)}/></span>
  //         </form>
  //       </td>


  //     </tr>
  //   )})
  const providerTable = ((x, index) => {
    return (
      <tr key={index}>
        {/* <th scope="row">{index + 1}</th> */}
        <td>{x.mobile_number}</td>
        <td>{x.category}</td>
        <td> <Link to={{ pathname: "/search", state: x }} className="nav-link">{x.first_name + " " + x.last_name}</Link></td>
        <td> <Link to={{ pathname: "/search", state: x }} className="nav-link">{x.first_name + " " + x.last_name}</Link></td>

        {/* <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear() }</td> */}
        <td>{x.status ? "Active" : (x.onboarding ? "Onboarding" : "Inactive")}</td> </tr>
    )
  })

  return (
    <div className="AdminLiveOperation">
      <div className="row headerHeading">
        <div className="menuHeading">
          <h3 className="mt-4 mb-4"><span className="heading-1">Live Operations</span></h3>
        </div>
      </div>

      <form>
        <div className="row form-content-liveOperation mt-2">
          <div className="col-sm-2 live-operation-div taskButton">
            <div class="form-group ">
              <input type="text" className="form-control" name="order_no" onChange={e => ordernumber(e)} name="nameProfessional" placeholder="Order no." />
            </div>
          </div>
          <div className="col-sm-2  orderstatus">
            <div className="responsive">
              <div class="form-group ">
                <select class="form-control" onChange={e => status(e)}>
                  <option value="">Order Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="reject">Reject</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-3 live-operation-div professionName">
            <div class="form-group ">
              <input type="text" className="form-control" name="professional_name" placeholder="Professional Name" onChange={e => name(e)} />
            </div>
          </div>
          <div className="col-sm-3 live-operation-div customerName">
            <div class="form-group ">
              <input type="text" className="form-control" name="customer_name" placeholder="Customer Name" onChange={e => name(e)} />
            </div>
          </div>
          <div className="col-sm-3 live-operation-div serviceType">
            <div class="form-group ">
              <input type="text" className="form-control" name="service_type" placeholder="Service Type" onChange={e => service(e)} />
            </div>
          </div>
          <div className="col-sm-3 live-operation-div contactNo">
            <div class="form-group ">
              <input type="text" className="form-control" name="contact_no" placeholder="Contact No." onChange={e => ordernumber(e)} />
            </div>
          </div>
          {/* <div className="col-sm-2 live-operation-div">
                   <button type="button" class="btn btn-block admin-status-btn">Search</button>
                </div> */}
        </div>
      </form>

      <table className="table admintable text-center tableLayout mt-2">
        <thead>
          <tr className="tableHeading">
            <th className="admiTable-first tableHeadingColumn" scope="col">Order no.</th>
            <th className="tableHeadingColumn" scope="col">Name of Service</th>
            <th className="tableHeadingColumn" scope="col">Professional Name</th>
            <th className="tableHeadingColumn" scope="col">Customer Name</th>
            <th className="admiTable-last tableHeadingColumn" scope="col">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? tableData.map(providerTable) : tableData.map((x, i) => {
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
  )
}
