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

class PhotoAndVideo extends React.Component{
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
    <section className="pb-5">
      <div className="container">
        <Slider {...settings} id="Slider-3">
				<div class="slide-items">
	      <div className="item">
				<img className="slider-3" src={carpetcleaning} alt=""/>
			</div>
			</div>
				<div class="slide-items">
           <div className="item">
				<img className="slider-3" src={grocery} alt=""/>
			</div>
		</div>
			<div class="slide-items">
		   <div className="item">
			<img  className="slider-3" src={handyman} alt=""/>
			
		   </div>
			 </div>
			 	<div class="slide-items">
		    <div className="item">
			<img  className="slider-3" src={coaching} alt=""/>
			
		    </div>
			</div>
				<div class="slide-items">
		     <div className="item">
		    	<img className="slider-3" src={photography} alt=""/>
			
		       </div>
					 </div>
					 	<div class="slide-items">
		           <div className="item">
			     <img  className="slider-3" src={service1} alt=""/>
			
		        </div>
						</div>
							<div class="slide-items">
		            <div className="item">
		    	<img className="slider-3" src={service2} alt=""/>
			 
				</div>
		</div>
        </Slider>
      </div>
      </section>
    );
  }

	}
	export default PhotoAndVideo
