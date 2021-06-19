import React,{useState} from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export default function Account() {
        const [color, setColor] = useState('Earnings')
        const [component1, setComponent1] = useState('Summary')
        const [component, setComponent] = useState('dailyupdate')


  return (
  <div className="container">
        <h1 className="mt-5 mb-5"><span className="heading-1">ACCOUNT</span>&nbsp;<span className="heading-2">MANAGEMENT</span></h1>
       <div className="row-width row mt-5">
        <div className="col-sm-12 col-md-12">
    <div className="row" >
      <div className="col-sm-12">
        <div className="borderP">
          <div className="header">
              <p>Location Preferences</p>
          </div>
          <div className="header2 paddCss1">
              <label>Want to add another zone? Request here</label>
              <div className="row">
              <div className="col-sm-1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </div> 
              <div className="4">
                <label>North-West</label>
                </div>
              </div>

              <div className="row">
              <div className="col-sm-1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </div> 
              <div className="4">
                <label>North-East</label>
                </div>
              </div>

                  <div className="row">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                  </div> 
                  <div className="4">
                    <label>South-West</label>
                    </div>
                  </div>
                <div className="row">
                <div className="col-sm-1">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                </div> 
                <div className="4">
                  <label>South-East</label>
                  </div>
              </div>
           <div className="row">
           <div className="col-sm-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
           </div> 
           <div className="4">
            <label>Any where in name of city</label>
            </div>
           </div>
            <button className="button btn1">Request</button>
          </div>
        </div>
      </div>
    </div>
        

    <div className="row mt-5">
      <div className="col-sm-12">
        <div className="borderP">
          <div className="header">
              <p>Manage Notifications</p>
          </div>
          <div className="header2 paddCss1">
          <div className="row">
           <div className="col-sm-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
           </div> 
           <div className="4">
            <label>Email about new job*</label>
            </div>
           </div>

           <div className="row">
           <div className="col-sm-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
           </div> 
           <div className="4">
            <label>Text new job (Charges may apply)</label>
            </div>
           </div>

           <div className="row">
           <div className="col-sm-1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
           </div> 
           <div className="4">
            <label>New Offers/Promotions</label>
            </div>
           </div>
           
            <button className="button btn1">Save</button>
          </div>
        </div>
      </div>
    </div>


    <div className="row mt-5">
      <div className="col-sm-12">
        <div className="borderP">
                <div className="header">
              <p>Bank Details</p>
          </div>

          <div className="header2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6 paddCss">
                  <label>Transit Number</label>
                </div>
                <div className="col-sm-6 paddCss">
                  <input type="text" name="" className="form-control" placeholder="5 digits" />
                </div>
                <div className="col-sm-6 paddCss">
                  <label>Financial institution number</label>
                </div>  
                <div className="col-sm-6 paddCss">
                  <input type="text" className="form-control" name="" placeholder="3 digits" />
                </div>  
                <div className="col-sm-6 paddCss">
                    <label>Account number</label>
                </div>  
                <div className="col-sm-6 paddCss">
                  <input type="text" className="form-control" name="" placeholder="Upto 12 digits" />
                </div>
              </div>
              <button className="button btn1">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
      </div>
  </div>
  );
}
