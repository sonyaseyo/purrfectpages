import React from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1}
          </h2>
          <p className="testimonial13-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content thq-flex-column">
            <div className="testimonial13-stars">
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
            <p className="testimonial13-text thq-body-large">{props.review1}</p>
            <div className="testimonial13-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial13-avatar-content">
                <span className="testimonial13-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo"
              />
            </div>
          </div>
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
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
            <p className="testimonial13-text3 thq-body-large">
              {props.review2}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image1 thq-img-round"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text4 thq-body-small">
                  {props.author2Name}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  author2Alt: 'Author Avatar',
  review1:
    'Cozy Cat Reads is a dream come true for bookworms and cat lovers like me! The selection of books is fantastic, and the cozy reading spaces are purrfect for spending quality time with my feline friend.',
  author2Name: 'Author Name',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Alt: 'Image of Sarah C. - Book Enthusiast and Cat Mom',
  author2Position: 'Position, Company name',
  author1Src:
    'https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwNzEyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwNzEyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Book Enthusiast and Cat Mom',
  author1Name: 'Sarah C.',
  company2LogoAlt: 'Company Logo',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review2:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  heading1: 'User Reviews',
  company1LogoAlt: 'Company Logo',
}

Testimonial13.propTypes = {
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  author2Name: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.string,
  author1Name: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  company1LogoAlt: PropTypes.string,
}

export default Testimonial13
