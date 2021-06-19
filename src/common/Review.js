import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import ReactStars from "react-rating-stars-component";
import service5 from '../assets/homepage/service1.png';
import PhotoAndVideo from "./PhotoAndVideo";
import { colors } from '@material-ui/core';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";

const Review = () => {
  const [tableData, setTableData] = useState([]);
  const [count, setcount] = useState(false);
  const [tableDatafix, setTableDatafix] = useState([]);
  const Reviews = localStorage.getItem('review');

  useEffect(() => {
    async function providerDetails() {
      if (!count) {
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
              data.map((cat) => {
                if (cat._id == Reviews) {
                  console.log(cat)
                  setcount(true)
                  tableData.push(cat)
                }
              })
              setTableDatafix(data)
              console.log(tableData)
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
        // .catch(err => toast.error("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, [tableData, tableDatafix]);


  const providerTable = ((x, index) => {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-8">
            <div className="user_image">
              <img className="review-image img-fluid" src={x.profileImages ? service5 : x.profileImages.map((e) => {
                return (
                  `${API}/files/${e}`
                )
              })} />
              <h4 className="reviewer-name">{x.first_name + ' ' + x.middle_name + ' ' + x.last_name}
                <span className="review">
                  <p>15 similar jobs done near you</p>
                  <p>Popular Tags</p>
                  <p>Additional Stat</p>
                </span>
              </h4>
            </div>
            <div class="review-count rating">
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Introduction</p>
            <p dangerouslySetInnerHTML={{ __html: x.intro }}></p>
          </div>
          <div className="col-sm-4">
            <div className="estimate">
              <h3>$80/hour</h3>
              <h5>estimated cost</h5>
              <hr></hr>
              <button id="joinas" type="button" class="btn btn-primary">Check Availability</button>
            </div>
          </div>
          <div className="col-sm-12">
            <h1 className="secheading mt-5 mb-1"><span className="heading-1">Photos/Videos</span></h1>
            <PhotoAndVideo />
          </div>
        </div>
        <div className="col-sm-12">
          <h4>Reviews</h4>
          <h5>House Cleaning</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="review-count rating">
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <Header />

      {tableData.map(providerTable)}

      <Footer />
    </>
  )
}
export default Review;