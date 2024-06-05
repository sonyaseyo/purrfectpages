import React from 'react'

import PropTypes from 'prop-types'

import './faq4.css'

const FAQ4 = (props) => {
  return (
    <div id="faqinfoplans" className="faq4-faq12 thq-section-padding">
      <div className="faq4-max-width thq-section-max-width">
        <div className="faq4-section-title thq-flex-column">
          <h2 className="faq4-text thq-heading-2">{props.heading1}</h2>
          <p className="faq4-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-row faq4-content">
          <div className="thq-flex-column">
            <div className="faq4-list-item1">
              <p className="faq4-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq4-list-item2">
              <p className="faq4-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq4-list-item3">
              <p className="faq4-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq4-list-item4">
              <p className="faq4-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq4-list-item5">
              <p className="faq4-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq4-list-item6">
              <p className="faq4-faq1-question1 thq-body-large">
                {props.faq6Question}
              </p>
              <span className="thq-body-small">{props.faq6Answer}</span>
            </div>
            <div className="faq4-list-item7">
              <p className="faq4-faq2-question1 thq-body-large">
                {props.faq7Question}
              </p>
              <span className="thq-body-small">{props.faq7Answer}</span>
            </div>
            <div className="faq4-list-item8">
              <p className="faq4-faq3-question1 thq-body-large">
                {props.faq8Question}
              </p>
              <span className="thq-body-small">{props.faq8Answer}</span>
            </div>
            <div className="faq4-list-item9">
              <p className="faq4-faq4-question1 thq-body-large">
                {props.faq9Question}
              </p>
              <span className="thq-body-small">{props.faq9Answer}</span>
            </div>
            <div className="faq4-list-item10">
              <p className="faq4-faq5-question1 thq-body-large">
                {props.faq10Question}
              </p>
              <span className="thq-body-small">{props.faq10Answer}</span>
            </div>
          </div>
        </div>
        <div className="faq4-content1 thq-flex-column">
          <div className="faq4-content2">
            <h2 className="thq-heading-2 faq4-text2">{props.heading2}</h2>
            <p className="thq-body-large faq4-text3">{props.content2}</p>
          </div>
          <button className="thq-button-outline">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ4.defaultProps = {
  faq8Answer:
    "You can update your payment information by logging into your account and navigating to the 'Billing' or 'Payment' section.",
  faq10Answer:
    'Our website is suitable for readers of all ages. However, parental guidance is recommended for younger readers.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq2Answer:
    'No, the books are not available for download. You can read them directly on our website.',
  faq5Question: 'I forgot my password. What should I do?',
  faq3Answer:
    'Yes, you can cancel your subscription at any time. There are no long-term commitments.',
  heading2: 'Account and Technical Support',
  heading1: 'Frequently Asked Questions',
  faq7Answer:
    'Yes, you can access your account from multiple devices by logging in with your credentials on each device.',
  faq10Question: 'Are there any age restrictions for accessing the books?',
  faq8Question: 'How can I update my payment information?',
  faq1Question: 'How does the subscription model work?',
  faq4Question: 'Do you offer refunds for subscriptions?',
  faq6Question:
    "I'm experiencing technical issues with the website. How can I get help?",
  faq1Answer:
    'Our subscription model grants you access to a wide range of books for a monthly fee. You can enjoy unlimited reading during your subscription period.',
  faq6Answer:
    'Please reach out to our technical support team at support@cozycatreads.com for assistance with any website-related issues.',
  faq3Question: 'Can I cancel my subscription anytime?',
  faq9Answer:
    'We currently do not offer a free trial for new users. However, you can explore our website and view sample book previews before subscribing.',
  faq9Question: 'Do you offer a free trial for new users?',
  content1: '',
  faq7Question: 'Can I access my account from multiple devices?',
  faq4Answer:
    'We do not offer refunds for subscriptions. However, you can cancel your subscription at any time to avoid future charges.',
  faq2Question: 'Are the books available for download?',
  faq5Answer:
    "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions to set a new password.",
  action1: 'Contact',
}

FAQ4.propTypes = {
  faq8Answer: PropTypes.string,
  faq10Answer: PropTypes.string,
  content2: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  faq7Answer: PropTypes.string,
  faq10Question: PropTypes.string,
  faq8Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq6Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq6Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq9Answer: PropTypes.string,
  faq9Question: PropTypes.string,
  content1: PropTypes.string,
  faq7Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  action1: PropTypes.string,
}

export default FAQ4
