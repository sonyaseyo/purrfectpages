import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Pricing7 from '../components/pricing7'
import FAQ4 from '../components/faq4'
import Testimonial14 from '../components/testimonial14'
import CTA4 from '../components/cta4'
import Footer15 from '../components/footer15'
import './plans.css'

const Plans = (props) => {
  return (
    <div className="plans-container">
      <Helmet>
        <title>Plans - Composed Frequent Lapwing</title>
        <meta property="og:title" content="Plans - Composed Frequent Lapwing" />
      </Helmet>
      <div className="plans-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name1"></Navbar4>
      </div>
      <Pricing7></Pricing7>
      <FAQ4></FAQ4>
      <Testimonial14></Testimonial14>
      <CTA4></CTA4>
      <div className="plans-footer11">
        <Footer15 rootClassName="footer15-root-class-name1"></Footer15>
      </div>
    </div>
  )
}

export default Plans
