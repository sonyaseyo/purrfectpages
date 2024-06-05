import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features22 from '../components/features22'
import Team14 from '../components/team14'
import Footer15 from '../components/footer15'
import './books.css'

const Books = (props) => {
  return (
    <div className="books-container">
      <Helmet>
        <title>Books - Composed Frequent Lapwing</title>
        <meta property="og:title" content="Books - Composed Frequent Lapwing" />
      </Helmet>
      <div className="books-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name2"></Navbar4>
      </div>
      <Hero9 image1Src="https://www.catconworldwide.com/wp-content/uploads/2018/04/reading-498102.jpg"></Hero9>
      <Features22></Features22>
      <Team14></Team14>
      <div className="books-footer11">
        <Footer15 rootClassName="footer15-root-class-name2"></Footer15>
      </div>
    </div>
  )
}

export default Books
