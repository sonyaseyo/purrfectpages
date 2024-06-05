import React from 'react'

import PropTypes from 'prop-types'

import './logos22.css'

const Logos22 = (props) => {
  return (
    <div className="logos22-container thq-section-padding">
      <div className="logos22-max-width thq-section-max-width">
        <h2 className="logos22-text thq-heading-2">{props.heading1}</h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos22-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos22-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos22-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos22-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos22-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos22.defaultProps = {
  heading1: 'Cozy Cat Reads Logo',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Alt: 'Cozy Cat Reads Book Club Logo',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Cozy Cat Reads Main Logo',
  logo5Alt: 'Cozy Cat Reads Merchandise Logo',
  logo2Alt: 'Cozy Cat Reads Subscription Logo',
  logo4Alt: 'Cozy Cat Reads Events Logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos22.propTypes = {
  heading1: PropTypes.string,
  logo5Src: PropTypes.string,
  logo2Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo3Src: PropTypes.string,
}

export default Logos22
