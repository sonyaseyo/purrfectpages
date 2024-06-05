import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container thq-section-padding">
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container1">
          <h2 className="banner1-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner1-text thq-heading-3">{props.content1}</h3>
        </div>
        <Link to="/books" className="banner1-navlink thq-button-filled">
          {props.action1}
        </Link>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  content1:
    'Get comfortable and dive into the fictional worlds with our furry companions',
  heading1: 'Welcome to the Purrfect Family!',
  action1: 'Explore Now',
}

Banner1.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner1
