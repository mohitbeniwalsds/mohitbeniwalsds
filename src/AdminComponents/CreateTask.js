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
import CKEditor from 'ckeditor4-react';



export default class CreateTask extends React.Component {

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
  }
  render() {
    return (
        <div className="AdminContainer"> 
          <div className="row headerHeading">
          <div className="menuHeading">
              <h3 className="mt-4 mb-4"><span className="heading-1">Create Task</span></h3>
          </div>
        </div>

        <div className="adminBodyArea">
          <form>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-12">
                    <div class="form-group">
                    <label>Email*</label>
                        <input className="form-control" type="email" name="email" placeholder="" onChange={this.handleChange} />
                    </div> 
               </div>
            </div>
            <div className="row">
              <div className="col-sm-4 ">
                  <div class="form-group ">
                  <label>Name</label>

                  <input className="form-control" type="text" name="name" onChange={this.handleChange} placeholder="" />

                </div>
              </div>
              <div className="col-sm-4 ">
                  <div class="form-group ">
                  <label>Date & Time</label>

                  <input className="form-control" type="datetime-local" name="date" placeholder="" onChange={this.handleChange}/>

                  </div> 
              </div>
              
              <div className="col-sm-4">
                  <div class="form-group ">
                  <label>Task No.</label>

                <input className="form-control" type="number" name="task_number" onChange={this.handleChange} placeholder=""/>

                  </div> 
                 </div>
            </div>
              <div className="row mt-4">
                <div className="col-sm-3">
                  <div class="form-group ">
                    <select class="form-control" onChange={this.handleChange}>
                      <option value="">Type</option>
                      <option value="general">General</option>
                      <option value="incident">Incident</option>
                      <option value="onboarding">Onboarding</option>

                    </select>
                  </div> 
                 </div>
                <div className="col-sm-3">
                  <div class="form-group ">
                    <select class="form-control" onChange={this.handleChange}>
                      <option value="">Priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>

                    </select>
                 </div>
                </div>
                <div className="col-sm-3">
                  <div class="form-group ">
                    <select class="form-control" onChange={this.handleChange}>
                      <option value="">Assign</option>
                      <option value="admin1">Admin1</option>
                      <option value="admin2">Admin2</option>
                      <option value="admin3">Admin3</option>

                    </select>
                 </div>
 
              </div>
              <div className="col-sm-3">
                  <div class="form-group ">
                    <select class="form-control" onChange={this.handleChange}>
                      <option value="">Status*</option>
                      <option value="open">Open</option>
                      <option value="close">Close</option>

                    </select>
                 </div>
              </div>
              </div>
              <div className="row mt-4">
              <div className="col-sm-12">
              <label>Notes*</label>
              <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                />
                {/* <textarea className=" form-control" onChange={this.handleChange}></textarea> */}
                </div>
             </div>
             <div className="row mt-4">
              <div className="col-sm-2">
               <button type="button" className="btn btn-block btn-primary create-task-btn">Create/save</button>                </div>
              <div className="col-sm-2">
              <button type="button" className="btn btn-block btn-primary create-task-btn">Cancel</button>
              </div>
             </div>
          </form>
          </div>
        </div>
      )
  }
}
