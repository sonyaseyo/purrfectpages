import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta4.css'

const CTA4 = (props) => {
  return (
    <div className="cta4-container thq-section-padding">
      <div className="cta4-max-width thq-section-max-width">
        <div className="cta4-container1 thq-flex-row">
          <div className="cta4-column">
            <span className="thq-heading-2">{props.content1}</span>
            <p className="thq-body-small">{props.content2}</p>
            <div className="cta4-actions">
              <a href="#pricingplans" className="cta4-link thq-button-filled">
                {props.action1}
              </a>
              <Link to="/books" className="cta4-navlink thq-button-outline">
                {props.action2}
              </Link>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta4-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

CTA4.defaultProps = {
  action2: 'Browse Books',
  content2: 'Explore our book genres and find your next favorite read.',
  action1: 'Subscribe Now',
  image1Src:
    'https://images.unsplash.com/photo-1575709527142-a93ed587bb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMDUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Join Cozy Cat Reads today and start your reading adventure!',
  image1Alt: 'Join Cozy Cat Reads',
}

CTA4.propTypes = {
  action2: PropTypes.string,
  content2: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default CTA4
