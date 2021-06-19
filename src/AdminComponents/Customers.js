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

export default function Customers() {
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const  [count, setcount] = useState(false);
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
            
            data.map((e)=> tableData.push(e))
            data.map((e)=> tableDatafix.push(e))
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
  },[])
    const name = (data)=>{
      if(data.target.value.length>0){
        if(tableData.length){
    let find = tableData.filter(x=>(x.first_name + x.last_name).toLowerCase().search(data.target.value.replace(/ /g, "").toLowerCase()) >= 0 || x.last_name.toLowerCase().search(data.target.value.toLowerCase())>=0)
       setTableData(find)
       if(find.length>0){
        $(".admintable").removeClass("d-nonee");
        console.log(find)
       }
       else{
        $(".admintable").addClass("d-nonee");
       }
        }
      }
      else{
        $(".admintable").addClass("d-nonee");
        setTableData(tableDatafix)
      }
  }
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
const phone = (data)=>{
  if(data.target.value.length>0){
    if(tableData.length){
let find = tableData.filter(x=>x.mobile_number.toString().search(data.target.value)>=0)
  setTableData(find)
  if(find.length>0){
   $(".admintable").removeClass("d-nonee");
  }
  else{
   $(".admintable").addClass("d-nonee");
  }
    }
 
  }
  else{
    $(".admintable").addClass("d-nonee");
    setTableData(tableDatafix)
  }
}
  
const providerTable = ((x, index) => {
  return (
    <tr key ={index}>
      <td>{x.mobile_number}</td>
      <td>{x.category}</td>
      <td> <Link to={{ pathname: "/search", state: x }}  className="nav-link">{x.first_name+" "+x.last_name}</Link></td>
      <td> <Link to={{ pathname: "/search", state: x }}  className="nav-link">{x.first_name+" "+x.last_name}</Link></td>
      <td>{x.status?"Active":(x.onboarding?"Onboarding":"Inactive")}</td> </tr>
  )})

    return (
        <div className="AdminLiveOperation">  
        <div className="row headerHeading">  
        <div className="menuHeading">        
            <h3 className="mt-4 mb-4"><span className="heading-1">Customers</span></h3>
         </div>
         </div>
            <form>
            <div className="row mt-2">
         
                <div className="col-sm-2">
                <div class="form-group ">
                   <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={e => name(e)}/>
                 </div>
                </div>
                <div className="col-sm-4">
                 <div class="form-group ">
                    <input type="email" className="form-control" name="email" placeholder="Enter Email" onChange={e => email(e)}/>
                  </div>
                </div>
                <div className="col-sm-3">
                <div class="form-group ">
                    <input type="text" className="form-control" name="mobile_number" placeholder="Enter Phone no." onChange={e => phone(e)}/>
                  </div>
                </div>
                
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
                {tableData.length>0?tableData.map(providerTable): ""}
              </tbody>
          </table>
        </div>
    )
}
