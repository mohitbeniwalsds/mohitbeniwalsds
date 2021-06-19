import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Dashboard.css";
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//import { NoEncryption } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    actioncolor: {
      color: "grey",

    },
    dropdown: {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid #fff',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 4px 8px 2px #888888",
    },
    edtibutton: {
      border: "none",
      backgroundColor: "#fff",
    },
    option: {
      boxShadow: "0px 4px 8px 2px #888888",
    }

  }
  ),
);
export default function ProfileManagement() {
  const classes = useStyles();
  const [allques, setallques] = useState([1]);
  const [color, setColor] = useState('Earnings')
  const [component1, setComponent1] = useState('Summary')
  const [component, setComponent] = useState('dailyupdate')
  const [addcategory, setaddcategory] = useState('')
  const [ckeditor, setckeditor] = useState('')
  const [filexit, setfilexit] = useState('')
  const [location, setlocation] = useState([])
  const providerData = JSON.parse(sessionStorage.getItem("providerData"))
  const [open, setOpen] = React.useState(false);
  const [updateprofile, setupdateprofile] = React.useState()
  const [count, setcount] = useState(false)
  const [categoryexit, setcategoryexit] = useState([])
  const [update, setupdate] = useState([])


  const saveNewSetting = () => {
    let get = JSON.parse(sessionStorage.getItem("providerData"))
    if (get) {
      fetch(`${API}/professional/updatePersonalSetting`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(get)
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            toast.success("Details Updated Successfully .");
            console.log(data)
            sessionStorage.setItem('providerData', JSON.stringify(data))
          }
          else {
            toast.error("Ooops!! Updation Failed .");
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }

  }
  const select = (cName, e) => {
    let subcategory = []
    providerData.subcategory.map((e) => {
      subcategory.push(e)
    })
    subcategory.push(e.target.value)
    providerData.subcategory = subcategory
    sessionStorage.setItem('providerData', JSON.stringify(providerData))
    setupdateprofile(subcategory)
    setTimeout(function () { saveNewSetting() }, 2000);
  }

  const checkeditor = () => {
    providerData.intro = ckeditor
    sessionStorage.setItem('providerData', JSON.stringify(providerData))
    setTimeout(function () { saveNewSetting() }, 2000);
  }

  const selectdelett = (e) => {
    console.log(e)
    let subcategory = []
    providerData.subcategory.map((subexit) => {
      if (subexit != e) {
        subcategory.push(subexit)
      }
    })
    console.log(subcategory)
    providerData.subcategory = subcategory
    sessionStorage.setItem('providerData', JSON.stringify(providerData))
    setupdateprofile(subcategory)
    setTimeout(function () { saveNewSetting() }, 2000);
  }
  const getCategory = () => {
    if (!count) {
      setcount(true)
      fetch(`${API}/admin/getAllCategory`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status == 200) {
              data.map((sub) => {
                if (providerData.category == sub.category) {
                  sub.subcategory.map((sublist) => {
                    categoryexit.push(sublist)
                  })
                }
              })
              console.log(categoryexit)
              setupdate(categoryexit)
            } else {
              // toast.error("Ooops!! Failed to fetch data.");
            }
          })
        )
      // .catch((err) => toast.error("Ooops!! Something went wrong."));
    }
  };


  // const handleChange = (cName, e) => {
  //     if (updateprofile == '') {
  //       setupdateprofile(providerData)
  //     } else {
  //       let newdata = { ...providerData, [e.target.name]: e.target.value }
  //       setupdateprofile(newdata)
  //       providerData[cName] = e.target.value
  //     }
  //     console.log(updateprofile)
  //   }



  React.useEffect(() => {
    console.log(providerData)
    getCategory()
  }, [updateprofile, categoryexit])


  const handleClick = (e) => {
    // setOpen((prev) => !prev);
    document.getElementById(e).style.display = 'block'
    console.log(e)
  };
  const handleClickclose = (e) => {
    // setOpen((prev) => !prev);
    document.getElementById(e).style.display = 'none'
    console.log(e)
  };
  // const handleClickAway = () => {
  //   setOpen(true);
  // };
  let data = document.getElementsByName('vehicle1')
  const checkedexit = (e) => {
    console.log(e.target.value)
    let check = e.target.checked;
    if (check == true) {
      location.push({ [e.target.name]: e.target.value })
      console.log(location)
    }
  }

  const question = ((x, index) => {
    return (
      <div id={"first" + index} className="displnone">
        <div className={classes.dropdown}>
          <div className="header2 paddCss1">
            <label>1. is simply dummy text of the printing ?</label>
            <div className="row">
              <div className="col-sm-1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
              </div>
              <div className="4">
                <label>North-West<input type="text" className="editerSmall" id="textEnter" name="textEnter" size="4" /></label>
              </div>
            </div>
          </div>
          <button className="button btn1">Save</button>
        </div >
      </div >
    )
  })
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="mt-5 mb-5"><span className="heading-1">PROFILE</span>&nbsp;<span className="heading-2">MANAGEMENT</span></h1>
          </div>
        </div>
        <div className="row" >
          <div className="col-sm-12">
            <div className="borderP" >
              <div className="header">
                <p>Services</p>
              </div>
              <div className="paddLeft">
                <label>Type of Service</label>
              </div>
              <div className="paddLeft">
                <input type="text" className="form-control" style={{ color: "#212529" }} readonly="" value={providerData.category} />
              </div>
              <div className="paddLeft mt-2">
                <label>Sub category</label>
              </div>
              {
                providerData.subcategory.map((sub, index) => {
                  return (
                    <div className="paddLeft mt-2">
                      <div className="form-control">
                        <div className="row ">
                          <div className="col-sm-8">
                            <div className="">
                              <label>{ sub}</label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="float-right">

                              <button type="button"
                                className={classes.edtibutton} onClick={(e) => handleClick("first" + index)}>
                                <EditIcon className={classes.actioncolor} /></button>
                              &nbsp;&nbsp;
                              <button type="button"
                                className={classes.edtibutton} onClick={(e) => selectdelett(sub)}>
                                <DeleteIcon className={classes.actioncolor} />
                              </button>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div id={"first" + index} className="displnone">
                              <div className={classes.dropdown}>
                                <div className="header2 paddCss1">
                                  <label>1. is simply dummy text of the printing ?</label>
                                  <div className="row">
                                    <div className="col-sm-1">
                                      <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
                                    </div>
                                    <div className="4">
                                      <label>North-West<input type="text" className="editerSmall" id="textEnter" name="textEnter" size="4" /></label>
                                    </div>
                                  </div>
                                </div>
                                <button className="button btn1">Save</button>
                                <button className="button btn1" onClick={(e) => handleClickclose("first" + index)}>Cancel</button>
                              </div >
                            </div >
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="paddLeft mt-3 mb-5">
                <form className="">
                  <div class="">
                    <select className=" form-control text-center selectbtn1" id="sel1" name="subcategory" onChange={(e) => select("subcategory", e)}>
                      <option className="text-center" className={classes.option} for="sel2">+ Add Another Sub Category</option>
                      {categoryexit && categoryexit.map((e) => {
                        return (
                          <option className={classes.option} value={e.value}>{e.value}</option>
                        )
                      })}
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5" >
          <div className="col-sm-12">
            <div className="borderP" >
              <div className="header">
                <p>Introduction</p>
              </div>
              <div className="header2">
                <div className="col-sm-12">
                  <div className="header2">
                    <CKEditor
                      data={providerData.intro}
                      onChange={evt => console.log(setckeditor(evt.editor.getData()))}
                    />
                  </div>
                  <button className="button btn1" onClick={e => checkeditor()}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5" >
          <div className="col-sm-12">
            <div className="borderP" >
              <div className="header">
                <p>Upload Photo & Video</p>
              </div>
              <div className="header2">
                <div className="col-sm-12">
                  <div className="header2 position">
                    <input type="file" name="" value={filexit} onChange={(e) => setfilexit(e.target.value)} />
                    <div class="upside" >
                      <i class="fa fa-upload" aria-hidden="true"></i>
                      {
                        filexit == "" ? <p>Choose a file or drag it here.</p> : <p>{filexit}</p>
                      }

                    </div>
                  </div>
                  <button className="button btn1">Cancel</button>
                  <button className="button btn1">Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5" >
          <div className="col-sm-12">
            <div className="borderP">
              <div className="header">
                <p>Location Preferences</p>
              </div>
              <div className="header2 paddCss1">
                <label>Want to add another zone? Request here</label>
                <div className="row mb-3">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="North-West" onChange={(e) => checkedexit(e)} />
                  </div>
                  <div className="4">
                    <label for="vehicle1"> North-West</label>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle16" name="vehicle1" value="North-East" onChange={(e) => checkedexit(e)} />
                  </div>
                  <div className="4">
                    <label for="vehicle6">North-East</label>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle3" name="vehicle1" value="South-West" onChange={(e) => checkedexit(e)} />
                  </div>
                  <div className="4">
                    <label for="vehicle3">South-West</label>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle4" name="vehicle1" value="South-East" onChange={(e) => checkedexit(e)} />
                  </div>
                  <div className="4">
                    <label for="vehicle4">South-East</label>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-1">
                    <input type="checkbox" id="vehicle5" name="vehicle1" value="Any where in name of city" onChange={(e) => checkedexit(e)} />
                  </div>
                  <div className="4">
                    <label for="vehicle5">Any where in name of city</label>
                  </div>
                </div>
                <button className="button btn1">Request</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
