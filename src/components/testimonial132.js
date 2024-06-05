import React from 'react'

import PropTypes from 'prop-types'

import './testimonial132.css'

const Testimonial132 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial132-max-width thq-section-max-width">
        <div className="testimonial132-section-title">
          <h2 className="testimonial132-title thq-heading-2">
            {props.heading1}
          </h2>
          <p className="testimonial132-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial132-container thq-flex-row">
          <div className="testimonial132-content thq-flex-column">
            <div className="testimonial132-stars">
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
            <p className="testimonial132-text thq-body-large">
              {props.review1}
            </p>
            <div className="testimonial132-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial132-avatar-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial132-avatar-content">
                <span className="testimonial132-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial132-logo"
              />
            </div>
          </div>
          <div className="testimonial132-content1 thq-flex-column">
            <div className="testimonial132-stars1">
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
            <p className="testimonial132-text3 thq-body-large">
              {props.review2}
            </p>
            <div className="testimonial132-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial132-avatar-image1 thq-img-round"
              />
              <div className="testimonial132-avatar-content1">
                <span className="testimonial132-text4 thq-body-small">
                  {props.author2Name}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial132-logo1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial132.defaultProps = {
  review2:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  review1:
    'Cozy Cat Reads is the purrfect place for bookworms and cat lovers alike! I love the selection of books and the cozy reading nooks for me and my furry friend.',
  author1Alt: 'Author Avatar',
  company1LogoAlt: 'Company Logo',
  heading1: 'User Reviews',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MzUxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  company2LogoAlt: 'Company Logo',
  author2Name: 'Author Name',
  author1Position: 'Book Enthusiast',
  author2Alt: 'Author Avatar',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Name: 'Samantha C.',
  author2Src:
    'https://images.unsplash.com/photo-1519295918781-d590afd8e95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzU4MzUxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Position, Company name',
}

Testimonial132.propTypes = {
  review2: PropTypes.string,
  content1: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  heading1: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  author2Alt: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Name: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.string,
}

export default Testimonial132
