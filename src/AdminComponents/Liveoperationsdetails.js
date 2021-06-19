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


export default function Liveoperationsdetails() {
    const [component, setComponent] = useState('#EA4337')
    const [color1, setColor1] = useState('#EA4337')
    const [color2, setColor2] = useState('#ccc')
    const [color3, setColor3] = useState('#EA4337')
    const [color4, setColor4] = useState('')
    const [color5, setColor5] = useState('#ccc')
    const [color6, setColor6] = useState('')
    const [color7, setColor7] = useState('#ccc')
    const [color8, setColor8] = useState('')

    const [display1, setDisplay1] = useState()
    const [display2, setDisplay2] = useState('none')
    const [display3, setDisplay3] = useState('none')
    const [display4, setDisplay4] = useState('none')


    return (
        <div className="AdminLiveOperation"> 
        <div className="row headerHeading">
        <div className="menuHeading">
            <h3 className="mt-4 mb-4"><span className="heading-1">Live Operations</span></h3>
        </div>
        </div>      
      <div className="contentBorder mt-3">
        <div className="row-width row">
           <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{color:color1,boderBottomColor:color1,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid'}}>
            <button className="btn button activeclass" id="button" style={{color:color3}} onClick={()=>{setColor1('#EA4337');setColor2('#ccc');;setDisplay1('block');setDisplay2('none');setDisplay3('none');setColor4('');setColor5('#ccc');setColor3('#EA4337');setColor6('');setColor7('#ccc');setColor8('');setDisplay4('none')}}>Order Management</button>
           </div>
           <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{color:color2,boderBottomColor:color2,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid '}}>
            <button className="btn button pastclass" style={{color:color4}} onClick={()=>{setColor1('#ccc');setColor2('#EA4337');setDisplay1('none');setDisplay2('block');setDisplay3('none');setColor3(''); setColor5('#ccc');setColor4('#EA4337');setColor6('');setColor7('#ccc');setColor8('');setDisplay4('none')}}>Order Status</button>
           </div>
           <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{color:color5,boderBottomColor:color5,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid '}}>
           <button className="btn button pastclass" style={{color:color6}} onClick={()=>{setColor1('#ccc');setColor2('#ccc');setDisplay1('none');setDisplay2('none');setColor3('');setColor4('');setColor5('#EA4337');setColor6('#EA4337');setDisplay3('block');setColor7('#ccc');setColor8('#');setDisplay4('none')}}>Adjustments</button>
           </div>
           <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{color:color7,boderBottomColor:color7,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid '}}>
           <button className="btn button pastclass" style={{color:color8}} onClick={()=>{setColor1('#ccc');setColor2('#ccc');setDisplay1('none');setDisplay2('none');setDisplay3('none');setColor4('');setColor5('#ccc');setColor6('');setColor7('#EA4337');setColor8('#EA4337');setDisplay4('block')}}>Change Log</button>
           </div>
        </div>
        <hr className="activepastline"></hr>
        <div className="responsive" style={{display:display1}}>
        <div className="row mt-5">
      <div className="col-sm-12">
          <div className="header2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4 paddCss">
                  <label>Service Provider Name</label>
                </div>
                <div className="col-sm-8 paddCss">
                  <input type="text" name="" className="form-control"  />
                </div>
                <div className="col-sm-4 paddCss">
                  <label>Service</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name=""  />
                </div>  
                <div className="col-sm-4 paddCss">
                    <label>Date & Time</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Address</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <textarea type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Amount</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Customer notes</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Service Provider Notes</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Additional Amount</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss mt-5">
                    <label>Customer Name</label>
                </div>  
                <div className="col-sm-8 paddCss mt-5">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Email</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="email" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Phone Number</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="number" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                    <label>Customer Address</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="email" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                </div>  
                <div className="col-sm-3 paddCss">
                <button type="button" class="btn btn-block admin-status-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div> 
        </div>
        <div className="responsive" style={{display:display2}}>
         <div className="row mt-5">
          <div className="col-sm-12">
           <div className="header2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4 paddCss">
                  <label>Time Placed</label>
                </div>
                <div className="col-sm-8 paddCss">
                  <input type="text" name="" className="form-control"  />
                </div>
                <div className="col-sm-4 paddCss">
                  <label>Confirmed</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name=""  />
                </div>  
                <div className="col-sm-4 paddCss">
                    <label>Reschedule</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 paddCss">
                  <label>Theom Request Status</label>
                </div>
                <div className="col-sm-12  paddCss">
                <table className="table contentBorder">
                <thead>
                <tr className="tableHeading">
                <th className="table-heading-first" scope="col">Professinal Name</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td>Raghav</td>
            <td><form>
         <select className="select-action">
           <option value="accept">Accepted</option>
            <option value="reschedule">Pending</option>
            <option value="cancel">Rejected</option>
         </select>
          
         </form>
         </td>
          
         <td>
         <Button><img className="select-image img-fluid" src={saveIcon}  />
           </Button>
         </td>
            </tr>
            </tbody>
            </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 paddCss">
                  <label>Pro reach time</label>
                </div>
                <div className="col-sm-8 paddCss">
                  <input type="text" name="" className="form-control"  />
                </div>
                <div className="col-sm-4 paddCss">
                  <label>Pro end time</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name=""  />
                </div>  
                <div className="col-sm-4 paddCss">
                    <label>Extra time hold</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="" />
                </div>
                <div className="col-sm-4 paddCss">
                </div>  
                <div className="col-sm-3 paddCss">
                <button type="button" class="btn btn-block admin-status-btn">Save</button>
                </div>
              </div>
             </div>
           </div>
           <div className="table-responsive" style={{display:display3}}>
       <table className="table  tableHeading text-center">
       <thead>
      <tr className="table-heading">
      <th className="table-heading-first" scope="col">Professinal Name</th>
      <th className="table-heading-last" scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>$ 20</td>
      <td>
      <p>12:00 PM</p>
      <p>01-09-2020</p>
      </td>
      <td>Rejected</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>$ 20</td>
      <td> <p>12:00 PM</p>
      <p>01-09-2020</p></td>
      <td>Rejected</td>

    </tr>
  
   
  </tbody>
</table>
</div>
</div>
        </div>
        </div> 
        <div className="responsive" style={{display:display3}}>
        <div className="col-sm-12">
           <div className="header2">
            <div className="col-sm-12">
            <div className="row">
                 <div className="col-sm-4 paddCss">
                  <label>Amount</label>
                </div>
                <div className="col-sm-8 paddCss">
                  <input type="text" name="" className="form-control"  />
                </div>
                <div className="col-sm-4 paddCss">
                  <label>Category</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name=""  />
                </div>  
                <div className="col-sm-4 paddCss">
                    <label>Action</label>
                </div>  
                <div className="col-sm-8 ">
                <select className="select-action">
                  <option value="accept">Pay</option>
                  <option value="reschedule">Charge</option>
                 </select>
                </div>
                <div className="col-sm-4 paddCss">
                    <label></label>
                </div>  
                <div className="col-sm-2 paddCss">
                <button type="button" class="btn btn-block admin-status-btn">Save</button>
                 </div>
                 </div>
                </div>
              </div>
          </div> 
        </div> 
        <div className="resposive" style={{display:display4}}>
        <div className="row mt-5">
         <div className="col-sm-12">
          <div className="header2">
            <div className="col-sm-12">
              <div className="row">
              <textarea className="form-control textarea-search-change-log" rows="3" placeholder="Add notes" ></textarea>
               <button className="button btn btn-info col-sm-2 btn-lg mt-3 mb-5 admin-status-btn search-change-log-btn">Cancel</button>
               <button className="button btn btn-info col-sm-2 btn-lg mt-3 mb-5 admin-status-btn search-change-log-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
       </div> 
  
      </div>
      </div> 
      <div className="resposive" style={{display:display4}}>
              <div className="mt-3">
                 <h3>Previous Notes</h3>
              </div>
              <div className="contentBorder">
             <table className="table">
              <tr>
                <td>6.</td>
                <td>Order Completed</td>
                <td>Admin</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Order Status Changed</td>
                <td>Raghav</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Amount Refunded</td>
                <td>Raghav</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Customer Name Changed</td>
                <td>Raghav</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Service Provider Assigned</td>
                <td>Admin</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Order Created</td>
                <td>Admin</td>
                <td>20 Oct 2020, 12:10am</td>
              </tr>
            </table>
             </div>
              </div>
    </div>
    )
}
