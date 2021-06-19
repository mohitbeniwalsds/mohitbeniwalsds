import React,{useState} from 'react';
import Availability from './StatusAvailability';
import  './Admin.css';
import { ToastContainer, toast } from 'react-toastify';
import { API } from "../backend";

export default function Booking() {
  let user,x;
  
    const [component, setComponent] = useState('#EA4337')
        const [color1, setColor1] = useState('#EA4337')
        const [color2, setColor2] = useState('#ccc')
        const [color3, setColor3] = useState('#EA4337')
        const [color4, setColor4] = useState('')
        const [color5, setColor5] = useState('#ccc')
        const [color6, setColor6] = useState('')

        const [display1, setDisplay1] = useState()
        const [display2, setDisplay2] = useState('none')
        const [display3, setDisplay3] = useState('none')
        const getcurrentlyClicked = (() => {
          x = JSON.parse(localStorage.getItem('currentlyClicked'));
          });
        const change = (val,id) => {
          if(val == "Onboarding"){
             user = { 
              _id:id,
              status:false,
              onboarding:true
            }
          }
          else{
           user = { 
            _id:id,
            status:val == 'true'?true:false
          }
        }
      }
      const clicked = function(x){
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
            // let temp = tableData;
          //  let ind = temp.findIndex(x=>x._id ==id);
          //  temp.splice(ind, 1);
          //  setTableData(temp)
          console.log(data)
          alert("Done!!")
          }
          else {
          alert("Ooops!! Updation Failed .");
          }
        })
        )
        .catch(err => toast.error("Ooops!! Something went wrong."));
  
      }
  return (
    <>
    {getcurrentlyClicked()}
    <div className="container status-content">
      <div className="contentBorder">
        <div className="row-width row">
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{color:color1,boderBottomColor:color1,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid'}}>
            <button className="btn button activeclass" id="button" style={{color:color3}} onClick={()=>{setColor1('#EA4337');setColor2('#ccc');setDisplay1('block');setDisplay2('none');setDisplay3('none');setColor4('');setColor5('#ccc');setColor3('#EA4337');setColor6('')}}>Account Status</button>
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{color:color2,boderBottomColor:color2,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid '}}>
            <button className="btn button pastclass" style={{color:color4}} onClick={()=>{setColor1('#ccc');setColor2('#EA4337');setDisplay1('none');setDisplay2('block');setDisplay3('none');setColor3(''); setColor5('#ccc');setColor4('#EA4337');setColor6('')}}>Availability</button>
           </div>
        </div>
        <hr className="activepastline"></hr>
        <div className="responsive" style={{display:display1}}>
          <div class="form-group ">
              <select class="form-control status-active-select" onChange={e => change(e.target.value,x._id)}>
                <option value="true">Active</option>
                <option value="Onboarding">Onboarding</option>
                <option value="false">Inactive</option>
              </select>
          </div> 
        </div>
        <div className="responsive" style={{display:display2}}>
          <Availability/>
        </div> 
      </div> 
      
      <div className="bottom-status">
        <div className="row mt-3">
          <div className="col-sm-2">
            <button className="button admin-status-btn" onClick={clicked}>Save</button>
          </div>
          {/* <div className="col-sm-2">
            <button className="button admin-status-btn">Edit</button>
          </div>
          <div className="col-sm-2">
            <button className="button admin-status-btn">Cancel</button>
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
  
}
