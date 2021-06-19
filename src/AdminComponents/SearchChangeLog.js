import React,{useState} from 'react';
import  './Admin.css';

export default function SearchChangeLog() {

  return (
    <div className="container status-content">
      <div>
        <textarea className="form-control textarea-search-change-log" rows="3" placeholder="Add notes" ></textarea>
        <button className="button btn btn-info col-sm-2 btn-lg mt-3 mb-5 admin-status-btn search-change-log-btn">Cancel</button>
        <button className="button btn btn-info col-sm-2 btn-lg mt-3 mb-5 admin-status-btn search-change-log-btn">Save</button>
      </div>
      <div className="heading-change-log">
        <h3>Previous Notes</h3>
      </div>
        <div className="contentBorder">
          <div>
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
  );
}
