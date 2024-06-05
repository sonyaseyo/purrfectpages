import React from 'react'

import PropTypes from 'prop-types'

import './testimonial131.css'

const Testimonial131 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial131-max-width thq-section-max-width">
        <div className="testimonial131-section-title">
          <h2 className="testimonial131-title thq-heading-2">
            {props.heading1}
          </h2>
          <p className="testimonial131-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial131-container thq-flex-row">
          <div className="testimonial131-content thq-flex-column">
            <div className="testimonial131-stars">
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
            <p className="testimonial131-text thq-body-large">
              {props.review1}
            </p>
            <div className="testimonial131-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial131-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial131-avatar-content">
                <span className="testimonial131-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial131-logo"
              />
            </div>
          </div>
          <div className="testimonial131-content1 thq-flex-column">
            <div className="testimonial131-stars1">
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
            <p className="testimonial131-text3 thq-body-large">
              {props.review2}
            </p>
            <div className="testimonial131-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial131-avatar-image1 thq-img-round"
              />
              <div className="testimonial131-avatar-content1">
                <span className="testimonial131-text4 thq-body-small">
                  {props.author2Name}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial131-logo1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial131.defaultProps = {
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  author2Src:
    'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwNzY3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Avid Reader',
  company2LogoAlt: 'Cozy Cat Reads Logo',
  author2Alt: 'Image of Michael Smith',
  review1:
    'I absolutely love Cozy Cat Reads! The selection of books is fantastic, and the cat-friendly reading spaces are a dream come true for me and my furry friend.',
  author1Alt: 'Image of Emily Johnson',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: 'Bookworm and Cat Lover',
  review2:
    "Being a member of Cozy Cat Reads has enriched my reading experience beyond words. The online events and book clubs are engaging, and I've discovered so many new favorite authors through this platform.",
  heading1: 'Wonderful Experience with Cozy Cat Reads',
  author1Src:
    'https://images.unsplash.com/photo-1614583225976-6cbcf152b562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQwNzY3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Michael Smith',
  author1Name: 'Emily Johnson',
  company1LogoAlt: 'Cozy Cat Reads Logo',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Testimonial131.propTypes = {
  content1: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  author2Name: PropTypes.string,
  author1Name: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  company2LogoSrc: PropTypes.string,
}

export default Testimonial131
