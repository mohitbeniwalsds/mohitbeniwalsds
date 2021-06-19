import React, { useState } from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import ReactStars from "react-rating-stars-component";
import service5 from '../assets/blog/pp.png';
import { Link, useParams } from 'react-router-dom'
import PhotoAndVideo from "./PhotoAndVideo";
import { colors } from '@material-ui/core';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";




const SearchProfessional = () => {
  const [showMore, setShowMore] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [category, setcategory] = React.useState('Makeup')
  const [multy, setmulty] = React.useState(JSON.parse(localStorage.getItem("multy")))
  const [count, setcount] = useState(false);
  const [tableDatafix, setTableDatafix] = useState([]);
  const slugdata = useParams()
  const slugdatae = slugdata.service_professional
  useEffect(() => {
    console.log(multy)
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
                if (multy == null || multy.post == null) {
                  tableData.push(cat)
                  setcount(true)
                } else {
                  if (cat.postal_code == multy.post) {
                    setcount(true)
                    tableData.push(cat)
                    console.log(tableData)
                  }
                }

              })
              setTableDatafix(data)
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
        // .catch(err => toast.error("Ooops!! Something went wrong."));
      }

    }
    providerDetails();
  }, [tableData, setTableDatafix]);

  const phone = (data) => {
    if (data.target.value.length > 0) {
      if (tableData.length) {
        let find = tableData.filter(x => x.postal_code.toLowerCase().search(data.target.value.toLowerCase()) >= 0)
        setTableData(find)
      }
    }
    else {
      setTableData(tableDatafix)
    }
  }

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


  const extraContent = <div>
    <a className="professionalLink" href="">
      <div className="row mt-5">
        <div className="col-sm-8">
          <div className="professionalImage">
            <img className="review-image img-fluid" src={service5} />
            <h4 className="professionalName">Hitler  Cleaning Service
              <span className="professionalReview">
                <p>Tags given of any</p>
                <p>15 similar jobs done near you</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
              </span>
            </h4>
          </div>
          <div class="review-count reviewAlignment rating">
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="professionalEstimate">
            <h3>$30/hour</h3>
            <h5>estimated cost</h5>
          </div>
        </div>
      </div>
    </a>
    <hr></hr>
    <a className="professionalLink" href="">
      <div className="row mt-5">
        <div className="col-sm-8">
          <div className="professionalImage">
            <img className="review-image img-fluid" src={service5} />
            <h4 className="professionalName">Hitler  Cleaning Service
              <span className="professionalReview">
                <p>Tags given of any</p>
                <p>15 similar jobs done near you</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
              </span>
            </h4>
          </div>
          <div class="review-count reviewAlignment rating">
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star filled"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="professionalEstimate">
            <h3>$30/hour</h3>
            <h5>estimated cost</h5>
          </div>
        </div>
      </div>
    </a>
    <hr></hr>
  </div>
  const linkName = showMore ? 'View less...' : 'View more...'

  const reviews = (e) => {
    localStorage.setItem('review', e)
  }

  const providerTable = ((x, index) => {
    return (
      <>
        <a className="professionalLink" href="/review" onClick={(e) => reviews(x._id)}>
          <div className="row mt-5">
            <div className="col-sm-8">
              <div className="professionalImage">
                <img className="review-image img-fluid" src={service5} />
                <h4 className="professionalName">{x.first_name + ' ' + x.last_name}
                  <span className="professionalReview">
                    <p>Tags given of any</p>
                    <p>15 similar jobs done near you</p>
                    <p dangerouslySetInnerHTML={{ __html: x.intro }}></p>
                  </span>
                </h4>
              </div>
              <div class="review-count reviewAlignment rating">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="professionalEstimate">
                <h3>$80/hour</h3>
                <h5>estimated cost</h5>
              </div>
            </div>
          </div>
        </a>
        <hr></hr>
      </>
    )
  })

  return (
    <>
      <Header />
      <hr className="headerBorder mt-2"></hr>
      <div className="professionalSearch">
        <div className="row">
          <div className="filterBox col-sm-3">
            <div className="filterByBox row">
              <div className="col-sm-6">
                <h5>Filter by</h5>
              </div>
              <div className="col-sm-6">
                <button id="login-btn" type="button" class="btn btn-primary clearb">Clear all</button>
              </div>
            </div>
            <div className="filterByBox row">
              <div className="col-sm-12">
                <h5>Price</h5>
              </div>
            </div>
            <div className="filterByBox row">
              <div className="col-sm-12">
                <h5>Availability</h5>

                <button type="button" class="btn btn-primary availability" onClick={(e) => search()}>Today</button>
                <button type="button" class="btn btn-primary availability mt-3">Pre-book</button>
              </div>
            </div>
          </div>
          <div className="providerBox col-sm-9">
            <h2 className="text-left professionals">Top Carpet Cleaning professionals Near You</h2>
            <form className="mb-5">
              <ul className="list-unstyled list-inline text-center search-box">
                <li className="list-inline-item col-sm-6" id="map-icon">
                  <input className="col-sm-12 professionalsearch"
                    id="search"
                    type="text"
                    placeholder="Postal Code"
                    aria-label="Search"
                    onChange={e => phone(e)}
                  />
                </li>
                <li className="list-inline-item">
                  <button id="search"
                    type="button"
                    className="btn btn-primary mr-5"
                    id="search-button">Search</button>
                </li>
              </ul>
            </form>



            {tableData.length > 0 ? tableData.map(providerTable) : ""}


            {/* <a className="professionalLink" href="">
              <div className="row mt-5">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$80/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$70/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$60/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$60/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$50/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Joy John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$40/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$40/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr>
            <a className="professionalLink" href="">
              <div className="row">
                <div className="col-sm-8">
                  <div className="professionalImage">
                    <img className="review-image img-fluid" src={service5} />
                    <h4 className="professionalName">Peter John Cleaning Service
                              <span className="professionalReview">
                        <p>Tags given of any</p>
                        <p>15 similar jobs done near you</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s</p>
                      </span>
                    </h4>
                  </div>
                  <div class="review-count reviewAlignment rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="professionalEstimate">
                    <h3>$40/hour</h3>
                    <h5>estimated cost</h5>
                  </div>
                </div>
              </div>
            </a>
            <hr></hr> */}
            {showMore && extraContent}
            <div className="col-md-12">
              {/* <a className="read-more-link text-right" onClick={() => { setShowMore(!showMore) }}><h6 className="viewMore">{linkName}</h6></a> */}
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default SearchProfessional