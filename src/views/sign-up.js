import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm7 from '../components/contact-form7'
import Footer15 from '../components/footer15'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-up - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Sign-up - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="sign-up-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name3"></Navbar4>
      </div>
      <ContactForm7></ContactForm7>
      <div className="sign-up-footer11">
        <Footer15 rootClassName="footer15-root-class-name3"></Footer15>
      </div>
    </div>
  )
}

export default SignUp
