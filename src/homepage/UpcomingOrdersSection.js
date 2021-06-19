import React, { Component } from "react";
import Slider from "react-slick";
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
export default class UpcomingOrdersSection extends Component {
  render() {
    
    return (
    <section className="container pb-5">
      <div className="container">
        <h1 className="secheading mt-5 mb-5"><span className="heading-1">UPCOMING</span>&nbsp;<span className="heading-2">ORDERS</span></h1> 
      </div>
      <div className="table-responsive">
  <table className="table  table-bordered text-center">
  <thead>
    <tr className="table-heading">
      <th className="table-heading-first" scope="col">Order Number</th>
      <th scope="col">Service Name</th>
      <th scope="col">Service Provider</th>
      <th scope="col">Order Time & Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cleaning</td>
      <td>Otto</td>
      <td><span>12:00pm</span>&nbsp;&nbsp;
    <span>22 July 2020</span></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Housing</td>
      <td>Thornton</td>
      <td><span>1:00pm</span>&nbsp;&nbsp;
    <span>22 July 2020</span></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Health</td>
      <td>Thornton</td>
      <td><span>1:00pm</span>&nbsp;&nbsp;
    <span>22 July 2020</span></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Web Design</td>
      <td>Thornton</td>
      <td><span>1:00pm</span>&nbsp;&nbsp;
    <span>22 July 2020</span></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td >Accounting</td>
      <td>twitter</td>
      <td><span>2:00pm</span>&nbsp;&nbsp;
    <span>22 July 2020</span></td>
    </tr>
  </tbody>
</table>
</div>  
      </section>
    );
  }
}
