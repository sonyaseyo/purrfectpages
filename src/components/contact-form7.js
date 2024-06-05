import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form7-section-title thq-flex-column">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-form7-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-small contact-form7-text2">
              {props.content1}
            </span>
          </div>
        </div>
        <form className="contact-form7-form thq-flex-column">
          <div className="contact-form7-container">
            <div className="contact-form7-input">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                required="true"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                required="true"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container1">
            <div className="contact-form7-input2">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input3">
              <label htmlFor="contact-form-7-phone" className="thq-body-small">
                Password
              </label>
              <input
                type="password"
                id="contact-form-7-phone"
                required="true"
                placeholder="Password"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-checkbox">
            <input
              type="checkbox"
              id="contact-form-7-check"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-7-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form7-button thq-button-filled"
          >
            <Link
              to="/welcome-page"
              className="contact-form7-action1 thq-body-small"
            >
              {props.action}
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  heading1: 'Become a member of Purrfect family!',
  content2: '',
  address: '123 Cozy Cat Lane, Meowtown, USA',
  phone: '+1-123-456-7890',
  content1: 'Get an access to our variety of books collection',
  email: 'support@cozycatreads.com',
  action: 'Join us',
}

ContactForm7.propTypes = {
  heading1: PropTypes.string,
  content2: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  content1: PropTypes.string,
  email: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm7
