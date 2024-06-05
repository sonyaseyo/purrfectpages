import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <Link to="/plans" className="hero9-text2 thq-body-small">
                {props.action1}
              </Link>
            </button>
            <button className="thq-button-outline hero9-button1">
              <Link to="/books" className="hero9-text3 thq-body-small">
                {props.action2}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1683115764991-0da982c1410a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Browse Books',
  heading1: 'Welcome to Book & Cat Haven',
  action1: 'Join Now',
  content1:
    'Indulge in the purrfect reading experience with your feline companion by your side.',
  image1Alt: 'Image of a person reading with a cat',
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
