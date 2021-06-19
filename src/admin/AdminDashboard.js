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
import AdminDashboard from './AdminDashboard.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
export default function Dashboard(props) {
  // const [state, setState] = React.useState({
  //   columns: [
  //     { title: 'Name', field: 'name' },
  //     { title: 'Email', field: 'email' },
  //     { title: 'Mobile Number', field: 'mobileNumber', type: 'numeric' },
  //     { title: 'Revenue Generated',field: 'revenue' },
  //   ],
  //   data: [
  //     { name: 'Mehmet', email: 'Yash', mobileNumber: 1987, revenue: 63 },
  //     {
  //       name: 'Zerya Betül',
  //       email: 'Baran',
  //       mobileNumber: 2017,
  //       revenue: 34,
  //     },
  //   ],
  //   options: [
  //     { actionsColumnIndex: -1 }  
  //   ]
  // });
  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState({});
  const [value, setValue] = useState({});
  const [redirect, setredirect] = useState(false);
  useEffect(() => {
    async function providerDetails() {
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
            setTableData(data)
            localStorage.setItem({
              data: data
            })
          }
          else {
            toast.error("Ooops!! Failed to fetch data.");
          }
        })
        )
        // .catch(err => toast.error("Ooops!! Something went wrong."));
    }

    providerDetails();
  });

  const redirected = () => {
    if (redirect)
      return <Redirect to={{
        pathname: "/show_documents/",
        state: { id: value }
      }} />
  }
  const clicked = (id) => {
    setValue(id)
    setredirect(true)
  }
  const change = (val, id) => {
    let user = {
      _id: id,
      status: Boolean(val)
    }
    debugger
    fetch(`${API}/admin/validateProfessional`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json().then(data => {
        if (response.status == 200) {
          let temp = tableData;
          let ind = temp.findIndex(x => x._id == id);
          temp.splice(ind, 1);
          setTableData(temp)
          console.log(temp)
          console.log(temp.splice(ind, 1))
        }
        else {
          toast.error("Ooops!! Updation Failed .");
        }
      })
      )
      .catch(err => toast.error("Ooops!! Something went wrong."));
  }
  const providerTable = ((x, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{x.first_name}</td>
        <td>{x.last_name}</td>
        <td>{new Date(x.createdAt).getDate() + "-" + (new Date(x.createdAt).getMonth() + 1) + "-" + new Date(x.createdAt).getFullYear()}</td>
        <td>
          <form>
            <select onChange={e => change(e.target.value, x._id)} className="select-action">
              <option value="">Select</option>
              <option value="true">Accept</option>
              <option value="false">Reject</option>
            </select>
            <span className="docsImage">
              <img className="select-image img-fluid" src={saveIcon} onClick={e => clicked(x)} /></span>
          </form>
        </td>


      </tr>
    )
  })
  return (
    <div className="container">
      <h3 className="welcome mt-3"> Welcome Admin</h3>

      <h3 className="mt-5 mb-2"><span className="heading-1">User </span>&nbsp;<span className="heading-2">Management</span></h3>

      <table className="table  table-bordered text-center">
        <thead>
          <tr className="table-heading">
            <th className="table-heading-first" scope="col">S.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last name</th>
            <th scope="col">Order Time & Date</th>
            <th className="table-heading-last" scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? tableData.map(providerTable) : ""}
        </tbody>
      </table>
      <div className="table-responsive">
        {/* <MaterialTable
          title="List of Customers and Professionals"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        /> */}
      </div>
      {redirected()}
    </div>
  );
}
