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
import $ from 'jquery';

export default function NewTask() {

  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [value, setValue] = useState({});
   const  [count, setcount] = useState(false);
  const  [redirect, setredirect] = useState(false);
  useEffect(() => {
    async function providerDetails(){
       if(!count){
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
            data.map((e)=>tableData.push(e))
            data.map((e)=>tableDatafix.push(e))
            console.log(tableData)
            setcount(true)
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
    }

    providerDetails();
    },[]);
    
    const email = (data)=>{
    if(data.target.value.length>0){
      if(tableData.length){
  let find = tableData.filter(x=>x.email.toLowerCase().search(data.target.value.toLowerCase())>=0)
    setTableData(find)
    if(find.length>0){
     $(".admintable").removeClass("d-nonee");
    }
    else{
     $(".admintable").addClass("d-nonee");
    }
      }
    console.log(tableData)
    }
    else{
      $(".admintable").addClass("d-nonee");
      setTableData(tableDatafix)
    }
}
    
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
            console.log(data)
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
      <tr key ={index}>
        <td> <Link to={{ pathname: "/newAdmin/createtask", state: x }}  className="nav-link">{x.first_name+" "+x.last_name}</Link></td>
        <td>{x.email}</td>
        <td>{x.mobile_number}</td>
        <td>{x.status?"Active":(x.onboarding?"Onboarding":"Inactive")}</td> </tr>
    )})

    return (
        <div className="AdminContainer"> 
          <div className="row headerHeading">
          <div className="menuHeading">
              <h3 className="mt-4 mb-4"><span className="heading-1">Create Task</span></h3>
          </div>
        </div>

        <div className="">
          <form>
            <div className="row mt-2">
               <div className="col-sm-6 col-md-6">
                    <div class="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Professional Email"  onChange={e => email(e)}/>
                    </div> 
               </div>
              
              <div className="col-sm-2 taskButton">
                <button type="button" className="btn btn-block admin-status-btn">Search</button>
              </div>
              
            </div>
          </form>

          <table id="datatable" className="table text-center tableLayout mt-2" >
            <thead>
              <tr className="tableHeading">
                <th className="admiTable-first tableHeadingColumn" scope="col"> Name</th>
                <th className="tableHeadingColumn" scope="col">Email</th>
                <th className="tableHeadingColumn" scope="col">Contact Number</th>
                <th className="admiTable-last tableHeadingColumn" scope="col">Status</th>
              </tr>
            </thead>
              {/* <tr>
                
                <td>
                  <Link to="/newAdmin/createtask" className="nav-link">Yash</Link>
                  </td>
                <td>yash@gmail.com</td>
                <td>1232123456</td>
                <td>Inactive</td>
              </tr> */}
               {tableData.length>0?tableData.map(providerTable):
                tableData.map((x,i)=>{
                  {/* console.log(tableData) */}
                      return (
                        <tr key ={i}>
                          <td> <Link to={{ pathname: "/search", state: x }}  className="nav-link">{x.first_name+" "+x.last_name}</Link></td>
                          <td>{x.mobile_number}</td>
                          <td>{x.email}</td>
                          <td>{x.category}</td>
                          <td>{x.status?"Active":(x.onboarding?"Onboarding":"Inactive")}</td> </tr>
                      )})}
            </table>
          </div>
        </div>
      )
  }
