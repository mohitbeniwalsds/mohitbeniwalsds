import React,{useState} from 'react';
import  './Admin.css';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';

export default function SearchService() {
  const [show, setShow] = useState(false);
  const [allques, setallques] = useState({});
  const [showPopup, setPopup] = useState(false);
  const [phonePopup, setPhonePopup] = useState(false);
  const [current, setCurrent] = useState();
  const [count, setCount] = useState(false);
  const [categorys, setcategorys] = useState();
  const [categorysel, setcategorysel] = useState();
  const [currentsub, setCurrentsub] = useState();
  const  [count1, setcount1] = useState(false);
  const getcurrentlyClicked = function () {
    if(!count){
      setCount(true)
    fetch(`${API}/admin/getAllQuestion`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            setallques(data)
            localStorage.setItem({
              data:data
            })
          } else {
            toast.error("Ooops!! Failed to fetch data.");
          }
        })
        )
        .catch(err => toast.error("Ooops!! Something went wrong."));
      }
      }
      const providerTable = ((x, index) => {
        if((x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub)){
        return (
          <>
         <label className="label-questionnair">{(x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub)?"Ques "+ ++index +". "+x.question:""}</label><br />
         <label className="label-questionnair">{(x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub)?"Ans "+index+1+"-> "+(x.answer?x.answer:"Not Answered Yet"):""}</label><br />
        </>
        )
      }
      else{
        return
      }
    })
        const handleChange = (data) =>{
          localStorage.setItem("cat_ques" , data.target.value);
          setCurrent(data.target.value)
        };
        const handleChangeSub = (data) =>{
          localStorage.setItem("subcat_ques" , data.target.value);
          setCurrentsub(data.target.value)
        };
        const catSelectItems =function() {
          if(categorys && categorys.length>0){
          let items = [];         
          for (let i = 0; i <categorys.length; i++) {             
             items.push(<option key={i} value={categorys[i].category}>{categorys[i].category}</option>);   
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
          }
          return items;
        }
        }  
        const subcatSelectItems =function(){
          if(categorys &&categorys.length>0 && current){
          let items = [];  
          let index =    categorys.findIndex(x=>{return x.category == current})    
          for (let i = 0; i < categorys[index].subcategory.length; i++) {             
             items.push(<option key={i} value={categorys[index].subcategory[i].value}>{categorys[index].subcategory[i].value}</option>);   
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
          }
          return items;
        }
        }  
        const getCategory = function() {
          if (!count) {
            setCount(true)
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
                    setcategorys(data)
                    // localStorage.setItem({
                    //   data:data
                    // })
                  } else {
                    toast.error("Ooops!! Failed to fetch data.");
                  }
                })
              )
              .catch((err) => toast.error("Ooops!! Something went wrong."));
          }
        };
  return (
    <>
     {getcurrentlyClicked()}
     {getCategory()}
    <div className="container status-content">
      <div className="contentBorder">
        <div className="row-width row">
            <div className="admin-service-title">
                <h3 className="admin-heading-red">Add & Edit Service</h3>
            </div>
        </div>

        <div className="header2">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-3 paddCss">
                        <label>Name of Service</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                        <input type="text" name="service_name" className="form-control" placeholder="Type here" /><i class="fa fa-file-text" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-3 paddCss">
                        <label>Sub Category</label>
                    </div>  
                    <div className="col-sm-8 paddCss">
                        <input type="text" className="form-control" name="category_name" placeholder="Type here" />
                    </div>
                    <div className="col-sm-4 paddCss">
                        <button className="button admin-status-btn"><i class="fa fa-plus" aria-hidden="true"></i> Add Service</button>
                    </div>  
                </div>
            </div>
        </div>
    </div> 
    <form>
            <div className="row mt-2">
              <div className="col-sm-3">
                <div class="form-group ">
                  <div className="responsive">
                    <div class="form-group ">
                        <select class="form-control" onChange={(e) =>handleChange(e)}>
                            <option value="">Enter Category</option>
                           {catSelectItems()}
                        </select>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
              <div class="form-group ">
                  <div className="responsive">
                    <div class="form-group ">
                        <select class="form-control" onChange={(e) =>handleChangeSub(e)}>
                            <option value="">Enter SubCategory</option>
                            {subcatSelectItems()}
                        </select>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="col-sm-2 taskButton">
                  <button type="button" className="btn btn-block admin-status-btn">Search</button>
              </div>
            </div>
          </form>
    <h3 className="title-service-name">Questionnaire</h3>
    <div className="col-md-12">
        <div className="contentBorder admin-service-name">
            <h4>{current}</h4>
        </div>
        <span ></span>
        <div className="contentBorder listing-service-admin">
          <div className="row">
            <div className="col-md-10">
            {allques.length>0?allques.map(providerTable):""}
            </div>
          </div>
        </div>
    </div>
      <div className="bottom-status">
        <div className="row mt-3">
          {/* <div className="col-sm-2">
            <button className="button admin-status-btn">Save</button>
          </div> */}
          <div className="col-sm-2">
            <button className="button admin-status-btn">Approve</button>
          </div>
          <div className="col-sm-2 btn-service-search">
            <button className="button admin-status-btn">Reject</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
