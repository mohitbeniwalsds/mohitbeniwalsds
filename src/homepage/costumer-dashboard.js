import React from 'react';

import Sectionfirst from './Sectionfirst'
import Sectionsecond from './Sectionsecond'
import Sectionthird from './Sectionthird'
import Sectionfourth from './Sectionfourth'
import Footer from '../common/Footer'
import Header from './Header'
import UpcomingOrdersSection from "./UpcomingOrdersSection"
function Dashboard() {

    return (
        <div className="Dashboard">
            <Header />
            <Sectionfirst />
            <UpcomingOrdersSection/>
            {/* <BeforeLoginSectionFirst /> */}
            {/* <Sectionsecond /> */}
            {/* <Sectionthird /> */}
            <Sectionfourth />
            <Footer />
        </div>
    );
}

export default Dashboard;
