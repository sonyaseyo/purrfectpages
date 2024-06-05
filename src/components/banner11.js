import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div className="banner11-container thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container1">
          <h2 className="banner11-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner11-text thq-heading-3">{props.content1}</h3>
        </div>
        <Link to="/books" className="banner11-navlink thq-button-filled">
          {props.action1}
        </Link>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  content1:
    "We're glad you returned. How about a cup of coffe and a good book to begin with?",
  heading1: 'Welcome back, dear reader!',
  action1: 'Check out our new releases',
}

Banner11.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner11
