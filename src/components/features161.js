import React from 'react'

import PropTypes from 'prop-types'

import './features161.css'

const Features161 = (props) => {
  return (
    <div className="features161-layout300 thq-section-padding">
      <div className="features161-max-width thq-section-max-width">
        <div className="features161-section-title">
          <span className="features161-text thq-body-small">
            {props.slogan1}
          </span>
          <div className="features161-content">
            <h2 className="features161-text1 thq-heading-2">
              {props.heading1}
            </h2>
            <span className="features161-text2 thq-body-large">
              {props.content1}
            </span>
          </div>
        </div>
        <div className="features161-content1">
          <div className="features161-row thq-flex-row">
            <div className="features161-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content2">
                <h3 className="features161-feature1-title thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features161-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content3">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features161-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features161-content4">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features161.defaultProps = {
  feature2Title: 'Cat-Themed Merchandise',
  feature3Description:
    'Join our online events and book clubs to connect with fellow book lovers and cat enthusiasts.',
  feature2Description:
    'Browse through our selection of cat-themed merchandise to add a touch of feline charm to your reading corner.',
  feature1Description:
    'Choose from a wide range of books available for subscription or single-time purchase.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1603058817990-2b9a9abbce86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTI3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1564278453360-c65eda0a200e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTI3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1591872945884-85f0703467e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTI3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Explore our collection of cozy reading spaces designed for you and your feline friends to enjoy together.',
  feature3ImageAlt: 'Image of online book club meeting',
  feature1Title: 'Wide Book Selection',
  feature3Title: 'Online Events and Book Clubs',
  feature1ImageAlt: 'Image of books on a cozy reading nook',
  feature2ImageAlt: 'Image of cat-themed merchandise',
  heading1: 'Discover Cozy Reading Spaces',
  slogan1: 'Where Book Lovers and Cat Enthusiasts Unite',
}

Features161.propTypes = {
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  slogan1: PropTypes.string,
}

export default Features161
