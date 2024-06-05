import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './pricing7.css'

const Pricing7 = (props) => {
  const [isMontlhy, setIsMontlhy] = useState(true)
  return (
    <div id="pricingplans" className="pricing7-pricing23 thq-section-padding">
      <div className="pricing7-max-width thq-section-max-width">
        <div className="pricing7-section-title">
          <span className="pricing7-text thq-body-small">{props.content1}</span>
          <div className="pricing7-content">
            <h2 className="pricing7-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing7-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        {isMontlhy && (
          <div className="pricing7-container">
            <div className="pricing7-column thq-card">
              <div className="pricing7-price">
                <div className="pricing7-price1">
                  <p className="pricing7-text03 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing7-text04 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing7-list">
                  <div className="pricing7-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing7-list-item1">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing7-list-item2">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to="/sign-in"
                className="pricing7-button thq-button-outline"
              >
                <span className="thq-body-small">{props.plan1Action}</span>
              </Link>
            </div>
            <div className="pricing7-column1 thq-card">
              <div className="pricing7-price2">
                <div className="pricing7-price3">
                  <p className="pricing7-text10 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing7-text11 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing7-list1">
                  <div className="pricing7-list-item3">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing7-list-item4">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing7-list-item5">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to="/sign-in"
                className="pricing7-button1 thq-button-filled"
              >
                <span className="thq-body-small">{props.plan2Action}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing7.defaultProps = {
  plan21: 'Business plan',
  plan2Feature11: 'All features of the Premium Monthly Plan',
  plan1Yearly: '',
  plan2Action: 'Subscribe now',
  plan1Feature11: 'All features of the Purrfect Standart',
  plan1Feature1: 'Unlimited access to library content',
  plan1Yearly1: 'or $20 monthly',
  plan2Feature31: 'Priority access to online events and book clubs',
  plan1Feature21: 'Save 17% with annual billing',
  plan2Feature21: 'Save 16% with annual billing',
  content1: 'Choose the perfect plan for you',
  plan1Feature3: '10% discount on cat-themed merchandise',
  plan2Feature2: 'Free access to our offline and online events',
  plan1Feature31: 'Exclusive invites to online events and book clubs',
  plan1Price1: '$99.99/year',
  plan2Feature3: '20% discount on cat-themed merchandise',
  plan1Price: '$9.99/month',
  plan11: 'Basic plan',
  plan2Yearly: '',
  content2: 'Here are our purrfect plans for your amazing reading experience.',
  plan1Feature2: 'Free access to our online events',
  plan2: 'Purrfect Premium',
  plan2Price: '$14.99/month',
  plan1Action1: 'Subscribe now',
  plan2Price1: '$149.99/year',
  plan1Action: 'Subscribe now',
  heading1: 'Pricing plan',
  plan2Action1: 'Get started',
  plan1: 'Purrfect Standart',
  plan2Monthly2: 'or $29 monthly',
  plan2Feature1: 'All features of the Purrfect Standart',
}

Pricing7.propTypes = {
  plan21: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan2Action: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan2Feature21: PropTypes.string,
  content1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan1Price: PropTypes.string,
  plan11: PropTypes.string,
  plan2Yearly: PropTypes.string,
  content2: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan2: PropTypes.string,
  plan2Price: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan1Action: PropTypes.string,
  heading1: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1: PropTypes.string,
  plan2Monthly2: PropTypes.string,
  plan2Feature1: PropTypes.string,
}

export default Pricing7
