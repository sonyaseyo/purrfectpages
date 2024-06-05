import React from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div
      className={`features171-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content">
          <div className="features171-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features171-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features171.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTg1MjUyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Discover a variety of books to read with your furry feline companion.',
  feature1Title: 'Cozy Reading Books',
  rootClassName: '',
  feature1ImageAlt: 'Cozy Reading Nooks',
  feature1Slogan: 'Find your perfect reading spot',
}

Features171.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features171
