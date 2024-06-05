import React from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div className="cta15-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta15-actions">
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

CTA15.defaultProps = {
  content1:
    'Explore our collection of books and merchandise for you and your feline friends.',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1606583686915-912e005f6058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Subscribe Now',
  action2: 'Browse Books',
  heading1: 'Join Cozy Cat Reads Today!',
  backgroundImageAlt: 'Cozy Cat Reads CTA Background',
}

CTA15.propTypes = {
  content1: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
}

export default CTA15
