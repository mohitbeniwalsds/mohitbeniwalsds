import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import service5 from '../assets/homepage/service1.png';
import { Star as AddIcon } from '@material-ui/icons';
import Showreview from "../review/Showreview";
import ORDERCOMPLETED from '../assets/Icons/ORDER-COMPLETED.png';
import EARNING from '../assets/Icons/EARNING.png';
import POINTS from '../assets/Icons/POINT.png';
import saveIcon from '../assets/Icons/save.png';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Dashboard(props) {
  const providerData = JSON.parse(sessionStorage.getItem("providerData"))


  const getSelection = (e) => {
    console.log(e.target.value)
    console.log(providerData)
  }



  return (
    <div className="container">
      <h3 className="welcome mt-3"> Welcome {providerData ? providerData.first_name + ' ' + providerData.last_name : ""}</h3>
      <p>Lorem Ipsum is simply dummy text of the printing </p>
      <div className="row-width row mt-5">
        <div className="dashboard-colunm-left  col-xs-4  col-sm-4 col-md-4">
          <div className="earnig_image">
            <img className="ordercomplete-image img-fluid" src={ORDERCOMPLETED} />
            <h4 className="order-complete">Order Complete
             <span className="number-style">08</span></h4>
          </div>
        </div>
        <div className="dashboard-colunm-center col-xs-4 col-sm-4 col-md-4">
          <div className="earnig_image">
            <img className="review-image img-fluid" src={EARNING} />
            <h5 className="order-complete">Last Week Earning
                <span className="number-style"> $ 2200</span>
            </h5>
          </div>
        </div>
        <div className="dashboard-colunm-right col-xs-4 col-sm-4 col-md-4">
          <div className="earnig_image">
            <img className="review-image img-fluid" src={POINTS} />
            <h5 className="order-complete">Points
                <span className="number-style">200</span>
            </h5>
          </div>
        </div>
      </div>
      <h3 className="mt-5 mb-4"><span className="heading-1">PENDING</span>&nbsp;<span className="heading-2">ORDERS</span></h3>
      <div className="table-responsive">
        <table className="table  table-bordered text-center">
          <thead>
            <tr className="table-heading">
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Service Name</th>
              <th scope="col">$ Amount</th>
              <th scope="col">Order Time & Date</th>
              <th className="table-heading-last" scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <form>
                  <select className="select-action" onChange={(e) => getSelection(e)}>
                    <option value="accept">Accept</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="cancel">Cancel</option>
                  </select>
                  <Button><img className="select-image img-fluid" src={saveIcon} />
                  </Button>
                  <Button><i class="fa fa-eye" aria-hidden="true"></i>
                  </Button>
                </form>
              </td>


            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>
                <form>
                  <select className="select-action">
                    <option value="accept">Accept</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="cancel">Cancel</option>
                  </select>
                  <Button><img className="select-image img-fluid" src={saveIcon} />
                  </Button>
                  <Button><i class="fa fa-eye" aria-hidden="true"></i>
                  </Button>
                </form>
              </td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <form>
                  <select className="select-action">
                    <option value="accept">Accept</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="cancel">Cancel</option>
                  </select>
                  <Button><img className="select-image img-fluid" src={saveIcon} />
                  </Button>
                  <Button><i class="fa fa-eye" aria-hidden="true"></i>
                  </Button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="col-12 view">
          <Link to=""	>View All</Link>
        </div>
      </div>
      <h3 className="mt-5 mb-4"><span className="heading-1">UPCOMING</span>&nbsp;<span className="heading-2">ORDERS</span></h3>
      <div className="table-responsive">
        <table className="table  table-bordered text-center">
          <thead>
            <tr className="table-heading" >
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Service Name</th>
              <th scope="col">$ Amount</th>
              <th className="table-heading-last" scope="col">Order Time & Date</th>
              <th className="table-heading-last" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Button><i class="fa fa-eye" aria-hidden="true"></i>
              </Button></td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><Button><i class="fa fa-eye" aria-hidden="true"></i>
              </Button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td><Button><i class="fa fa-eye" aria-hidden="true"></i>
              </Button></td>

            </tr>
          </tbody>
        </table>
        <div class="col-12 view">
          <Link to=""	>View All</Link>
        </div>
      </div>
      <div>
        <h3 className="mt-5 mb-4"><span className="heading-1">REVIEWS</span></h3>
        <div className=" row-width  reviews row">
          <div className=" col-xs-12  col-sm-12 col-md-12">
            <div className="user_image">
              <img className="review-image img-fluid" src={service5} />
              <h4 className="reviewer-name">Shaurabh
                <span className="review">Lorem Ipsum is simply dummy text of the printing </span>
                <p><span class="star"><Showreview /></span> <span class="ml-2">5/5</span> <span class="ml-5">01-09-2020 at 23:00</span></p>
              </h4>
            </div>
            <hr></hr>
            <div className="user_image">
              <img className="review-image img-fluid" src={service5} />
              <h4 className="reviewer-name">Shaurabh
                <span className="review">Lorem Ipsum is simply dummy text of the printing </span>
                <p><span class="star"><Showreview /></span> <span class="ml-2">5/5</span> <span class="ml-5">01-09-2020 at 23:00</span></p>
              </h4>
            </div>

          </div>
        </div>
      </div>
      <div class="col-12 view mt-3">
        <Link to=""	>View All</Link>
      </div>
    </div>
  );
}
