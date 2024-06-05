import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div
      className={`features17-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features17-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Slogan: 'Find your perfect spot to curl up with a book',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1591193215198-382df07480f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxjYXQlMjBib29rfGVufDB8fHx8MTcxNTg1NTIzOHww&ixlib=rb-4.0.3&w=1400',
  feature1Description:
    "Our subscription model gives you access to a wide range of books, including fiction, non-fiction, fantasy, sci-fi, horror, comics, manga, children's books, business, and self-development titles.",
  rootClassName: '',
  feature1ImageAlt: 'Cozy Reading Nooks Image',
  feature1Title: 'Discover your purrfect reading plan',
}

Features17.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features17
