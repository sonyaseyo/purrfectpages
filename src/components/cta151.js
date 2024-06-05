import React from 'react'

import PropTypes from 'prop-types'

import './cta151.css'

const CTA151 = (props) => {
  return (
    <div className="cta151-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta151-background-image thq-img-ratio-16-9"
      />
      <div className="cta151-max-width thq-section-max-width">
        <div className="cta151-column">
          <div className="cta151-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta151-actions">
            <button type="button" className="thq-button-filled">
              {props.action1}
            </button>
            <button type="button" className="thq-button-outline">
              {props.action2}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA151.defaultProps = {
  action1: 'Subscribe Now',
  content1:
    'Discover a purr-fect reading experience for you and your feline companion.',
  backgroundImageAlt: 'Cozy Cat Reads CTA Background Image',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1471440671318-55bdbb772f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTI3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Join Cozy Cat Reads Today!',
  action2: 'Browse Books',
}

CTA151.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
}

export default CTA151
