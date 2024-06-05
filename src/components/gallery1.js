import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div
      className={`gallery1-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="gallery1-image thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Alt: 'Warm and inviting reading corner',
  image1Alt: 'Cozy reading nook with a cat',
  content1:
    'Take a peek at our cozy reading nooks where you can curl up with a book and a furry friend by your side.',
  heading1: 'Cozy Reading Book Gallery',
  image3Src:
    'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGJvb2t8ZW58MHx8fHwxNzE1ODM0NTI5fDA&ixlib=rb-4.0.3&w=1400',
  image1Src:
    'https://images.unsplash.com/photo-1599488879763-bc34d1796448?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNhdCUyMGJvb2t8ZW58MHx8fHwxNzE1ODU1MjI0fDA&ixlib=rb-4.0.3&w=1400',
  rootClassName: '',
  image2Src:
    'https://images.unsplash.com/photo-1533746873999-216ac24b7e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTg1MjUyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGJvb2t8ZW58MHx8fHwxNzE1ODM0NTI5fDA&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'Cat lounging in a cozy reading spot',
  imageAlt: 'image',
}

Gallery1.propTypes = {
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image2Src: PropTypes.string,
  imageSrc: PropTypes.string,
  image3Alt: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Gallery1
