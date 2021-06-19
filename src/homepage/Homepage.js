import React from 'react';

import Sectionfirst from './Sectionfirst'
import Sectionsecond from './Sectionsecond'
import Sectionthird from './Sectionthird'
import Sectionfourth from './Sectionfourth'

import Footer from '../common/Footer'
import Header from './Header'
import BeforeLoginSectionFirst from './BeforeLoginSectionFirst'
import AfterLoginHeader from './AfterLoginHeader'

function Homepage() {
  

  return (
    <div className="Homepage">
      <Header />
      <BeforeLoginSectionFirst />
      {/* <Sectionsecond /> */}
      <Sectionthird />
      <Sectionfourth />
      <Footer />
    </div>
  );
}

export default Homepage;
