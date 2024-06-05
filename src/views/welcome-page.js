import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Banner1 from '../components/banner1'
import Footer15 from '../components/footer15'
import './welcome-page.css'

const WelcomePage = (props) => {
  return (
    <div className="welcome-page-container">
      <Helmet>
        <title>Welcome-page - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Welcome-page - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="welcome-page-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name7"></Navbar4>
      </div>
      <Banner1></Banner1>
      <div className="welcome-page-footer11">
        <Footer15 rootClassName="footer15-root-class-name7"></Footer15>
      </div>
    </div>
  )
}

export default WelcomePage
