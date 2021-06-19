import React from 'react';

export default function General() {
    return (
        <div className="container">
                 <div className="row mt-5">
      <div className="col-sm-12">
        <div className="border">
                <div className="header">
              <p>Personal Info</p>
          </div>

          <div className="header2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-3 paddCss">
                  <label>Name</label>
                </div>
                <div className="col-sm-8 paddCss">
                  <input type="text" name="name" className="form-control" placeholder="Type here" />
                </div>
                <div className="col-sm-3 paddCss">
                  <label>Email</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="eamil" className="form-control" name="email" placeholder="Type here" />
                </div>  
                <div className="col-sm-3 paddCss">
                    <label>Phone Number</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="Number" className="form-control" name="phone" placeholder="Type here" />
                </div>
                <div className="col-sm-3 paddCss">
                    <label>Address</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="address" placeholder="Type here" />
                </div>
               
                <div className="col-sm-3 paddCss">
                    <label>City</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="city" placeholder="Type here" />
                </div>
                <div className="col-sm-3 paddCss">
                    <label>State</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="state" placeholder="Type here" />
                </div>
                <div className="col-sm-3 paddCss">
                    <label>Country</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="country" placeholder="Type here" />
                </div>
                <div className="col-sm-3 paddCss">
                    <label>Postal code</label>
                </div>  
                <div className="col-sm-8 paddCss">
                  <input type="text" className="form-control" name="country" placeholder="Type here" />
                </div>
              </div>
              <button className="button btn1">Save</button>
              <button className="button btn1">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
        </div>
    )
}
