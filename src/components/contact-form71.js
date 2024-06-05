import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './contact-form71.css'

const ContactForm71 = (props) => {
  return (
    <div className="contact-form71-contact1 thq-section-padding">
      <div className="contact-form71-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form71-section-title thq-flex-column">
          <div className="contact-form71-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-small contact-form71-text1">
              {props.content1}
            </span>
          </div>
        </div>
        <form className="contact-form71-form thq-flex-column">
          <div className="contact-form71-container">
            <div className="contact-form71-input">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-first-name"
                placeholder="Email"
                className="contact-form71-text-input thq-input"
              />
            </div>
          </div>
          <div className="contact-form71-container1">
            <div className="contact-form71-input1">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Password
              </label>
              <input
                type="password"
                id="contact-form-7-email"
                required="true"
                placeholder="Password"
                className="contact-form71-text-input1 thq-input"
              />
            </div>
          </div>
          <div className="contact-form71-container2">
            <Link to="/sign-up" className="contact-form71-navlink">
              {props.text}
            </Link>
          </div>
          <div className="contact-form71-checkbox">
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
            className="contact-form71-button thq-button-filled"
          >
            <Link
              to="/welcome-back-page"
              className="contact-form71-action1 thq-body-small"
            >
              {props.action}
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm71.defaultProps = {
  content1: "We're glad to see you again!",
  heading1: 'Welcome back',
  action: 'Sign in',
  text: "Don't have an account yet? Join us.",
  buttonDisabled: '',
}

ContactForm71.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action: PropTypes.string,
  text: PropTypes.string,
  buttonDisabled: PropTypes.string,
}

export default ContactForm71
