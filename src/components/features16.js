import React from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span className="features16-text thq-body-small">
            {props.slogan1}
          </span>
          <div className="features16-content">
            <h2 className="features16-text1 thq-heading-2">{props.heading1}</h2>
            <span className="features16-text2 thq-body-large">
              {props.content1}
            </span>
          </div>
        </div>
        <div className="features16-content1">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content2">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
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

Features16.defaultProps = {
  feature1Title: 'Cozy Reading Spaces',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1484415063229-3d6335668531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTA5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Cat-Themed Merchandise',
  heading1: 'Features',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1571510175664-855ac60fe8f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2Description:
    'Discover a variety of cat-themed merchandise to show off your love for felines while reading your favorite books.',
  feature3ImageAlt: 'Online Events and Book Clubs Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1598745845211-7d7a22d8cc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MTA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Cozy Reading Spaces Image',
  feature3Title: 'Online Events and Book Clubs',
  slogan1: 'Slogan',
  feature1Description:
    'Explore our cozy reading spaces designed for you and your cat to enjoy a peaceful reading experience.',
  feature2ImageAlt: 'Cat-Themed Merchandise Image',
  feature3Description:
    'Join our online events and book clubs to engage with fellow book lovers and cat enthusiasts in lively discussions.',
}

Features16.propTypes = {
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  heading1: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  slogan1: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
}

export default Features16
