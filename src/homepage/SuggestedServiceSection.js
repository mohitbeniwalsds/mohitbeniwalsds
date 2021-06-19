import React  from 'react'
import service1 from '../assets/homepage/service1.png';
import service2 from '../assets/homepage/service2.png';
import service3 from '../assets/homepage/service3.png';
import service4 from '../assets/homepage/service4.png';
import service5 from '../assets/homepage/service1.png';
import carpetcleaning from '../assets/homepage/carpet-cleaning.jpg';
import grocery from '../assets/homepage/grocery-delivery.jpg';
import handyman from '../assets/homepage/handyman.jpg';
import coaching from '../assets/homepage/life-coaching.jpg';
import photography from '../assets/homepage/photography.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SuggestedServiceSection extends React.Component{
	render() {
     var settings = {
      dots: false,
      infinite:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint:769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint:425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    <section className="sec-4 pb-5">
      <div className="container">
			<h1 className="secheading mt-5 mb-5"><span className="heading-1">SUGGESTED</span>&nbsp;<span className="heading-2">SERVICES</span></h1>
        <Slider {...settings} id="Slider-3">
				<div className="slide-items">
	      <div className="item">
				<img className="slider-3" src={carpetcleaning} alt=""/>
				<div className="popular_services">
				<a href="#">Carpet Cleaning</a>
				</div>
			</div>
			</div>
				<div className="slide-items">
           <div className="item">
				<img className="slider-3" src={grocery} alt=""/>
			<div className="popular_services">
				<a href="#">Grocery Delivery</a>
			</div>
			</div>
		</div>
			<div className="slide-items">
		   <div className="item">
			<img  className="slider-3" src={handyman} alt=""/>
				<div className="popular_services">
					<a href="#">Handyman</a>
				</div>
		   </div>
			 </div>
			 	<div className="slide-items">
		    <div className="item">
			<img  className="slider-3" src={coaching} alt=""/>
				<div className="popular_services">
					<a href="#">Life Coaching</a>
				</div>
		    </div>
			</div>
				<div className="slide-items">
		     <div className="item">
		    	<img className="slider-3" src={photography} alt=""/>
				<div className="popular_services">
					<a href="#">Photography</a>
				</div>
		       </div>
					 </div>
					 	<div className="slide-items">
		           <div className="item">
			     <img  className="slider-3" src={service1} alt=""/>
				<div className="popular_services">
					<a href="#">House Cleaning</a>
				</div>
		        </div>
						</div>
							<div className="slide-items">
		            <div className="item">
		    	<img className="slider-3" src={service2} alt=""/>
			 	<div className="popular_services">
					<a href="#">Personal Training</a>
				</div>
				</div>
		</div>
        </Slider>
      </div>
      </section>
    );
  }

	}
	export default SuggestedServiceSection
