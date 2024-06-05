import React from 'react'

import PropTypes from 'prop-types'

import './contact-form72.css'

const ContactForm72 = (props) => {
  return (
    <div className="contact-form72-contact1 thq-section-padding">
      <div className="contact-form72-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form72-section-title thq-flex-column">
          <div className="contact-form72-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src="https://mewlayoung.com/wp-content/uploads/2024/02/Kwazi-reads-Dusty-Rainbolt-web-page-1024x846.jpg"
          className="contact-form72-image"
        />
        <div className="contact-form72-content1">
          <div className="contact-form72-row"></div>
          <div className="contact-form72-row1"></div>
          <div className="contact-form72-row2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span id="email" className="thq-body-small">
              {props.email}
            </span>
          </div>
          <div className="contact-form72-container">
            <div className="contact-form72-row3"></div>
            <span id="username">{props.username}</span>
          </div>
          <div className="contact-form72-row4"></div>
        </div>
      </div>
    </div>
  )
}

ContactForm72.defaultProps = {
  content1: 'Have a question or need assistance?',
  email: 'user@gmail.com',
  action: 'Contact us',
  content2: "We're here to help!",
  heading1: 'Cabinet',
  address: '123 Cozy Cat Lane, Meowtown, USA',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  username: 'User name',
}

ContactForm72.propTypes = {
  content1: PropTypes.string,
  email: PropTypes.string,
  action: PropTypes.string,
  content2: PropTypes.string,
  heading1: PropTypes.string,
  address: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  username: PropTypes.string,
}

export default ContactForm72
