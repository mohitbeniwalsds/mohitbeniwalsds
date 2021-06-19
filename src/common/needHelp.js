import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

const  needHelp = ()=>{

	return(
		<>
        <Header/>
         <div className="Banner">
			<div className="row">
			 <div className="col-sm-12 col-md-12 col-lg-12">
                <h1 className="secheading mt-5 mb-5"><span className="heading-1">NEED</span>&nbsp;<span className="heading-2">HELP</span></h1>
             </div>
		    </div>
        </div>
        <div className="container">
            <div className="row container">
                 <div className="col-md-1"></div>
                <div className="col-md-6 contentBorder  pt-3 pb-3">
                  <div className="row container">
                    <div className="col-sm-3 paddCss">
                      <label>Name</label>
                    </div>
                    <div className="col-sm-9 paddCss">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Email</label>
                    </div>  
                    <div className="col-sm-9 paddCss">
                      <input type="email" className="form-control" name="email" placeholder="" />
                    </div>  
                    <div className="col-sm-3 paddCss">
                        <label>Question</label>
                    </div>
                    <div className="col-sm-9">
                       <textarea className="form-control paddCss"></textarea>
                     </div>
                     <div className="col-sm-3 paddCss">
                    </div>
                    <div className="col-sm-4 paddCss">
                    <button className="button btn1 ml-1 send">Send</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                <div className="row">
                <div className="col-sm-12 contentBorder" style={{paddingRight:0,paddingLeft:0}}>
                <div className="col hourStyle">
                   <p className="helpLine">Helpline</p>
                 </div>
                 <div>
                  <p className="helpNunber"><svg height="20" viewBox="0 0 58 58" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="003---Call" fill="#2b5ea6" fill-rule="nonzero" transform="translate(-1)"><path id="Shape" d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z"/><path id="Shape" d="m47 31c-1.1045695 0-2-.8954305-2-2-.0093685-8.2803876-6.7196124-14.9906315-15-15-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c10.4886126.0115735 18.9884265 8.5113874 19 19 0 1.1045695-.8954305 2-2 2z"/><path id="Shape" d="m57 31c-1.1045695 0-2-.8954305-2-2-.0154309-13.800722-11.199278-24.9845691-25-25-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c16.008947.01763587 28.9823641 12.991053 29 29 0 .530433-.2107137 1.0391408-.5857864 1.4142136-.3750728.3750727-.8837806.5857864-1.4142136.5857864z"/></g></g></svg> 001122223444</p>
                  <p className="helpNunber"><svg height="20" viewBox="0 0 58 58" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="003---Call" fill="#2b5ea6" fill-rule="nonzero" transform="translate(-1)"><path id="Shape" d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z"/><path id="Shape" d="m47 31c-1.1045695 0-2-.8954305-2-2-.0093685-8.2803876-6.7196124-14.9906315-15-15-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c10.4886126.0115735 18.9884265 8.5113874 19 19 0 1.1045695-.8954305 2-2 2z"/><path id="Shape" d="m57 31c-1.1045695 0-2-.8954305-2-2-.0154309-13.800722-11.199278-24.9845691-25-25-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c16.008947.01763587 28.9823641 12.991053 29 29 0 .530433-.2107137 1.0391408-.5857864 1.4142136-.3750728.3750727-.8837806.5857864-1.4142136.5857864z"/></g></g></svg>
                   001122223444</p>
                </div>
                </div>
                <div className="col-sm-12 mt-2 contentBorder mt-4" style={{paddingRight:0,paddingLeft:0}}>
                  <div className="col hourStyle">
                     <p className="helpLine">Working hours</p>
                  </div>
                  <div>
                     <p className="helpNunber">9 am-11 am (CST) </p>
                     </div>
                 </div>
                </div>                  
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 mt-5 mb-5">
                <h3>FAQ</h3>
                <div className="Wrapper">
                  <Accordion title="Why is the sky blue?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by
                      all the gases and particles in the air. Blue light is scattered more than
                      the other colors because it travels as shorter, smaller waves. This is why
                      we see a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What's It Like Inside Jupiter?">
                      It's really hot inside Jupiter! No one knows exactly how hot, but
                      scientists think it could be about 43,000°F (24,000°C) near Jupiter's
                      center, or core.
                    </Accordion>
                    <Accordion title="What's It Like Inside Jupiter?">
                      It's really hot inside Jupiter! No one knows exactly how hot, but
                      scientists think it could be about 43,000°F (24,000°C) near Jupiter's
                      center, or core.
                    </Accordion>
                  </div>
                </div>
            </div>
        </div>
		<Footer/>
		</>
	)
}
export default needHelp