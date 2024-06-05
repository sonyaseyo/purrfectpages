import React from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div className="gallery7-gallery3 thq-section-padding">
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery7-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery7-container">
          <div className="gallery7-content">
            <div className="gallery7-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image5Alt: 'Cozy blanket and book setup with a cat',
  heading1: 'Gallery of Cozy Reading Cats',
  image1Alt: 'Cozy reading nook with a fluffy cat',
  content1:
    'Explore our gallery featuring cozy reading spaces and adorable cats. Get inspired for your next reading session!',
  image7Alt: 'Book stack with a playful cat',
  image1Src:
    'https://images.unsplash.com/photo-1507587396692-5afe1f777676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Cat curled up next to a warm fireplace',
  image6Src:
    'https://images.unsplash.com/photo-1487001175664-86de872e3cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1603824256107-1a2e7cc7da60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1515615200917-f9623be1d8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Bookshelf filled with cozy reading books',
  image4Alt: 'Reading corner with a sleepy cat',
  image6Alt: 'Cat lounging on a comfortable reading chair',
  image3Src:
    'https://images.unsplash.com/photo-1599276188787-63e64b366e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1589221475596-7133b597dc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1566717528523-51bbcd5a644b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMjE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery7.propTypes = {
  image5Alt: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
}

export default Gallery7
