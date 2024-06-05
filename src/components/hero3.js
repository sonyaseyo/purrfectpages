import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className={`hero3-header9 ${props.rootClassName} `}>
      <img
        alt={props.image1Alt}
        src="https://frontpagemeews.com/wp-content/uploads/2020/04/book-white-sweet-animal-cute-looking-641379-pxhere.com_.jpg"
        className="hero3-placeholder-image thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-column">
            <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="thq-body-large hero3-text1">{props.content1}</p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button">
                <Link to="/sign-in" className="hero3-text2 thq-body-small">
                  {props.action1}
                </Link>
              </button>
              <button className="thq-button-outline hero3-button1">
                <Link to="/books" className="hero3-text3 thq-body-small">
                  {props.action2}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  rootClassName: '',
  heading1: 'Explore our purrfect book selections',
  image1Src:
    'https://images.unsplash.com/photo-1487695652027-48e475bfa86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTg1MjUyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Cozy reading nook with a cat',
  content1: 'Welcome to our cozy corner for book lovers and cat enthusiasts',
  action2: 'Browse Books',
  action1: 'Meet Our Cats',
}

Hero3.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero3
