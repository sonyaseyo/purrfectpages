import React from 'react'

import PropTypes from 'prop-types'

import './logos81.css'

const Logos81 = (props) => {
  return (
    <div className="logos81-container thq-section-padding">
      <div className="logos81-max-width thq-section-max-width">
        <div className="logos81-container1">
          <h2 className="thq-heading-2 logos81-text">{props.heading1}</h2>
          <p className="logos81-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="logos81-container2 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos81-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos81-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos81-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos81-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos81-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos81-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos81-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos81-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos81.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  logo6Alt: 'Cozy Cat Reads contact options logo',
  logo2Alt: 'Cozy Cat Reads book and cat logo',
  logo1Alt: 'Cozy Cat Reads logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Alt: 'Cozy Cat Reads cozy reading space logo',
  logo5Alt: 'Cozy Cat Reads events and book clubs logo',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Alt: 'Cozy Cat Reads FAQs logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Alt: 'Cozy Cat Reads subscription and purchase logo',
  logo4Alt: 'Cozy Cat Reads merchandise logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  heading1: 'Companies that trust us',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos81.propTypes = {
  content1: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo7Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo8Src: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo8Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  heading1: PropTypes.string,
  logo4Src: PropTypes.string,
}

export default Logos81
