import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div
      id="faqbox"
      className={`faq1-faq7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <a href="#footerinfo" className="faq1-button thq-button-outline">
              <span className="thq-body-small">{props.action1}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  faq2Answer:
    'Yes, single time purchases are available in our library. However, we do recommend subscription for a better experience!',
  heading1: 'FAQs',
  rootClassName: '',
  content2: 'Feel free to contact us!',
  faq3Answer:
    'Unfortunately, this feature is currently unavailable. We are working on its development though. Stay tuned!',
  faq5Question: 'Are there any special events or book clubs held?',
  faq1Answer:
    'All you need is to choose the subscription plan suitable for you. Contact us if you need help or consultation.',
  faq2Question:
    'Can i do single time purchases without paying for subscription?',
  faq4Question: 'Can I purchase cat-themed merchandise offline?',
  heading2: 'Still have a question?',
  faq3Question: 'Can i download my books on my Kindle?',
  faq4Answer:
    'Yes, we have a selection of cat-themed merchandise available for purchase in the stores of our partners. You can check them out in About Us section.',
  faq5Answer:
    'Yes, we regularly host online events and book clubs for our users. Keep in touch with us in our blog where we post updates about them weekly!',
  content1: 'Here are the most popular questions from our readers.',
  faq1Question: 'How do i get started?',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  faq2Answer: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Question: PropTypes.string,
  heading2: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  content1: PropTypes.string,
  faq1Question: PropTypes.string,
}

export default FAQ1
