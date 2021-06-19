import React from 'react';
import '../App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import costumerDashboard from '../homepage/costumer-dashboard'
import Signup from '../components/Signup'
import Signuppop from '../components/Signuppop'
import Pricing from '../common/Pricing'
import Loginpopup from '../components/Loginpopup'
import Joinform from '../homepage/Joinform'
import Serviceproviderdashboard from '../dashboard/Serviceproviderdashboard'
import Admindashboard from '../admin/Admin'
import Otp from "../homepage/Otp"
import PrivacyPolicy from "../common/PrivacyPolicy"
import ShowDocuments from "../admin/ShowDocuments"
import WaitingForResponse from '../dashboard/WaitingForResponse'
import AdminLogin from "../admin/AdminLogin"
import New from "../AdminComponents/Admin"
import Howitwork from '../common/Howitwork'
import Career from '../common/Career'
import General from "../admin/General"
import OurServices from '../common/OurServices'
import Beauty from "../common/Beauty"
import needHelp from "../common/needHelp"
import Ordersummary from "../common/Ordersummary"
import Review from "../common/Review"
import UpcomingOrdersSection from "../homepage/UpcomingOrdersSection"
import SuggestedServiceSection from "../homepage/SuggestedServiceSection"
import AllOrders from "../homepage/AllOrders"
import Blog from "../common/Blog"
import BlogDetails from "../common/BlogDetails"
import SearchProfessional from "../common/SearchProfessional"
import { AuthGuard } from "./auth/authGuard.guard"
import { CostumerAuth } from "./auth/costumer_auth"


function Mainrouting() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Homepage} />
                {/* <Route exact path="/signup" component={Signup} /> */}
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/serviceprovider" component={Joinform} />
                {/* // <Route path="/otp" component={Otp} />*/}

                <CostumerAuth exact path="/serviceprovider/dashboard" component={Serviceproviderdashboard} />
                <Route exact path="/admin/dashboard" component={Admindashboard} />
                {/* // <Route path="/signup" component={Signuppop} /> */}

                <Route path="/show_documents" component={ShowDocuments} />
                <Route exact path="/privacy_policy" component={PrivacyPolicy} />
                <CostumerAuth exact path="/waiting_for_response" component={WaitingForResponse} />
                <Route exact path="/adminLogin" component={AdminLogin} />
                <AuthGuard exact path="/newAdmin" component={New} />

                {/* <Route exact path="/newAdmin" component={New} /> */}
                <Route exact path="/How-it-works" component={Howitwork} />
                <Route exact path="/careers" component={Career} />
                {/* <Route exact path="/general" component={General} /> 55555555555555555555555555555 */}
                <Route exact path="/all-services" component={OurServices} />

                <Route exact path="/service/:service_name" component={Beauty} />
                <Route exact path="/need-help" component={needHelp} />
                <Route exact path="/order-summary" component={Ordersummary} />
                <Route exact path="/review" component={Review} />
                {/* <Route exact path="/upcoming-orders" component={UpcomingOrdersSection} /> */}
                {/* <Route exact path="/suggested-service" component={SuggestedServiceSection} /> */}

                <Route exact path="/orders" component={AllOrders} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog-details" component={BlogDetails} />
                <Route exact path="/search-professional/:service_professional" component={SearchProfessional} />
                <Route exact path="/Home" component={costumerDashboard} />
            </Switch>
        </>
    );
}

export default Mainrouting;
