import React from 'react'

import PropTypes from 'prop-types'

import './testimonial14.css'

const Testimonial14 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial14-max-width thq-section-max-width">
        <div className="testimonial14-section-title">
          <h2 className="testimonial14-title thq-heading-2">
            {props.heading1}
          </h2>
          <p className="testimonial14-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial14-container thq-flex-row">
          <div className="testimonial14-content thq-flex-column">
            <div className="testimonial14-stars">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="thq-body-large">{props.review1}</p>
            <div className="testimonial14-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial14-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial14-avatar-content">
                <span className="testimonial14-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
          </div>
          <div className="testimonial14-content1 thq-flex-column">
            <div className="testimonial14-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="thq-body-large">{props.review2}</p>
            <div className="testimonial14-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial14-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial14-avatar-content1">
                <span className="testimonial14-text4 thq-body-small">
                  {props.author2Name}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial14.defaultProps = {
  author1Name: 'Sarah M.',
  company1LogoAlt: 'CozyCatReads Logo',
  author2Src:
    'https://images.unsplash.com/photo-1546778316-dfda79f1c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMDUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: 'Book Lover & Cat Enthusiast',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwMDUwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Dedicated Reader',
  review2:
    'As a long-time member of CozyCatReads, I can confidently say that this platform has enriched my reading experience. The book clubs and online events are engaging, and the cat-themed merchandise is simply adorable!',
  author2Name: 'Michael L.',
  company2LogoAlt: 'CozyCatReads Logo',
  content1:
    'Still hesitating? Come check what our members think of our service!',
  review1:
    'CozyCatReads is a dream come true for book lovers who also happen to be cat enthusiasts! I love being able to curl up with a good book and my furry friend in one of the cozy reading spaces provided by the website.',
  author1Alt: 'Image of Sarah M.',
  heading1: 'What Our Members Say',
  author2Alt: 'Image of Michael L.',
}

Testimonial14.propTypes = {
  author1Name: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author2Src: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Position: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  content1: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial14
