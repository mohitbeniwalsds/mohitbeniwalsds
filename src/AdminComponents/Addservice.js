import React,{useState} from 'react';
import  './Admin.css';

export default function Addservice() {
    

  return (
    <div className="AdminLiveOperation">  
    <div className="row headerHeading">  
    <div className="menuHeading">        
        <h3 className="mt-4 mb-4"><span className="heading-1">Add Service</span></h3>
     </div>
     </div>
    <div className="container">
      <div className="contentBorder mt-5">
        <div className="row-width row ">
        <div className="header2">
            <div className="col-sm-12">
                <div className="row">
            
                    <div className="col-sm-3 paddCss">
                        <label>Name of the Service</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                        <input type="text" name="service_name" className="form-control col-sm-8" placeholder="Type here" />
                    </div>
                    <div className="col-sm-3 paddCss">
                        <label>Type</label>
                    </div>  
                    <div className="col-sm-8 paddCss">
                        <select className="form-control col-sm-8"  name="category_name">
                            <option value="">Select any one</option>
                            <option value="Commision">Commision</option>
                            <option value="Leading">Leading</option>
                        </select>
                    </div>
                    <div className="col-sm-3 paddCss">
                        <label>Sub Category</label>
                    </div>  
                    <div className="col-sm-8 paddCss">
                        <select type="text" className="form-control col-sm-8" name="category_name" placeholder="If any" />
                    </div>                
                </div>
            </div>
        </div>
        </div>
      </div>
      <div className="col-sm-4 paddCss">
        <button className="button admin-status-btn saveServiceButton">Save</button>
      </div> 
    </div>
    </div>
  );
}
