import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm72 from '../components/contact-form72'
import Footer15 from '../components/footer15'
import './user-account.css'

const UserAccount = (props) => {
  return (
    <div className="user-account-container">
      <Helmet>
        <title>User-account - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="User-account - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="user-account-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name10"></Navbar4>
      </div>
      <ContactForm72></ContactForm72>
      <div className="user-account-footer11">
        <Footer15 rootClassName="footer15-root-class-name9"></Footer15>
      </div>
    </div>
  )
}

export default UserAccount
