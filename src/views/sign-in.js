import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm71 from '../components/contact-form71'
import Footer15 from '../components/footer15'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-in - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Sign-in - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="sign-in-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name4"></Navbar4>
      </div>
      <ContactForm71></ContactForm71>
      <div className="sign-in-footer11">
        <Footer15 rootClassName="footer15-root-class-name4"></Footer15>
      </div>
    </div>
  )
}

export default SignIn
