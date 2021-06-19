// MyComponent.js
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import sectionFirst from '../assets/homepage/firstimage.png'
import '../Style.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { countryOptions } from '../common/apiConfig'
import { API } from "../backend";
import { ToastContainer, toast } from "react-toastify";
import CreatableSelect from 'react-select/creatable';
import beauty from '../assets/homepage/beauty-services.jpg'
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link, useParams, Redirect } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";

function BeforeLoginSectionFirst() {
  const [country, setcountry] = React.useState([])
  const [category, setcategory] = React.useState('Beauty')
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [value, setValue] = useState({});
  const [count, setcount] = useState(false);
  const [postelsearch, setpostelsearch] = useState({})
  const history = useHistory();

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
    console.log(postelsearch)
    providerDetails();
  }, [setcountry, countryOptions, tableDatafix, tableData, postelsearch]);



  const providerTable = ((x, index) => {
    return (
      <div className="slide-items">
        <div className=" item">
          <img className="slider-3" src={x.categoryImage ? `${API}/files/${x.categoryImage}` : beauty} alt="" />
          <div className="popular_services">
            <Link to={"/service/" + x._id}>{x.category}</Link>
          </div>
        </div>
      </div>
    )
  })


  const search = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://54.237.177.207/user/searchprofessional?category=" + category + "&Services&postal_code=yy7", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const postesearchd = (name, e) => {
    let newdata = { ...postelsearch, [name]: e.target.value }
    setpostelsearch(newdata)
    console.log(newdata)
  }

  const searchmulty = () => {
    if (postelsearch == null || postelsearch.cate == "" || postelsearch.post == "") {
      alert("fill please")
    }
    else {
      localStorage.setItem("multy", JSON.stringify(postelsearch))
      history.push("/search-professional/" + postelsearch.cate);
    }
  }

  // const handleChanges = (newValue: any, actionMeta: any) => {
  //   console.group('Value Changed');
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };

  // const handleInputChange = (inputValue: any, actionMeta: any) => {
  //   console.group('Input Changed');
  //   console.log(inputValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // }

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
    <>
      <section className="firstSection">
        <div className="row">
          <div className="co-xl-6 col-sm-6 col-md-6 col-lg-6">
            <div className="BeforeLogin">
              <h1 className="homepageHeadingFirst mb-3">Get Started!</h1>
              <h4 className="homepageHeadingSecond mb-4">Search for nearby service professionals</h4>
              <form className="firstSectionSearch">
                <ul className="list-unstyled list-inline search-box">
                  <li className="list-inline-item search-field">
                    {/* <CreatableSelect
                      onChange={(e) => handleChanges()}
                      onInputChange={(e) => handleInputChange()}
                      options={countryOptions}
                      placeholder="Begin your search hear"
                    /> */}
                  </li>
                  <li className="list-inline-item" id="map-icon">
                    <input className="first-searchs"
                      id="first"
                      type="text"
                      placeholder="Begin your search hear"
                      aria-label="Search"
                      onChange={(e) => postesearchd("cate", e)}
                    />
                    <input className=""
                      id="second-search"
                      type="text"
                      placeholder="Postal Code"
                      aria-label="Search"
                      onChange={(e) => postesearchd("post", e)}
                    />
                  </li>
                  <li className="list-inline-item">
                    <button id="search"
                      type="button"
                      className="btn btn-primary mr-5"
                      id="search-button" onClick={(e) => searchmulty()}>Search</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="co-xl-6 col-sm-6 col-md-6 col-lg-6 text-center">
            <Image className="imageBanner" src={sectionFirst} fluid style={{ width: '85%' }} />
          </div>
        </div>
      </section>
      <section className="sec-2 pb-5">
        <div className="container">
          <h1 className="secheading mt-5 mb-5"><span className="heading-1">OUR</span>&nbsp;<span className="heading-2">SERVICES</span></h1>
          <Slider {...settings} id="Slider-1">
            {tableData.length > 0 ? tableData.map(providerTable) : ""}
          </Slider>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <a className="btn" id="viewAllButton" href="/all-services">View All</a>
          </div>
        </div>
      </section>
    </>
  );
}
export default BeforeLoginSectionFirst;
