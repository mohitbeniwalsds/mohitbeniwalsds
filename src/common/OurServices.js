import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import Header from '../homepage/Header'
import { Link } from 'react-router-dom'
import serviceBanner from '../assets/AllServices/services-banner.jpg';
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
const OurServices = () => {
  const [readMore, setReadMore] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showBussiness, setShowBussiness] = useState(false);
  const [showCarpet, setShowCarpet] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableDatafix, setTableDatafix] = useState([]);
  const [count, setcount] = useState(false);
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
            } else {
              alert("Ooops!! Failed to fetch data.");
            }
          })
          )
          .catch(err => alert("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, [tableDatafix, tableData]);


  const providerTable = ((x, index) => {
    return (
      <div className="col-md-3">
        <img className="service" src={x.categoryImage ? `${API}/files/${x.categoryImage}` : beauty} alt="" />
        <div className="popular_services">
          <Link to={"/service/" + x.category}>{x.category}</Link>
        </div>
      </div>
    )
  })
  const providerTable2 = ((x, index) => {
    return (
      <div className="row mt-4">
        <div className="col-md-12 mt-2">
          <h4>{x.category}</h4>
        </div>
        {
          x.subcategory.map((y) => {
            return (
              <div className="col-md-3 mb-3">
                <a className="cardLink text-center" href={"/search-professional/" + y.value}>{y.value}</a>
              </div>
            )
          })
        }
      </div>
    )
  })




  const extraContent = <div>
    <div className="row">

      <div className="col-md-3">
        <img className="service" src={beauty} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={fitness} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={cleaning} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={beauty} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={pet} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={cleaning} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={beauty} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>
      <div className="col-md-3">
        <img className="service" src={electician} alt="" />
        <div className="popular_services">
          <a href="#">Beauty Services</a>
        </div>
      </div>

    </div>
  </div>
  const extraBeauty = <div>
    <div className="row">
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
    </div>
  </div>
  const extraBussine = <div>
    <div className="row">
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
    </div>
  </div>
  const extraCarpet = <div>
    <div className="row">
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
      <div className="col-md-3">
        <a className="cardLink text-center" href="#">Bridal Make up</a>
      </div>
    </div>
  </div>
  const linkName1 = readMore ? 'View less...' : 'View more...'
  const linkName2 = showMore ? 'View less...' : 'View more...'
  const linkName3 = showBussiness ? 'View less...' : 'View more...'
  const linkName4 = showCarpet ? 'View less...' : 'View more...'

  return (
    <>
      <Header />
      <div className="Banner">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img className="Banner" src={serviceBanner} alt="Responsive image" />
            <div class="bannerText">
              <h1 className="secheading mt-5 mb-5"><span className="bannerHeading">OUR SERVICES</span></h1>
            </div>
          </div>
        </div>

      </div>
      <div className="container mt-5 servicesfull">
        <div className="row">
          {tableData.length > 0 ? tableData.map(providerTable) : ""}
        </div>
        {readMore && extraContent}
        {/* <div className="col-md-12 mt-4">
          <a className="read-more-link text-right" onClick={() => { setReadMore(!readMore) }}><h6 className="viewMore">{linkName1}</h6></a>
        </div> */}
        <div className="row mt-4">
          <div className="col-md-12 mb-2">
            <h3>All Services</h3>
          </div>
        </div>


        {tableData.length > 0 ? tableData.map(providerTable2) : ""}


        {/* {showMore && extraBeauty}
        {showBussiness && extraBussine} */}
        {/* <div className="col-md-12">
          <a className="read-more-link text-right" onClick={() => { setShowBussiness(!showBussiness) }}><h6 className="viewMore">{linkName3}</h6></a>
        </div>
        {showCarpet && extraCarpet}
        <div className="col-md-12">
          <a className="read-more-link text-right" onClick={() => { setShowCarpet(!showCarpet) }}><h6 className="viewMore">{linkName4}</h6></a>
        </div> */}
      </div>
      <Footer />
    </>
  )
}
export default OurServices