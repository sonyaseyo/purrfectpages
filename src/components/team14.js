import React from 'react'

import PropTypes from 'prop-types'

import './team14.css'

const Team14 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team14-max-width thq-section-max-width">
        <div className="team14-section-title">
          <span className="thq-body-small team14-text">{props.content1}</span>
          <button className="team14-button thq-button-filled">
            <span className="thq-body-small">{props.actionContent}</span>
          </button>
          <div className="team14-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large team14-text03">{props.content2}</p>
          </div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-pause-autoplay-on-mouse-enter="true"
          data-disable-autoplay-on-interaction="true"
          className="team14-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team14-slider-slide swiper-slide"
            >
              <div className="team14-card">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team14-placeholder-image thq-img-ratio-1-1"
                />
                <div className="team14-content01">
                  <div className="team14-title">
                    <span className="team14-text04 thq-body-small">
                      {props.book1}
                    </span>
                    <span className="team14-text05 thq-body-small">
                      {props.book1author}
                    </span>
                  </div>
                  <span className="team14-text06 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team14-social-icons"></div>
              </div>
              <div className="team14-card01">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team14-placeholder-image01 thq-img-ratio-1-1"
                />
                <div className="team14-content02">
                  <div className="team14-title01">
                    <span className="team14-text07 thq-body-small">
                      {props.book2}
                    </span>
                    <span className="team14-text08 thq-body-small">
                      {props.book2author}
                    </span>
                  </div>
                  <span className="team14-text09 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team14-social-icons01"></div>
              </div>
              <div className="team14-card02">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team14-placeholder-image02 thq-img-ratio-1-1"
                />
                <div className="team14-content03">
                  <div className="team14-title02">
                    <span className="team14-text10 thq-body-small">
                      {props.book3}
                    </span>
                    <span className="team14-text11 thq-body-small">
                      {props.book3author}
                    </span>
                  </div>
                  <span className="team14-text12 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team14-social-icons02"></div>
              </div>
              <div className="team14-card03">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team14-placeholder-image03 thq-img-ratio-1-1"
                />
                <div className="team14-content04">
                  <div className="team14-title03">
                    <span className="team14-text13 thq-body-small">
                      {props.book4}
                    </span>
                    <span className="team14-text14 thq-body-small">
                      {props.book4author}
                    </span>
                  </div>
                  <span className="team14-text15 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team14-social-icons03"></div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide01 swiper-slide"
            >
              <div className="team14-card04">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="team14-placeholder-image04 thq-img-ratio-1-1"
                />
                <div className="team14-content05">
                  <div className="team14-title04">
                    <span className="team14-text16 thq-body-small">
                      Dark Heir
                    </span>
                    <span className="team14-text17 thq-body-small">
                      {props.book5author}
                      Job title
                    </span>
                  </div>
                  <span className="team14-text18 thq-body-small">
                    {props.member5Content}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </div>
                <div className="team14-social-icons04"></div>
              </div>
              <div className="team14-card05">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="team14-placeholder-image05 thq-img-ratio-1-1"
                />
                <div className="team14-content06">
                  <div className="team14-title05">
                    <span className="team14-text19 thq-body-small">
                      Full name
                      {props.book6}
                    </span>
                    <span className="team14-text20 thq-body-small">
                      <span>Sarah J Maas</span>
                      <br></br>
                    </span>
                  </div>
                  <span className="team14-text23 thq-body-small">
                    <span>
                      Against the sweeping backdrop of a world seared by war and
                      plagued with uncertainty, Nesta and Cassian battle
                      monsters from within and without as they search for
                      acceptance-and healing-in each other&apos;s arms.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="team14-social-icons05"></div>
              </div>
              <div className="team14-card06">
                <img
                  alt={props.member7Alt}
                  src={props.member7Src}
                  className="team14-placeholder-image06 thq-img-ratio-1-1"
                />
                <div className="team14-content07">
                  <div className="team14-title06">
                    <span className="team14-text26 thq-body-small">
                      Full name
                      {props.book7}
                    </span>
                    <span className="team14-text27 thq-body-small">
                      <span>Stephen King</span>
                      <br></br>
                    </span>
                  </div>
                  <span className="team14-text30 thq-body-small">
                    {props.member7Content}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </div>
                <div className="team14-social-icons06"></div>
              </div>
              <div className="team14-card07">
                <img
                  alt={props.member8Alt}
                  src={props.member8Src}
                  className="team14-placeholder-image07 thq-img-ratio-1-1"
                />
                <div className="team14-content08">
                  <div className="team14-title07">
                    <span className="team14-text31 thq-body-small">
                      {props.book8}
                    </span>
                    <span className="team14-text32 thq-body-small">
                      <span>Ana Huang</span>
                      <br></br>
                    </span>
                  </div>
                  <span className="team14-text35 thq-body-small">
                    {props.member8Content}
                  </span>
                </div>
                <div className="team14-social-icons07"></div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team14-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="team14-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team14-slider-slide02 swiper-slide"
            >
              <div className="team14-card08">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content09">
                  <div className="team14-title08">
                    <span className="team14-text36 thq-body-small">
                      <span>Full name</span>
                      {props.book1}
                    </span>
                    <span className="team14-text38 thq-body-small">
                      {props.book1author}
                    </span>
                  </div>
                  <span className="team14-text39 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team14-social-icons08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide03 swiper-slide"
            >
              <div className="team14-card09">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content10">
                  <div className="team14-title09">
                    <span className="team14-text40 thq-body-small">
                      Full name
                    </span>
                    <span className="team14-text41 thq-body-small">
                      {props.book2author}
                    </span>
                  </div>
                  <span className="team14-text42 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team14-social-icons09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide04 swiper-slide"
            >
              <div className="team14-card10">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content11">
                  <div className="team14-title10">
                    <span className="team14-text43 thq-body-small">
                      {props.book3}
                    </span>
                    <span className="team14-text44 thq-body-small">
                      {props.book3author}
                    </span>
                  </div>
                  <span className="team14-text45 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team14-social-icons10">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide05 swiper-slide"
            >
              <div className="team14-card11">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content12">
                  <div className="team14-title11">
                    <span className="team14-text46 thq-body-small">
                      {props.book4}
                    </span>
                    <span className="team14-text47 thq-body-small">
                      {props.book4author}
                    </span>
                  </div>
                  <span className="team14-text48 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team14-social-icons11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide06 swiper-slide"
            >
              <div className="team14-card12">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="team14-placeholder-image12 thq-img-ratio-1-1"
                />
                <div className="team14-content13">
                  <div className="team14-title12">
                    <span className="team14-text49 thq-body-small">
                      {props.book5}
                    </span>
                    <span className="team14-text50 thq-body-small">
                      {props.book5author}
                    </span>
                  </div>
                  <span className="team14-text51 thq-body-small">
                    {props.member5Content}
                  </span>
                </div>
                <div className="team14-social-icons12">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide07 swiper-slide"
            >
              <div className="team14-card13">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="team14-placeholder-image13 thq-img-ratio-1-1"
                />
                <div className="team14-content14">
                  <div className="team14-title13">
                    <span className="team14-text52 thq-body-small">
                      {props.book6}
                    </span>
                    <span className="team14-text53 thq-body-small">
                      {props.book6author}
                    </span>
                  </div>
                  <span className="team14-text54 thq-body-small">
                    {props.member6Content}
                  </span>
                </div>
                <div className="team14-social-icons13">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide08 swiper-slide"
            >
              <div className="team14-card14">
                <img
                  alt={props.member7Alt}
                  src={props.member7Src}
                  className="team14-placeholder-image14 thq-img-ratio-1-1"
                />
                <div className="team14-content15">
                  <div className="team14-title14">
                    <span className="team14-text55 thq-body-small">
                      {props.book7}
                    </span>
                    <span className="team14-text56 thq-body-small">
                      Job title
                    </span>
                  </div>
                  <span className="team14-text57 thq-body-small">
                    {props.member7Content}
                  </span>
                </div>
                <div className="team14-social-icons14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide09 swiper-slide"
            >
              <div className="team14-card15">
                <img
                  alt={props.member8Alt}
                  src={props.member8Src}
                  className="team14-placeholder-image15 thq-img-ratio-1-1"
                />
                <div className="team14-content16">
                  <div className="team14-title15">
                    <span className="team14-text58 thq-body-small">
                      {props.book8}
                    </span>
                    <span className="team14-text59 thq-body-small">
                      {props.book8author}
                    </span>
                  </div>
                  <span className="team14-text60 thq-body-small">
                    {props.member8Content}
                  </span>
                </div>
                <div className="team14-social-icons15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team14-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Team14.defaultProps = {
  member4Alt: 'Image of Daniel Lee',
  book5author: 'K S Pacat',
  member7Content:
    'An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger, he has delivered one of his most unsettling and compulsively readable stories.  An eleven-year-old boy’s violated corpse is found in a town park. Eyewitnesses and fingerprints point unmistakably to one of Flint City’s most popular citizens. He is Terry Maitland, Little League coach, English teacher, husband, and father of two girls. Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest. Maitland has an alibi, but Anderson and the district attorney soon add DNA evidence to go with the fingerprints and witnesses. Their case seems ironclad.  As the investigation expands and horrifying answers begin to emerge, King’s propulsive story kicks into high gear, generating strong tension and almost unbearable suspense. Terry Maitland seems like a nice guy, but is he wearing another face? When the answer comes, it will shock you as only Stephen King can.',
  member2Content:
    'Everyone expected Violet Sorrengail to die during her first year at Basgiath War College—Violet included. But Threshing was only the first impossible test meant to weed out the weak-willed, the unworthy, and the unlucky. Now the real training begins, and Violet’s already wondering how she’ll get through. It’s not just that it’s grueling and maliciously brutal, or even that it’s designed to stretch the riders’ capacity for pain beyond endurance. It’s the new vice commandant, who’s made it his personal mission to teach Violet exactly how powerless she is–unless she betrays the man she loves. Although Violet’s body might be weaker and frailer than everyone else’s, she still has her wits—and a will of iron. And leadership is forgetting the most important lesson Basgiath has taught her: Dragon riders make their own rules. But a determination to survive won’t be enough this year.',
  book8author: 'Ana Huang',
  book3author: 'Marissa Meyer',
  member5Content:
    'In this riveting sequel to the New York Times bestselling novel Dark Rise, Will and his allies have survived the Dark’s first assault, but at a terrible cost.  A new threat from the past is rising, and only a handful of heroes remain to fight. Pursued by dark forces, Will and his allies must leave the safety of the Hall and travel to the heart of the ancient world, making new and dangerous alliances, and revealing the shocking secrets of the past.  But Will is carrying a dark secret of his own—his true identity. Drawn to the beautiful and deadly James St. Clair, Will is pulled ever deeper into the web of the past, and finds himself tempted by the darkness within. As the ancient world threatens to return, can Will and his friends fight their fate? Or will the truths they learn tear their world apart?',
  member3Content:
    'Humans and androids crowd the raucous streets of New Beijing. A deadly plague ravages the population. From space, a ruthless Lunar people watch, waiting to make their move. No one knows that Earth’s fate hinges on one girl. . . . Cinder, a gifted mechanic, is a cyborg.  She’s a second-class citizen with a mysterious past, reviled by her stepmother and blamed for her stepsister’s illness. But when her life becomes intertwined with the handsome Prince Kai’s, she suddenly finds herself at the center of an intergalactic struggle, and a forbidden attraction. Caught between duty and freedom, loyalty and betrayal, she must uncover secrets about her past in order to protect her world’s future.',
  member3Alt: 'Image of Olivia Brown',
  member2Alt: 'Image of Ethan Johnson',
  heading1: 'Our members choice',
  book4author: 'Tahereh Mafi',
  book5: 'Dark Heir',
  member1Content:
    'Oxford, 1836.  The city of dreaming spires. It is the centre of all knowledge and progress in the world. And at its centre is Babel, the Royal Institute of Translation. The tower from which all the power of the Empire flows. Orphaned in Canton and brought to England by a mysterious guardian, Babel seemed like paradise to Robin Swift. Until it became a prison... But can a student stand against an empire?',
  member6Alt: 'Image of Michael Clark',
  member1Alt: 'Image of Alice Smith',
  content1: '',
  book1author: 'R F Kuang',
  book2: 'Iron Flame',
  book7author: 'Stephen King',
  member5Alt: 'Image of Sophia Garcia',
  book1: 'Babel',
  book6: 'A court of Silver Flames',
  member7Alt: 'Image of Emily White',
  book7: 'Outsider',
  book4: 'Shatter me',
  member3Src:
    'https://m.media-amazon.com/images/I/71Tsder+9lS._AC_UF1000,1000_QL80_.jpg',
  member6Src:
    'https://m.media-amazon.com/images/I/91Yx43Yd5eL._AC_UF1000,1000_QL80_.jpg',
  book2author: 'Rebecca Yarros',
  member8Alt: 'Image of David Roberts',
  member7Src:
    'https://m.media-amazon.com/images/I/91u+FbgR8IL._AC_UF1000,1000_QL80_.jpg',
  content2: '',
  member4Src:
    'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/9/8/9871456_.jpg',
  actionContent: '',
  member4Content:
    "Juliette hasn't touched anyone in exactly 264 days.  The last time she did, it was an accident, but The Reestablishment locked her up for murder. No one knows why Juliette's touch is fatal. As long as she doesn't hurt anyone else, no one really cares. The world is too busy crumbling to pieces to pay attention to a 17-year-old girl. Diseases are destroying the population, food is hard to find, birds don't fly anymore, and the clouds are the wrong color.  The Reestablishment said their way was the only way to fix things, so they threw Juliette in a cell. Now so many people are dead that the survivors are whispering war—and The Reestablishment has changed its mind. Maybe Juliette is more than a tortured soul stuffed into a poisonous body. Maybe she's exactly what they need right now.  Juliette has to make a choice: Be a weapon. Or be a warrior.",
  member5Src:
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682693635i/52780201.jpg',
  member6Content:
    "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, she's struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she can't seem to move past the horrors of the war with Hybern and all she lost in it.  The one person who ignites her temper more than any other is Cassian, the battle-scarred warrior whose position in Rhysand and Feyre's Night Court keeps him constantly in Nesta's orbit. But her temper isn't the only thing Cassian ignites. The fire between them is undeniable, and only burns hotter as they are forced into close quarters with each other.  Meanwhile, the treacherous human queens who returned to the Continent during the last war have forged a dangerous new alliance, threatening the fragile peace that has settled over the realms. And the key to halting them might very well rely on Cassian and Nesta facing their haunting pasts.  Against the sweeping backdrop of a world seared by war and plagued with uncertainty, Nesta and Cassian battle monsters from within and without as they search for acceptance-and healing-in each other's arms.",
  book3: 'Cinder',
  member2Src:
    'https://m.media-amazon.com/images/I/91JsmiyAReL._AC_UF894,1000_QL80_.jpg',
  member8Src:
    'https://m.media-amazon.com/images/I/71u59k0c6DL._AC_UF1000,1000_QL80_.jpg',
  member1Src:
    'https://static.yakaboo.ua/media/catalog/product/8/1/81uf_vncfjl.jpg',
  book8: 'Twisted Hate',
  member8Content:
    "He hates her...almost as much as he wants her.  Gorgeous, cocky, and fast on his way to becoming a hotshot doctor, Josh Chen has never met a woman he couldn’t charm—except for Jules f**king Ambrose.  The beautiful redhead has been a thorn in his side since they met, but she also consumes his thoughts in a way no woman ever has.  When their animosity explodes into one unforgettable night, he proposes a solution that’ll get her out of his system once and for all: an enemies with benefits arrangement with simple rules.  No jealousy.  No strings attached.  And absolutely no falling in love.  **  Outgoing and ambitious, Jules Ambrose is a former party girl who’s focused on one thing: passing the attorney’s bar exam.  The last thing she needs is to get involved with a doctor who puts the SUFFER in insufferable…no matter how good-looking he is.  But the more she gets to know him, the more she realizes there’s more than meets the eye to the man she’s hated for so long.  Her best friend’s brother.  Her nemesis.  And her only salvation.   Theirs is a match made in hell, and when the demons from their past catch up with them, they’re faced with truths that could either save them …or destroy everything they’ve worked for.  Twisted Hate is a steamy enemies with benefits/enemies to lovers romance. It's book three in the Twisted series but can be read as a standalone.",
  book6author: 'Sarah J Maas',
}

Team14.propTypes = {
  member4Alt: PropTypes.string,
  book5author: PropTypes.string,
  member7Content: PropTypes.string,
  member2Content: PropTypes.string,
  book8author: PropTypes.string,
  book3author: PropTypes.string,
  member5Content: PropTypes.string,
  member3Content: PropTypes.string,
  member3Alt: PropTypes.string,
  member2Alt: PropTypes.string,
  heading1: PropTypes.string,
  book4author: PropTypes.string,
  book5: PropTypes.string,
  member1Content: PropTypes.string,
  member6Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  content1: PropTypes.string,
  book1author: PropTypes.string,
  book2: PropTypes.string,
  book7author: PropTypes.string,
  member5Alt: PropTypes.string,
  book1: PropTypes.string,
  book6: PropTypes.string,
  member7Alt: PropTypes.string,
  book7: PropTypes.string,
  book4: PropTypes.string,
  member3Src: PropTypes.string,
  member6Src: PropTypes.string,
  book2author: PropTypes.string,
  member8Alt: PropTypes.string,
  member7Src: PropTypes.string,
  content2: PropTypes.string,
  member4Src: PropTypes.string,
  actionContent: PropTypes.string,
  member4Content: PropTypes.string,
  member5Src: PropTypes.string,
  member6Content: PropTypes.string,
  book3: PropTypes.string,
  member2Src: PropTypes.string,
  member8Src: PropTypes.string,
  member1Src: PropTypes.string,
  book8: PropTypes.string,
  member8Content: PropTypes.string,
  book6author: PropTypes.string,
}

export default Team14
