import React, { Component } from "react";
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homegarden from '../assets/homepage/home-&-garden.png'
import Health from '../assets/homepage/Helth-&-wellbeing.png'
import wedding from '../assets/homepage/wedding-&-events.png'
import Business from '../assets/homepage/Business-services.png'
import Lessons from '../assets/homepage/Lessons-&-training.png'
import beauty from '../assets/homepage/beauty-services.jpg'
import cleaning from '../assets/homepage/cleaning-services.jpg'
import electician from '../assets/homepage/electician.jpg'
import fitness from '../assets/homepage/health-fitness.jpg'
import pet from '../assets/homepage/pet-services.jpg'
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";


export default function Sectionsecond() {
  let redirectId = []
  const adminData = localStorage.getItem("user")
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [value, setValue] = useState({});
  const [count, setcount] = useState(false);
  const [redirect, setredirect] = useState(false);

  useEffect(() => {
    async function providerDetails() {
      if (!count) {
        fetch(`${API}/admin/getAllCategory`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
          .then(response => response.json().then(data => {
            if (response.status == 200) {
              data.map((e) => tableData.push(e))
              data.map((e) => tableDatafix.push(e))
              console.log(data)
              setcount(true)
              localStorage.setItem({
                data: data
              })
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
          .catch(err => toast.error("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, []);

  const providerTable = ((x, index) => {
    return (
      <div className="slide-items">
        <div className=" item">
          <img className="slider-3" src={beauty} alt="" />
          {/* x.background */}
          <div className="popular_services">
            <Link to={"/service/" + x.category}>{x.category}</Link>
          </div>
        </div>
      </div>
    )
  })


  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    "i9hi9"
  );
}

