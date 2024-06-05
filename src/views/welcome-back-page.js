import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Banner11 from '../components/banner11'
import Footer15 from '../components/footer15'
import './welcome-back-page.css'

const WelcomeBackPage = (props) => {
  return (
    <div className="welcome-back-page-container">
      <Helmet>
        <title>Welcome-back-page - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Welcome-back-page - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="welcome-back-page-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name8"></Navbar4>
      </div>
      <Banner11></Banner11>
      <div className="welcome-back-page-footer11">
        <Footer15 rootClassName="footer15-root-class-name8"></Footer15>
      </div>
    </div>
  )
}

export default WelcomeBackPage
