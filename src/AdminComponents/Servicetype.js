import React from 'react';
import Button from '@material-ui/core/Button';
import saveIcon from '../assets/Icons/save.png';
import editIcon from '../assets/Icons/edit.png';


export default function Servicetype() {

    return (
        <div className="AdminLiveOperation">  
        <div className="row headerHeading">  
        <div className="menuHeading">        
            <h3 className="mt-4 mb-4"><span className="heading-1">Service Type</span></h3>
         </div>
         </div>
            <form>
            <div className="row mt-2">
                <div className="col-sm-3">
                <div class="form-group ">
                   <input type="text" className="form-control" name="category" placeholder="Enter Category" />
                 </div>
                </div>
                <div className="col-sm-3">
                 <div class="form-group ">
                    <input type="text" className="form-control" name="sub_category" placeholder="Enter Sub Category" />
                  </div>
                </div>
                <div className="col-sm-2">
                   <button type="button" class="btn btn-block admin-status-btn">Search</button>
                </div>
            </div>
           </form>
           <div className="contentBorder">
           <div className="">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-3 adminServiceType">
                      <label>Name of the Service</label>
                    </div>
                    <div className="col-sm-3 paddCssService">
                      <input type="text" name="name" className="form-control" placeholder="Carpet Cleaning" />
                    </div>
                    <div className="col-sm-2 paddCssService">
                    <div class="form-group ">
                      <select class="form-control">
                        <option value="">Order</option>
                        <option value="pending">Request</option>
                       </select>
                     </div>
                   </div>
                   <div className="col-sm-3 imageUploadService">
                   <Button><img title="upload" className="select-image img-fluid" src={saveIcon}  />
                   </Button>                  
                     </div>
                   </div>
                </div>
             </div>
            </div>
           <div className="contentBorder mt-4">
           {/* <div className="row-width row">
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
            <button className="btn button activeclass" id="button">Order Price</button>
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button className="btn button pastclass" >Theom Points</button>
           </div>
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
           <button className="btn button pastclass"> <Button><img className="select-image img-fluid" src={saveIcon}  />
                   </Button></button>
           </div>
        </div> */}
        {/* <hr className="activepastline"></hr> */}
        <div className="responsive serice-type-table">
          <table className="table">
            <thead>
              <th>Order Price </th>
              <th>Theom Points</th>
              <th><button className="btn-service-type">
                    <img title="upload" className="select-image img-fluid" src={saveIcon}  />
                  </button>
                  <button className="btn-service-type">
                  <img title="edit" className="select-image img-fluid edit-questionnair" src={editIcon}  /></button>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>0-100</td>
                <td colspan="2">200</td>
              </tr>
              <tr>
                <td>100-500</td>
                <td colspan="2">800</td>
              </tr>
              <tr>
                <td>500-1000</td>
                <td colspan="2">1000</td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
    </div>
    )
}
