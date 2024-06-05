import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './footer15.css'

const Footer15 = (props) => {
  return (
    <div
      id="footerinfo"
      className={`footer15-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer15-max-width thq-section-max-width">
        <div className="footer15-content">
          <div className="footer15-actions">
            <div className="footer15-newsletter">
              <span className="thq-body-small">{props.content1}</span>
              <div className="footer15-actions1">
                <div className="footer15-form">
                  <div className="footer15-container1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer15-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer15-button">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
                <span className="thq-body-small">{props.content2}</span>
              </div>
            </div>
            <div className="footer15-media">
              <AppComponent className=""></AppComponent>
            </div>
          </div>
        </div>
        <div className="footer15-credits">
          <div className="footer15-row">
            <div className="footer15-credits1">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
          <span className="footer15-content3 thq-body-small">
            {props.copyright}
          </span>
        </div>
      </div>
    </div>
  )
}

Footer15.defaultProps = {
  logoAlt: 'Cozy Reading Cats Logo',
  termsLink: 'Terms of Use',
  rootClassName: '',
  copyright: '© 2023 Cozy Reading Cats. All Rights Reserved.',
  content2: 'Follow Us',
  action1: 'Contact Us',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  content1: 'Join our mailing list for the latest updates',
  privacyLink: 'Privacy Policy',
  cookiesLink: 'Cookies',
}

Footer15.propTypes = {
  logoAlt: PropTypes.string,
  termsLink: PropTypes.string,
  rootClassName: PropTypes.string,
  copyright: PropTypes.string,
  content2: PropTypes.string,
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  content1: PropTypes.string,
  privacyLink: PropTypes.string,
  cookiesLink: PropTypes.string,
}

export default Footer15
